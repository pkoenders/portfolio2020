import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Brand from "../brand/"
import ScrollToTop from "./scrollToTop/"

import * as footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          author,
          year
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <canvas className={"footerAnim"} width="32" height="32" />
      <div className={footerStyles.wrapper} >
        <Link to="/" title="Homepage" >
          <span>Go to the homepage</span>
          <Brand />
        </Link>
        <p>© {new Date().getFullYear()} - {data.site.siteMetadata.author}</p>
        <ScrollToTop />
      </div>
    </footer>
  )
}

export default Footer