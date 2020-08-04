import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SectionProjects from "../components/projects/projects-md"

const Projects = ({ location }) => {
  const data = useStaticQuery(graphql`
  query ProjectsData {
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
          background-color: #efeff0;
        }
      `}
      </style>
      <Helmet>
        <html lang="en" />
        <title>Projects | {data.site.siteMetadata.title}</title>
        <meta name="description" content="Listing all UI/UX and Grahic design projects." />
      </Helmet>      <Layout location={location}>
        <SectionProjects />
      </Layout >
    </>
  )
}

export default Projects
