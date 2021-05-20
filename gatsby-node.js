const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
    {
      projects: 
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {posttype: {eq: "project"}}}) {
        edges {
          previous {
            frontmatter {
              slug
              title
              
            }
          }
          next {
            frontmatter {
              title
              slug
              
            }
          }
          node {
            frontmatter {
              category
              date
              intro
              posttype
              slug
              title
              url
              
              addtohomepage
            }
          }
        }
      }


      blog: 
        allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {frontmatter: {posttype: {eq: "blog"}}}) {
        edges {
          previous {
            frontmatter {
              slug
              title
            }
          }
          next {
            frontmatter {
              title
              slug
            }
          }
          node {
            frontmatter {
              category
              date
              intro
              posttype
              slug
              title
              addtohomepage
            }
          }
        }
      }

    }
      `).then(results => {
      console.log(results)
      if (results.error) {
        reject(results.error)
      }

      //Create portfolio page
      const portfolioItems = results.data.projects.edges
      portfolioItems.forEach((portfolioItem, index) => {
        const next = index === portfolioItems.length - 1 ? null : portfolioItems[index + 1].node
        const previous = index === 0 ? null : portfolioItems[index - 1].node
        var pagePath = `/projects/`
        var templatePath = `./src/templates/projectsMD.js`
        var item = portfolioItem

        createPage({
          path: `${pagePath}${item.node.frontmatter.slug}`,
          component: path.resolve(templatePath),
          context: {
            slug: item.node.frontmatter.slug,
            pathItem: item,
            previous,
            next,
          },
        })
      })

      //Create blog page
      const blogItems = results.data.blog.edges
      blogItems.forEach((blogItem, index) => {
        const next = index === blogItems.length - 1 ? null : blogItems[index + 1].node
        const previous = index === 0 ? null : blogItems[index - 1].node
        const thisBlogItem = blogItem
        var pagePath = `/blog/`
        var templatePath = `./src/templates/blogMD.js`
        var item = blogItem


        createPage({
          path: `${pagePath}${item.node.frontmatter.slug}`,
          component: path.resolve(templatePath),
          context: {
            slug: item.node.frontmatter.slug,
            pathItem: item,
            previous,
            next,
          },
        })
      })

    }).then(resolve)
  })
}











