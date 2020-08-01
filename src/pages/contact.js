import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionContact from "../components/homepage/contact"

const Contact = ({ location }) => {
  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #96d9df;
        }
      `}
      </style>

      <Layout location={location}>
        <SEO title="Contact" />
        <SectionContact />
      </Layout >
    </>
  )
}

export default Contact
