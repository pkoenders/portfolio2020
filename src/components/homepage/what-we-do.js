import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import whatWeDoStyles from './what-we-do.module.scss'
import IconCreativeTech from "../../images/svg/icon-creative-tech.inline.svg"
import IconBrandingDesign from "../../images/svg/icon-branding-design-white.inline.svg"
import IconDevice from "../../images/svg/icon-device.inline.svg"
import IconDevelopment from "../../images/svg/icon-development.inline.svg"

const WhatWeDo = () => {
    const dataWhatWeDo = useStaticQuery(graphql`
    query WhatWeDoQuery {
        webDesigner: file(relativePath: { eq: "images/web-designer-b.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 550, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
        }

        uxWire: file(relativePath: { eq: "images/ux-wireframes.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 450, quality: 100) {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `)
    return (
        <>
            <section className={whatWeDoStyles.sectionHeroImg + ' section-layout-wide'}>

                <div className={whatWeDoStyles.intro}>
                    <div className={whatWeDoStyles.introWrapper}>
                        <h1><strong> <IconCreativeTech /><span>Kia ora</span></strong>Welcome to Peter Koenders's portfolio.</h1>
                    </div>
                </div>

                <Img
                    width='100%'
                    alt={'Web designer'}
                    fluid={dataWhatWeDo.webDesigner.childImageSharp.fluid}
                />
            </section>

            <section className={whatWeDoStyles.whatWeDoWrapper + ' section-layout-wide'}>
                <div className={whatWeDoStyles.whatWeDo}>
                    <div className={whatWeDoStyles.aboutMe}>
                        <div>
                            <h2>About me</h2>
                            <p>I’m a versatile UI/UX designer with 20+ years of all rounder industry experience. I originally trained in traditional and computer graphic design and transitioned into web. I have worked with small and large organisations. I apply attention to detail in all aspects of my workflow; definition &amp; planning, research, design, technical, management and review.</p>
                        </div>

                        <span>
                            <h2>Design</h2>
                            <p>I cover and range of design tasks and not shy to step up where needed.</p>
                            <ul>
                                <li>Implementation of UI/UX design process</li>
                                <li>Estimating &amp; proposal review</li>
                                <li>Iterative wire-framing, lo-fi prototypes &amp; concept design</li>
                                <li>Creating clean &amp; accessible UI designs</li><li>Template design</li>
                                <li>HTML prototypes &amp; templates</li><li>Style guides &amp; pattern libraries</li>
                                <li>Graphic design</li><li>Planning &amp; management of projects &amp; assets</li>
                            </ul>
                        </span>
                    </div>

                    <div className={whatWeDoStyles.technical}>
                        <div>
                            <h2>Technical</h2>
                            <p>I can markup HTML/SCSS. I write HTML to meet W3C validations and can create HTML prototypes and templates. I am interested in accessibility best practices which I apply where I can (adhering to WCAG). I am also familiar with task runners and JavaScript/jQuery. I work closely with integration teams across diversified technologies.</p>
                        </div>


                        <span>
                            <IconDevelopment />
                            <p>With professionalism, integrity & care, I work in a collaborative manner to plan, design and deliver unique, well-crafted, web-accessible solutions that are quick, optimised & built with best practices in mind.</p>


                        </span>
                        {/* <Img
                            className={whatWeDoStyles.techImg}
                            width='100%'
                            alt={'UX Wireframes'}
                            fluid={dataWhatWeDo.uxWire.childImageSharp.fluid}
                        /> */}
                    </div>


                </div>
            </section>
        </>
    )
}

export default WhatWeDo

