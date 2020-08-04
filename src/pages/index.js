import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SectionWhatWeDo from "../components/homepage/what-we-do"
import SectionLatestProjects from "../components/homepage/latest-projects"
import SectionContact from "../components/homepage/contact"


const IndexPage = ({ location }) => {

  const data = useStaticQuery(graphql`
    query IndexData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Homepage - {data.site.siteMetadata.title}</title>
        <meta name="description" content="A versatile UI/UX designer with 20+ years of all-rounder industry experience." />
      </Helmet>
      <Layout location={location}>
        <SectionWhatWeDo />
        <SectionLatestProjects />
        <SectionContact />
      </Layout>
    </>
  )
}

export default IndexPage