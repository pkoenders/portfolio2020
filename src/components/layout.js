import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./common/footer/"
import Header from "./common/header/"


import * as layoutStyles from './layout.module.scss'
import '../styles/index.scss'

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div id="layoutModule" className={layoutStyles.container} >
        <Header siteTitle={data.site.siteMetadata.title} location={location} />
        <div className={layoutStyles.content}>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
