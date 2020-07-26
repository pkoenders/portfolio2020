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

                        <h1><strong> <IconCreativeTech />pixl</strong> studio was born in lockdown. We provide the end to end experience for creating a digital presence, from graphic design, branding &amp; logo to web design &amp; development.</h1>
                    </div>
                </div>

                {/* <div className={whatWeDoStyles.content}>
                    <h2>This is what we do</h2>
                </div> */}
                <Img
                    width='100%'
                    alt={'Web designer'}
                    fluid={dataWhatWeDo.webDesigner.childImageSharp.fluid}
                />
            </section>

            <section className={whatWeDoStyles.whatWeDoWrapper + ' section-layout-wide'}>
                <div className={whatWeDoStyles.whatWeDo}>

                    <div>
                        <ul>
                            <IconBrandingDesign />
                            <li>Modern Web Design</li>
                            <li>User-centered experience</li>
                            <li>Graphic design &amp; branding</li>
                        </ul>
                        <Img
                            width='100%'
                            alt={'UX Wireframes'}
                            fluid={dataWhatWeDo.uxWire.childImageSharp.fluid}
                        />
                        <span>
                            <p>This internet is a busy place. Whether you’ve got a restaurant, e-commerce store, gym or travelling barbershop, it’s no easy task to define your space amongst the crowded and homogenous. Our job is to help you define what makes your business unique, and build you a thoughtfully crafted digital presence that reflects it.</p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <p>We deliver modern, accessible, quick, most appealing and future proof websites, portals and web applications, built on the latest technologies and frameworks, customised to meet your business objectives.</p>
                            <IconDevice />
                            <p>Good user experience and interface is the key to customers' loyalty. Our work is always considered for mobile and desktop so your customers find it effortless to navigate your website on the go and look great on any display.</p>
                        </span>
                        <ul>
                            <IconDevelopment />
                            <li>Accessible, quick &amp; secure</li>
                            <li>Best practice</li>
                            <li>Headless CMS</li>
                        </ul>
                    </div>
                </div>
                <Link to="/services" title="Our services" className={whatWeDoStyles.consulutation + " buttonPrimary"}>Check out our services</Link>
            </section>
        </>
    )
}

export default WhatWeDo

