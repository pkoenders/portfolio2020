import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from './footer.module.scss'
import IconCreativeTech from "../images/svg/logo-pixl.inline.svg"

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
        <span>Go to the homepage</span>
        <IconCreativeTech />
      </Link>
      <p>© {new Date().getFullYear()} - {data.site.siteMetadata.author}</p>
    </footer>
  )
}

export default Footer