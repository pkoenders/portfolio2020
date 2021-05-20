import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import moment from 'moment'
import Masonry from 'react-masonry-css'

import * as latestBlog from './latest-blog.module.scss'

const LatestBlogPosts = () => {
    moment()

    const data = useStaticQuery(graphql`
    query BlogMDQuery {

        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: {frontmatter: {category: {}, posttype: {eq: "blog"}}}
            limit: 1000
            ) 
            {
                edges {
                node {
                    frontmatter {
                        slug
                        date
                        category
                        addtohomepage
                        title
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
        <section className={latestBlog.wrapper + ' section-layout-wide'}>
            <h1>Recent posts</h1>
            <div className={latestBlog.wrapper}>
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className={latestBlog.masonryGrid}
                    columnClassName={latestBlog.masonryGridColumn}>

                    {data.allMarkdownRemark.edges.map((edge, i) => (
                        edge.node.frontmatter.addtohomepage === true ? ''
                            : <div
                                className={latestBlog.item}
                                key={i}>
                                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                    <span>
                                        <i className={'material-icons-round md-36'}>arrow_forward</i>
                                        <h3>{edge.node.frontmatter.title}</h3>
                                        <p>{edge.node.frontmatter.category}</p>
                                        <p>{moment(edge.node.frontmatter.date).format(`dddd DD MMM YYYY`)}</p>
                                        <span>
                                            <p>{edge.node.frontmatter.intro}</p>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                    ))}
                </Masonry>
            </div>
        </section>

    )
}

export default LatestBlogPosts

