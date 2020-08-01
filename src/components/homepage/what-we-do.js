import React from 'react'
import whatWeDoStyles from './what-we-do.module.scss'
import IconCreativeTech from "../../images/svg/logo-pixl.inline.svg"
import IconDevelopment from "../../images/svg/icon-development.inline.svg"
import Pkoenders from "../../images/svg/pkoenders.inline.svg"

const WhatWeDo = () => {

    return (
        <>
            <section className={whatWeDoStyles.sectionHeroImg + ' section-layout-wide'}>

                <div className={whatWeDoStyles.intro}>
                    <div className={whatWeDoStyles.introWrapper}>
                        <h1><strong> <IconCreativeTech /><span>Kia ora</span></strong>Welcome to my portfolio.</h1>
                    </div>
                </div>

                <Pkoenders />
                {/* <Img
                    alt={'Web designer'}
                    fluid={dataWhatWeDo.webDesigner.childImageSharp.fluid}
                /> */}
            </section>

            <section className={whatWeDoStyles.whatWeDoWrapper + ' section-layout-wide'}>
                <div className={whatWeDoStyles.whatWeDo}>
                    <div className={whatWeDoStyles.aboutMe}>
                        <div>
                            <p>I’m a versatile UI/UX designer with 20+ years of all rounder industry experience. I originally trained in traditional and computer graphic design and transitioned into web. I have worked with small and large organisations. I apply attention to detail in all aspects of my workflow; definition &amp; planning, research, design, technical, management and review.</p>
                        </div>

                        <span>
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
                            <p>I can markup HTML/SCSS. I write HTML to meet W3C validations and can create HTML prototypes and templates. I am interested in accessibility best practices which I apply where I can (adhering to WCAG). I am also familiar with task runners and JavaScript/jQuery. I work closely with integration teams across diversified technologies.</p>
                        </div>


                        <span>
                            <IconDevelopment />
                            <p>With professionalism, integrity & care, I work in a collaborative manner to plan, design and deliver unique, well-crafted, web-accessible solutions that are quick, optimised & built with best practices in mind.</p>
                            <a href="/peter-koenders-resume.pdf" class="buttonPrimary" >View my résumé</a>
                        </span>

                    </div>


                </div>
            </section>
        </>
    )
}

export default WhatWeDo

