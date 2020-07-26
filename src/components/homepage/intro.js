import React from 'react'
import introStyles from './intro.module.scss'
import IconCreativeTech from "../../images/svg/icon-creative-tech.inline.svg"

const Intro = () => {

    return (
        <section className='section-layout'>
            <div className={introStyles.intro}>
                <IconCreativeTech />
                <h1><strong>pixl</strong> studio was born in lockdown. We provide the end to end experience for creating a digital presence, from graphic design, branding &amp; logo to web design &amp; development.</h1>
            </div>
        </section>
    )
}

export default Intro

