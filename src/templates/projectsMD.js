import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ProjectTemplate from '../components/projects/project-item-md'
import SecondaryNav from '../components/common/secondaryNav/'

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
        intro
        coverimage {
          childImageSharp {
            gatsbyImageData
              (
              layout: CONSTRAINED, 
              formats: [AUTO, WEBP, AVIF, PNG], 
              placeholder:BLURRED 
              )            
          }
        }
      }
    }
  }
`


const PortfolioPage = ({ data, pageContext, location }) => {

  const { next, previous } = pageContext
  return (
    <>
      <Layout location={location}>
        <SecondaryNav next={next} previous={previous} />
        <ProjectTemplate data={data} pageContext={pageContext} />
      </Layout >
    </>
  )
}

export default PortfolioPage


