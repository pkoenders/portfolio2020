import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Masonry from 'react-masonry-css'


import * as latestProjectsStyles from './latest-projects.module.scss'

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
                                gatsbyImageData(
                                    layout: CONSTRAINED, 
                                    formats: [AUTO, WEBP, AVIF], 
                                    placeholder:BLURRED 
                                )
                            }
                        }
                        intro
                    }
                }
            }
        }
    }
    `)
    const breakpointColumnsObj = {
        default: 2,
        992: 2,
        768: 1,
        576: 1
    }

    return (

        <section className={latestProjectsStyles.latestProjectsSection + ' section-layout-wide'}>
            <h2>My latest projects</h2>
            <div className={latestProjectsStyles.wrapper}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={latestProjectsStyles.masonryGrid}
                    columnClassName={latestProjectsStyles.masonryGridColumn}>
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        if (edge.node.frontmatter.addtohomepage === true) {
                            return (
                                <div
                                    className={latestProjectsStyles.item}
                                    key={i}>
                                    <Link to={`/projects/${edge.node.frontmatter.slug}`}>

                                        <GatsbyImage
                                            alt={edge.node.frontmatter.title}
                                            image={edge.node.frontmatter.coverimage.childImageSharp.gatsbyImageData}
                                        />

                                        <span>
                                            <h3>{edge.node.frontmatter.title}</h3>
                                            <p>{edge.node.frontmatter.intro}</p>
                                        </span>
                                    </Link>
                                </div>
                            )
                        } else {
                            return false
                        }
                    })}
                </Masonry>
            </div>
        </section >

    )
}

export default LatestProjects

