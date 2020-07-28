import React from "react"
import { Link } from "gatsby"
import SEO from "../seo"
import projectStyles from './project-item.module.scss'
import IconOpenExternal from "../../images/svg/icon-open-external.inline.svg"
import IconNext from "../../images/svg/icon-next.inline.svg"
import IconPrev from "../../images/svg/icon-prev.inline.svg"


//export default function ProjectTemplate({ data }) {
const ProjectTemplate = ({ data, pageContext }) => {
  //console.log(pageContext)

  const { markdownRemark } = data // data.markdownRemark holds your post data
  //const { markdownRemark } = data.allMarkdownRemark.edges.node.frontmatter // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  //const link = "http://" + frontmatter.url
  const link = frontmatter.url

  const { next, previous } = pageContext

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
      `}
      </style>
      <SEO title="Home" />
      <section className={projectStyles.sectionProject + ' section-layout-wide'}>
        <div className={projectStyles.sectionProjectWrapper}>

          <div className={projectStyles.content}>

            <div className={projectStyles.header}>
              <h1>{frontmatter.title}</h1>
              <p>
                {frontmatter.category}<br />
                {frontmatter.date}<br />
                <a href={link} title={frontmatter.title} target="_blank"><IconOpenExternal />{frontmatter.url}</a>
              </p>
            </div>








            <div className={projectStyles.contentInner}>
              <div className={projectStyles.prevNext}>
                {previous &&
                  <Link
                    className={projectStyles.prev}
                    to={`/projects/${previous.frontmatter.slug}`}
                  >
                    <IconPrev />
                    <span>Previous</span>

                  </Link>
                }

                {next &&
                  <Link
                    className={projectStyles.next}
                    to={`/projects/${next.frontmatter.slug}`}
                  >
                    <span>Next</span>
                    <IconNext />
                  </Link>
                }
              </div>
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