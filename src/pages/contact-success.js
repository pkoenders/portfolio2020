import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionContactSuccess from "../components/homepage/contact-success"

const ContactSuccess = ({ location }) => {

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

      <Layout location={location}>
        <SEO title="Contsct Success" />
        <SectionContactSuccess />
      </Layout >
    </>
  )
}

export default ContactSuccess
