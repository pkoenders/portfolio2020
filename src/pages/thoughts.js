import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from '../components/seo/seo'
import Layout from "../components/layout"
import SectionBlog from "../components/blog/blogList"

const Blog = ({ location }) => {
  const data = useStaticQuery(graphql`
  query BlogData {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
  return (
    <>
      <style type="text/css">
        {`
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>

      <Seo
        title={'Blog | ' + data.site.siteMetadata.title}
        description={'blog list for Peter Koenders.'}
      />
      <Layout location={location}>
        <SectionBlog />
      </Layout >
    </>
  )
}

export default Blog
