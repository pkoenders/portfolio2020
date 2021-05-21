import React, { useRef, useEffect } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { gsap, Power3 } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Masonry from 'react-masonry-css'

import * as latestProjectsStyles from './latest-projects.module.scss'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSPlugin)

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

    const revealRefs = useRef([]);
    revealRefs.current = [];

    const revealTxt = useRef([]);
    revealTxt.current = [];

    const itemRef = item => {
        if (item && !revealRefs.current.includes(item)) {
            revealRefs.current.push(item);
        }
    };

    const innerTxt = item => {
        if (item && !revealTxt.current.includes(item)) {
            revealTxt.current.push(item);
        }
    };

    useEffect(() => {
        revealRefs.current.forEach((item, index) => {
            // var tl = gsap.timeline({
            gsap.fromTo(item, {
                y: 96
            }, {
                y: 0, ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom+=62px",
                    end: 'bottom bottom+=62px',
                    //scrub: 1,
                    toggleActions: 'play none none reverse',
                    //markers: true
                }
            });
        });

        revealTxt.current.forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0
            }, {
                opacity: 1, ease: Power3.easeOut, duration: 2.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    //end: 'bottom bottom',
                    //scrub: 1,
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            });
        });
    }, []);

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

                                <Link
                                    to={`/projects/${edge.node.frontmatter.slug}`}
                                    className={latestProjectsStyles.item}
                                    key={i}
                                    ref={itemRef}
                                >
                                    <GatsbyImage
                                        alt={edge.node.frontmatter.title}
                                        image={edge.node.frontmatter.coverimage.childImageSharp.gatsbyImageData}
                                    />

                                    <span ref={innerTxt}>
                                        <h3>{edge.node.frontmatter.title}</h3>
                                        <p>{edge.node.frontmatter.intro}</p>
                                    </span>
                                </Link>
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

