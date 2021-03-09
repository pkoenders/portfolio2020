import React from "react"
import { Link } from "gatsby"
//import Img from 'gatsby-image'
//import PlaceImage from './image/image'
import IconCreativeTech from "../../images/svg/logo-pixl.inline.svg"
// //import EmojiUnemployed from "../images/svg/emoji-unemployed.inline.svg"
// import EmojiSeekingEmployment from "../images/svg/emoji-seeking-employment.inline.svg"
// //import EmojiToday from "../images/svg/emoji-today-i-am.inline.svg"
// import EmojiWorking from "../images/svg/emoji-working.inline.svg"
import '../../styles/index.scss'
import "../../styles/hamburger.scss"
import "./header.scss"

const Header = ({ data, location }) => {

  const isPartiallyActive = ({
    isPartiallyCurrent
  }) => {
    return isPartiallyCurrent
      ? { className: "activeNavItem" }
      : {}
  }

  var viewportWidth = 0

  function toggleMobileNav() {
    const headerNavHomepage = document.querySelector(".homePage")
    const headerDiv = document.querySelector(".headerNav")
    const headerDivNav = document.querySelector(".headerNav ul li")
    const hamBurgerBtn = document.querySelector(".hamburger")
    const closeMenu = document.querySelector(".closeMenu")

    if (!headerDiv.classList.contains("open")) {
      openHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    } else {
      closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    }
    headerDivNav.addEventListener("click", function () {
      closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
    })

    window.addEventListener('resize', function () {
      viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      if (viewportWidth > 768) {
        closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu)
      }
    })
  }

  function openHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu) {
    //console.log("hamburger open")
    headerDiv.classList.add("open", "fillBground")
    hamBurgerBtn.classList.add("is-active")
    headerNavHomepage.classList.remove("hide")
    closeMenu.classList.remove("hide")
    hamBurgerBtn.setAttribute("aria-expanded", "true")
    hamBurgerBtn.setAttribute("aria-pressed", "true")
  }

  function closeHamburgerNav(headerNavHomepage, hamBurgerBtn, headerDiv, closeMenu) {
    //console.log("hamburger close")
    headerDiv.classList.remove("open", "fillBground")
    hamBurgerBtn.classList.remove("is-active")
    headerNavHomepage.classList.add("hide")
    closeMenu.classList.add("hide")
    hamBurgerBtn.setAttribute("aria-expanded", "false")
    hamBurgerBtn.setAttribute("aria-pressed", "false")
  }

  return (
    <>
      <header className="headerNavWrapper" aria-label="Main heading">
        <nav className="headerNav" aria-label="Main navigation" role="navigation">

          {location.pathname.split('/')[1] !== ""
            ? <Link className="brand" to="/" title="Link to homepage">
              <span>Link to homepage</span>
              <IconCreativeTech alt={"Logo - Link to homepage"} />
            </Link>
            : ""
          }

          <button
            className="hamburger hamburger--squeeze"
            type="button"
            aria-label="Open and Close navigation menu"
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-pressed="false"
            onClick={toggleMobileNav}
          >
            <span className="hamburger-label">Menu</span>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>


          <ul id="mainNavigation">
            <li className="homePage hide">
              <Link
                to="/"
                activeClassName={"activeNavItem"}>
                Peter Koenders
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                activeClassName={"activeNavItem"}
                getProps={isPartiallyActive}>
                My projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeClassName={"activeNavItem"}>
                Contact me
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                activeClassName={"activeNavItem"}>
                Blog
              </Link>
            </li>
            <li>
              <a href="/peter-koenders-resume.pdf" >View my resumé</a>
            </li>
            <li className="closeMenu hide">
              <button
                onClick={toggleMobileNav}>
                Close
                <i className={"material-icons-round"} aria-hidden="true">clear</i>
              </button>
            </li>
          </ul>

        </nav>
      </header >
    </>
  )
};

export default Header