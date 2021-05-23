import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Hero from '../components/homepage/hero'
import Intro from '../components/homepage/intro'
import ListProjects from '../components/projects/listProjects'
import SectionContact from '../components/forms/contact'
import Seo from '../components/seo/seo'


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
      <Seo
        title={'A versatile UI/UX designer - Tēnā koe, Welcome to my portfolio | ' + data.site.siteMetadata.title}
        description={'A versatile UI/UX designer with 20+ years of all-round industry experience.'}
      />
      <Layout location={location}>
        <Hero />
        <Intro />
        <ListProjects title={'Latest projects'} isHomepage={true} />
        <SectionContact location={location} />
      </Layout>
    </>
  )
}

export default IndexPage