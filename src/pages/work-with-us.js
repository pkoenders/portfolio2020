import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionConsoltation from "../components/work-with-us/work-with-us"

const FreeConsoltation = () => {

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
        <SEO title="Free consoltation" />
        <SectionConsoltation />
      </Layout >
    </>
  )
}

export default FreeConsoltation
