import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ListProjectItem from './listProjectItem'

import Masonry from 'react-masonry-css'

import * as listProjects from './listProjects.module.scss'

const ListProjects = ({ title, isHomepage }) => {

    const data = useStaticQuery(graphql`
        query listProjectsQuery {
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
                            posttype
                            coverimage{
                                childImageSharp {
                                    gatsbyImageData(
                                        width: 566
                                        quality: 50
                                        #breakpoints: [576, 768, 992, 1200]
                                        layout: CONSTRAINED
                                        formats: [AUTO, WEBP, AVIF]
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

        <section className={listProjects.listProjectsSection + ' section-layout-wide'}>
            <h2>{title}</h2>
            <div className={listProjects.wrapper}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={listProjects.masonryGrid}
                    columnClassName={listProjects.masonryGridColumn}
                >
                    {data.allMarkdownRemark.edges.map((edge, i) => {
                        if (edge.node.frontmatter.posttype === 'project') {
                            if ((isHomepage === true) && (edge.node.frontmatter.addtohomepage === true)) {
                                return (
                                    <ListProjectItem
                                        itemData={edge}
                                        key={i}
                                    />
                                )
                            }

                            if (isHomepage === false) {
                                return (
                                    <ListProjectItem
                                        itemData={edge}
                                        key={i}
                                    />
                                )
                            } else {
                                return null;
                            }
                        } else {
                            return null;
                        }
                    })}
                </Masonry>
            </div>
        </section >

    )
}

export default ListProjects

