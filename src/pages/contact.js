import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionContact from "../components/homepage/contact"

const Contact = ({ location }) => {
  const data = useStaticQuery(graphql`
    query ContactData {
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
          background-color: #96d9df;
        }
      `}
      </style>

      <Helmet>
        <html lang="en" />
        <title>Contact - {data.site.siteMetadata.title}</title>
        <meta name="description" content="I would love to be contacted to discuss work commissions or just hear your thoughts and ideas." />
      </Helmet>
      <Layout location={location}>
        <SectionContact />
      </Layout >
    </>
  )
}

export default Contact
