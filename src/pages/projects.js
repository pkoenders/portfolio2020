import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Seo from '../components/seo/seo'
import Layout from "../components/layout"
import ListProjects from '../components/projects/listProjects'

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
        .section-layout-wide {
          margin-top:60px !important;
        }
      `}
      </style>

      <Seo
        title={'Projects | ' + data.site.siteMetadata.title}
        description={'Listing all UI/UX and Graphic Design projects.'}
      />
      <Layout location={location}>
        <ListProjects title={'Projects'} isHomepage={false} />
      </Layout >
    </>
  )
}

export default Projects
