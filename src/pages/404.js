import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import Bground404 from "../components/404-bground"
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
      <style type="text/css">
        {`
        footer  {
          background-color: #25324000 !important;
          border-top:none  !important;
        }
      `}
      </style>


      <Helmet>
        <html lang="en" />
        <title>Page not found | {data.site.siteMetadata.title}</title>
      </Helmet>

      <Layout location={location}>
        <Bground404 />
        <div className={'fourOfour'}>
          <h1>Oh purr-leaze !</h1>
          <p>Looks like Zoe has hidden this page.</p>
          <Link className={'buttonPrimary'} to="/">Go back to my portfolio</Link>
        </div>

      </Layout>
    </>
  )
}

export default NotFoundPage
