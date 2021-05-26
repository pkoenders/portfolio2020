import React from "react"
import { Link } from 'gatsby'
import * as secondaryNav from './secondaryNav.module.scss'

const SecondaryNav = ({ previous, next }) => {
  return (
    <section className={secondaryNav.wrapper + ' section-layout-wide secondaryNav'}>
      <nav aria-label="Navigate to previous page or next page" role="navigation" >

        <Link
          aria-label="Back"
          to="../"
        >
          <i className={"material-icons-round"} aria-hidden="true">arrow_back</i>
           Back
          </Link>

        <span className={secondaryNav.alignRight}>
          {previous &&
            <Link
              aria-label={previous.frontmatter.title}
              to={`../${previous.frontmatter.slug}`}
            >
              <i className={"material-icons-round left"} aria-hidden="true">chevron_left</i>
              Previous
              </Link>
          }
          {next &&
            <Link
              aria-label={next.frontmatter.title}
              to={`../${next.frontmatter.slug}`}
            >
              Next
                <i className={"material-icons-round"} aria-hidden="true">chevron_right</i>
            </Link>
          }
        </span>

      </nav>
    </section>
  )
}

export default SecondaryNav