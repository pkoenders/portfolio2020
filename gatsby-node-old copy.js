/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it


exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectsMD = require.resolve(`./src/templates/projectsMD.js`)
  const projectsNetlifyCMS = require.resolve(`./src/templates/projectsNetlifyCMS.js`)

  const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {category: {}, posttype: {eq: "project"}}}
        ) {
          edges {
            node {
              frontmatter {
                posttype
                slug
              }
            }
          }
        }
      }
    `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.posttype === 'project') {
      createPage({
        path: node.frontmatter.slug,
        component: projectsMD,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    }
  })
}