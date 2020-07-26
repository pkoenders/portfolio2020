import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionContactSuccess from "../components/homepage/contact-success"

const ContactSuccess = () => {

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #96d9df;
        }
      `}
      </style>

      <Layout>
        <SEO title="Contsct Success" />
        <SectionContactSuccess />
      </Layout >
    </>
  )
}

export default ContactSuccess
