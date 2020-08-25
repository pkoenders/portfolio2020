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

        // canvas {
        //   position: absolute !important;
        //   top: -9999px !important;
        //   left: -9999px !important;
        // }

        canvas {
          z-index:-1 !important;
        }

      `}
      </style>


      <Helmet>
        <html lang="en" />
        <title>Page not found | {data.site.siteMetadata.title}</title>
      </Helmet>

      <Layout location={location}>
        <Bground404 />
        <canvas id="canv" width="32" height="32" />
        <div className={'fourOfour'}>
          <h1>Oh purr-leaze !</h1>
          <p>It appears that Zoe has hidden this page.</p>
          <Link className={'buttonPrimaryGhost'} to="/">Go back to my portfolio</Link>
        </div>

      </Layout>
    </>
  )
}

export default NotFoundPage
