import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServicesSection from "../components/services/services"
import ProcessSection from "../components/services/process"

const Services = () => {

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
      `}
      </style>

      <Layout>
        <SEO title="Services" />
        <ServicesSection />
        <ProcessSection />
      </Layout >
    </>
  )
}

export default Services
