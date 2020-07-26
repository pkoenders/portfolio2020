import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from 'gatsby-image'
import LogoPixel from "../images/svg/logo-pixl.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import headerStyles from "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header-nav-wrapper">
    <Link to="/" title="Homepage" >
      <LogoPixel />
    </Link>
    <div className="header-nav">
      <div className="hamburgerContainer">
        <button className="hamburger hamburger--squeeze" type="button" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          <span className="hamburger-label">Menu</span>
        </button>
      </div>

      <ul>
        <li> <Link to="/" title="Homepage" >Pixl</Link></li>
        <li> <Link to="/services" title="Our services" >Our services</Link></li>
        <li> <Link to="/projects" title="Our projects" >Our projects</Link></li>
        <li> <Link to="/projects-netlify" title="Our projects (Netlify)" >Our projects (Netlify)</Link></li>
        <li> <Link to="/contact" title="Contact us" >Contact us</Link></li>
      </ul>

    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
