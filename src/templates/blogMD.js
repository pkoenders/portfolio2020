import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import SecondaryNavWrapper from "../components/common/secondaryNavWrapper"
import secondaryNav from "../components/common/secondaryNav.module.scss"
import BlogTemplate from "../components/blog/blog-item-md"




export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        slug
        title
        category
        intro
      }
    }
  }
`


const PostPage = ({ data, pageContext, location }) => {

  const { next, previous } = pageContext

  return (
    <>
      <Layout location={location}>
        <SecondaryNavWrapper>
          <Link
            aria-label="Back"
            to="../"
          >
            <i className={"material-icons-round"} aria-hidden="true">arrow_back</i>
           Back
          </Link>

          <span className={secondaryNav.alignRight}>
            {previous &&
              <Link
                aria-label={previous.frontmatter.title}
                to={`../${previous.frontmatter.slug}`}
              >
                <i className={"material-icons-round left"} aria-hidden="true">chevron_left</i>
              Previous
              </Link>
            }
            {next &&
              <Link
                aria-label={next.frontmatter.title}
                to={`../${next.frontmatter.slug}`}
              >
                Next
                <i className={"material-icons-round"} aria-hidden="true">chevron_right</i>
              </Link>
            }
          </span>
        </SecondaryNavWrapper>

        <BlogTemplate data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}

export default PostPage


