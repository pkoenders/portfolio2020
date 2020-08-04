import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import "../styles/index.scss"

const NotFoundPage = ({ location }) => {
  const data = useStaticQuery(graphql`
  query ErrorData {
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
        <title>Page not found | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Layout location={location}>
        <div className={'fourOfour'}>
          <h1>Sorry.</h1>
          <p>The requested page was not found.</p>
          <Link className={'buttonPrimary'} to="/">Go back to my portfolio</Link>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage
