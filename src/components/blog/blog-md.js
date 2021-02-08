import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import moment from 'moment'
import latestBlog from './latest-blog.module.scss'

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

    return (
        <section className={latestBlog.wrapper + ' section-layout-wide'}>
            <h2>Recent posts</h2>
            <div>
                <ul className={"grid"}>
                    {data.allMarkdownRemark.edges.map((edge, i) => (
                        <>
                            {edge.node.frontmatter.addtohomepage === true
                                ? ''
                                : <li
                                    key={i}
                                    // data-sal="fade"
                                    // data-sal-duration="300"
                                    // data-sal-easing="ease"
                                    className={"item"} >
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
                                </li>
                            }
                        </>
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default LatestBlogPosts

