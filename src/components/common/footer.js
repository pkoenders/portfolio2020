import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as footerStyles from './footer.module.scss'

import Brand from "./brand"

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

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <footer className={footerStyles.footer}>
      <canvas className={"footerAnim"} width="32" height="32" />
      <div className={footerStyles.wrapper} >
        <Link to="/" title="Homepage" >
          <span>Go to the homepage</span>
          {/* <i class="material-icons-round" aria-hidden="true">arrow_upward</i> */}
          <Brand />
        </Link>
        <p>© {new Date().getFullYear()} - {data.site.siteMetadata.author}</p>
        <button onClick={scrollTop} label="Go to the top of the page"><i className={"material-icons-round"} aria-hidden="true">arrow_upward</i></button>
      </div>
    </footer>
  )
}

export default Footer