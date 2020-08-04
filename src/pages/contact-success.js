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
          background: rgb(120, 179, 184);
          background: linear-gradient(176deg, rgba(150, 217, 223, 1) 0%, rgba(120, 179, 184, 1) 100%);
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
