import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import ourServicesStyles from './services.module.scss'
import IconBrandingDesign from "../../images/svg/icon-branding-design.inline.svg"
import IconWebDesign from "../../images/svg/icon-web-design.inline.svg"
import IconDeveloper from "../../images/svg/icon-love-develop.inline.svg"
import IconDesignProcess from "../../images/svg/icon-design-process.inline.svg"



import { Helmet } from 'react-helmet'

const VisionMissiom = () => {

    return (
        <section className={ourServicesStyles.ourServices + ' section-layout'}>
            <div className={ourServicesStyles.ourServicesWrapper}>
                <h1 className={ourServicesStyles.intro}>We provide the end to end experience for creating a digital presence, from graphic design, branding &amp; logo to web design &amp; development.</h1>

                <ul>
                    <li>
                        <IconBrandingDesign />
                        <h3>Branding &amp; graphic design</h3>
                        <p>Creating or refreshing a brand for your business is a big deal and there’s a lot to cover. From strategy to ideation, we’ll work intimately with you to get the right message to the right audience.</p>
                        <p>We’ll take these foundational principles through to logo design, custom asset creation and wrap it all up in a digital brand style guide - a design bible for your business.</p>
                    </li>
                    <li>
                        <IconWebDesign />
                        <h3>Web design</h3>
                        <p>Getting your brand across the web? We collaborate with you to get to know your business, your brand and your story. Each website is different and needs a strong foundation.</p>
                        <p>Solid content, architecture, wireframes leads to a great digital design aesthetic that compliments your brand.</p>
                        <p>During our design phase we will craft up a detailed aesthetic that considers your brand story from each button and interaction, to the colours, typography and image style. This might include the creation of custom illustrative assets, iconography, hand-crafted elements and art directed photography.</p>
                    </li>
                    <li>
                        <IconDeveloper />
                        <h3>Web development</h3>
                        <p>Bringing your website or e-commerce store to life is no small feat. Throughout the development process, our designer and developer work closely to make sure every element looks and works like magic, across devices.</p>
                        <p>In most cases, your website will be built connected to a Content Management System (CMS). Your CMS provides you with a dashboard to change text, photos, media and the structure of each page. This means that in future you are able to make edits and additions to the site without additional development work.</p>
                        <p> We can take care of the hosting, domains and give work out a maintenance plan.</p>

                    </li>
                </ul>

            </div>
            <Link to="/work-with-us" title="Come and work with us" className={ourServicesStyles.ctaWorkWithUs + " buttonPrimary"}>Get started &amp; work with us</Link>
        </section>
    )
}

export default VisionMissiom

