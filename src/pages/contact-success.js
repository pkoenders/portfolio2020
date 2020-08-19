import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SectionContactSuccess from "../components/homepage/contact-success"

const ContactSuccess = ({ location }) => {

  const data = useStaticQuery(graphql`
    query ContactSuccessData {
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
        body  {
          background: rgb(194, 242, 247);
          background: linear-gradient(176deg, rgba(194, 242, 247, 1) 0%, rgba(150, 198, 202, 1) 100%);
        }
      `}
      </style>
      <Helmet>
        <html lang="en" />
        <title>Contact success | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Layout location={location}>
        <SectionContactSuccess />
      </Layout >
    </>
  )
}

export default ContactSuccess
