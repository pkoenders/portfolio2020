import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Seo from '../common/seo/'

import * as projectStyles from './blogItem.module.scss'

//export default function ProjectTemplate({ data }) {
const ProjectTemplate = ({ data, pageContext }) => {

  const Metadata = useStaticQuery(graphql`
    query blogData {
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


  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #ffffff;
        }
      `}
      </style>
      <Seo
        title={frontmatter.title + ' - Projects | ' + Metadata.site.siteMetadata.title}
        description={frontmatter.intro}
      />
      <section className={projectStyles.sectionProject + ' section-layout-wide'}>
        <div className={projectStyles.sectionProjectWrapper}>
          <div className={projectStyles.content}>
            <div className={projectStyles.header}>
              <h1>{frontmatter.title}</h1>
              <p>
                {frontmatter.category}&nbsp;-&nbsp;
              {frontmatter.date}
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