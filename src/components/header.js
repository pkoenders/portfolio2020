import { Link } from "gatsby"
import React from "react"
import IconCreativeTech from "../images/svg/icon-creative-tech.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import headerStyles from "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header-nav-wrapper" style={{ top: 0 + 'px' }}>
    <Link to="/" title="Homepage" >
      <IconCreativeTech />
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
        <li> <Link to="/" title="Homepage" >Peter Koenders</Link></li>
        <li> <Link to="/projects" title="Our projects" >My projects</Link></li>
        <li> <Link to="/contact" title="Contact us" >Contact me</Link></li>
      </ul>

    </div>
  </header >
)

export default Header
