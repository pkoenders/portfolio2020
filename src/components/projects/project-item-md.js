import React from "react"
//import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../seo/seo'
import projectStyles from './project-item.module.scss'

//export default function ProjectTemplate({ data }) {
const ProjectTemplate = ({ data }) => {

  const Metadata = useStaticQuery(graphql`
    query projectsData {
      site {
        siteMetadata {
          title
        }
      }
    }
`)

  //console.log(pageContext)

  const { markdownRemark } = data // data.markdownRemark holds your post data
  //const { markdownRemark } = data.allMarkdownRemark.edges.node.frontmatter // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  //const link = "http://" + frontmatter.url
  const link = frontmatter.url

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #ffffff;
        }
      `}
      </style>
      <SEO
        title={frontmatter.title + ' - Projects | ' + Metadata.site.siteMetadata.title}
        description={frontmatter.intro}
        image={frontmatter.coverimage.childImageSharp.fluid.src}
      />
      <section className={projectStyles.sectionProject + ' section-layout-wide'}>

        <div className={projectStyles.sectionProjectWrapper}>
          <div className={projectStyles.content}>
            <div className={projectStyles.header}>
              <h1>{frontmatter.title}</h1>
              <p>
                {frontmatter.category}<br />
                {frontmatter.date}<br />
                <a href={link} title={frontmatter.title} rel="noreferrer" target="_blank"><i className={"material-icons-round"} aria-hidden="true">launch</i>{frontmatter.url}</a>
              </p>
            </div>
            <div className={projectStyles.contentInner}>
              <div
                className={projectStyles.contentMD}
                dangerouslySetInnerHTML={{ __html: html }}>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectTemplate