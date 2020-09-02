import { Link } from "gatsby"
import React from "react"
import IconCreativeTech from "../images/svg/logo-pixl.inline.svg"
import '../styles/index.scss'
import "../styles/hamburger.scss"
import "./header.scss"





const Header = ({ location, siteTitle }) => {

  return (
    <>
      <header className="headerNavWrapper fillBground" style={{ top: 0 + 'px' }}>

        {location.pathname.split('/')[1] !== ""
          ? <Link to="/" title="Link to homepage">
            <span>Link to homepage</span>
            <IconCreativeTech alt={"Logo - Link to homepage"} />
          </Link>
          : ""
        }
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
            <li> <Link to="/projects" >My projects</Link></li>
            <li> <Link to="/contact" >Contact me</Link></li>
            <li> <a href="/peter-koenders-resumé.pdf" >View my resumé</a></li>
          </ul>

        </div>
      </header >
    </>
  )
};

// const StyledLayout = headerNavWrapper.svg`
//   display: ${({ path }) => (path === '/' ? 'block' : 'none')};
// `;

export default Header
