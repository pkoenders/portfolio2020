import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ProjectTemplate from "../components/projects/project-item-md"
import SEO from "../components/seo"


export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM YYYY")
        slug
        title
        category
        url
      }
    }
  }
`

//import latestProjectsStyles from '../components/homepage/latest-projects.module.scss'

// export default function Template({
//   data, pageContext // this prop will be injected by the GraphQL query below.
// }) {
// const { markdownRemark } = data // data.markdownRemark holds your post data
// const { frontmatter, html } = markdownRemark


const PortfolioPage = ({ data, pageContext, location }) => {

  return (
    <>
      <Layout location={location}>
        <SEO title="Home" />
        <ProjectTemplate data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}

export default PortfolioPage


