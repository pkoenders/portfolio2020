import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SEO from '../components/seo/seo'
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
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>
      <SEO
        title={'Contact success | ' + data.site.siteMetadata.title}
        description={'I have received your message and will reply to you soon.'}

      />
      <Layout location={location}>
        <SectionContactSuccess />
      </Layout >
    </>
  )
}

export default ContactSuccess
