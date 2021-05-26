import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Seo from '../components/common/seo/'
import Layout from "../components/layout"
import Bground404 from "../components/404/404-bground"

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
          display:none !important;
        }

        canvas {
          z-index:-1 !important;
        }

      `}
      </style>

      <Seo
        title={'Page not found | ' + data.site.siteMetadata.title}
        description={'Error 404, page not found.'}
      />

      <Layout location={location}>
        <Bground404 />
        <canvas className={'catAnim'} width="32" height="32" />
        <div className={'fourOfour'}>
          <h1>Oh purr-leaze !</h1>
          <p>It appears that Zoe has hidden this page.</p>
          <Link className={'buttonPrimaryGhost'} to="/"><i className={"material-icons-round md-36"} aria-hidden="true">arrow_back</i>Back to my portfolio</Link>
        </div>

      </Layout>
    </>
  )
}

export default NotFoundPage
