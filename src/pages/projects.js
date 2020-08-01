import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionProjects from "../components/projects/projects-md"

const Projects = ({ location }) => {

  return (
    <>
      <style type="text/css">
        {`
        body  {
          background-color: #efeff0;
        }
      `}
      </style>

      <Layout location={location}>
        <SEO title="Projects" />
        <SectionProjects />
      </Layout >
    </>
  )
}

export default Projects
