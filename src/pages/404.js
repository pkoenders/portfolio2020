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

      <style type="text/css">
        {`
        body  {
          // background-color:none;
          // background: url(../images/zoe.jpg) no-repeat center center fixed !important; 
          // -webkit-background-size: cover;
          // -moz-background-size: cover;
          // -o-background-size: cover;
          // background-size: cover;
          
        }
      `}
      </style>

      <Helmet>
        <html lang="en" />
        <title>Page not found | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Layout location={location}>
        <div className={'fourOfour'}>
          <h1>Oh no!</h1>
          <p>Looks like this page has been removed...</p>
          <Link className={'buttonPrimary'} to="/">Go back to my portfolio</Link>
        </div>
      </Layout>
    </>
  )
}

export default NotFoundPage
