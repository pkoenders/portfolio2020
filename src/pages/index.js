import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionWhatWeDo from "../components/homepage/what-we-do"
import SectionVisionMission from "../components/homepage/vision-mission"
import SectionLatestProjects from "../components/homepage/latest-projects"
import SectionContact from "../components/homepage/contact"


const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <SectionWhatWeDo />
        <SectionLatestProjects />
        <SectionVisionMission />
        <SectionContact />
      </Layout >
    </>
  )
}

export default IndexPage