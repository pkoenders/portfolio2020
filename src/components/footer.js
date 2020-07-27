import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'
import IconCreativeTech from "../images/svg/icon-creative-tech.inline.svg"

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
      <Link to="/" title="Homepage" >
        <IconCreativeTech />
      </Link>
      <p>© {new Date().getFullYear()} - Peter Koenders</p>
    </footer>
  )
}

export default Footer