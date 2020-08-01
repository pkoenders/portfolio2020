import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionWhatWeDo from "../components/homepage/what-we-do"
import SectionLatestProjects from "../components/homepage/latest-projects"
import SectionContact from "../components/homepage/contact"


const IndexPage = ({ location }) => {
  return (
    <>
      <Layout location={location}>
        <SEO title="Home" />
        <SectionWhatWeDo />
        <SectionLatestProjects />
        <SectionContact />
      </Layout>
    </>
  )
}

export default IndexPage