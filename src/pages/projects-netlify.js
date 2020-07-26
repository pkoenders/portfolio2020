import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionProjects from "../components/projects/projects-netlify-cms"

const Projects
  = () => {

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
          <SEO title="Projects" />
          <SectionProjects />
        </Layout >
      </>
    )
  }

export default Projects
