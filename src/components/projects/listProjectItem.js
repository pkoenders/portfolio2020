import React, { useRef, useEffect } from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { gsap, Power3 } from "gsap"
import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as listProjectItem from './listProjectItem.module.scss'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSPlugin)

const ListProjectItem = ({ itemData }) => {

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
            })
            return () => {
                revealTxt.current.kill()
            }
        })

        revealTxt.current.forEach((item, index) => {
            gsap.fromTo(item, {
                opacity: 0,
                y: 8,
            }, {
                opacity: 1,
                y: 0,
                ease: Power3.easeOut,
                duration: 2.5,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    //end: 'bottom bottom',
                    //scrub: 1,
                    toggleActions: 'play none none reverse',
                    // markers: true
                }
            })
            return () => {
                revealRefs.current.kill()
            }
        })

    }, [])

    return (
        <Link
            to={`/projects/${itemData.node.frontmatter.slug}`}
            className={listProjectItem.listProjectItem + ' item'}
            ref={itemRef}
        >
            <GatsbyImage
                alt={itemData.node.frontmatter.title}
                image={itemData.node.frontmatter.coverimage.childImageSharp.gatsbyImageData}
            />
            <span>
                <span ref={innerTxt}>
                    <h3>{itemData.node.frontmatter.title}</h3>
                    <p>{itemData.node.frontmatter.intro}</p>
                </span>
            </span>
        </Link>
    )
}

export default ListProjectItem