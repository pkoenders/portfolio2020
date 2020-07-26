import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'
import LogoPixel from "../images/svg/logo-pixl-white.inline.svg"

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
        <LogoPixel />
      </Link>
      <p>© {new Date().getFullYear()} - Pixl New Zealand</p>
    </footer>
  )
}

export default Footer