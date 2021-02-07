import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import latestProjectsStyles from './latest-projects.module.scss'

const LatestProjects = () => {

    const data = useStaticQuery(graphql`
    query LatestProjectsQuery {
  
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 1000
            ) 
            {
                edges {
                node {
                    frontmatter {
                        slug
                        date
                        category
                        url
                        addtohomepage
                        title
                        coverimage{
                            childImageSharp {
                                fluid(maxWidth: 720, maxHeight: 455, quality: 50) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                        intro
                    }
                }
            }
        }
    }
    `)

    return (

        <section className={latestProjectsStyles.latestProjectsSection + ' section-layout-wide'}>
            <h2>My latest projects</h2>
            <div className={latestProjectsStyles.wrapper}>
                <ul className={"grid"}>
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        if (edge.node.frontmatter.addtohomepage === true) {
                            return (
                                <li
                                    key={i}
                                    // data-sal="fade"
                                    // data-sal-duration="300"
                                    // data-sal-easing="ease"
                                    className={"item"} >
                                    <Link to={`/projects/${edge.node.frontmatter.slug}`} className={'item-content'}>
                                        <Img
                                            alt={edge.node.frontmatter.title}
                                            fluid={edge.node.frontmatter.coverimage.childImageSharp.fluid}
                                            loading="lazy"
                                        />
                                        <span>
                                            <h3>{edge.node.frontmatter.title}</h3>
                                        </span>
                                    </Link>
                                </li>
                            )
                        } else {
                            return false
                        }
                    })}
                </ul>
            </div>
        </section >

    )
}

export default LatestProjects

