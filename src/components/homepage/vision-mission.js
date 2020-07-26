import React from 'react'
import { Link } from "gatsby"
import ourVisionMissionStyles from './vision-mission.module.scss'

const VisionMissiom = () => {

    return (
        <section className={ourVisionMissionStyles.ourVisionMission + ' section-layout-wide'}>
            <div className={ourVisionMissionStyles.ourVisionMissionWrapper}>
                <div>
                    <h2>Our mission</h2>
                    <p>With professionalism, integrity &amp; care, work in a collaborative manner to plan, design and deliver unique, well-crafted, web-accessible solutions that are quick, optimised &amp; built with best practices in mind.</p>
                </div>
            </div>
            <hr />
            <div className={ourVisionMissionStyles.ourVisionMissionWrapper}>
                <div>
                    <h2>Our approach</h2>
                    <p>Creating a brand and digital presence can be a handful. We’ve broken it down into digestible parts so you know what to expect.</p>
                    <Link to="/services#designProcess" title="Come and work with us" className={ourVisionMissionStyles + " buttonPrimary"}>Take a scroll through our process</Link>

                </div>

            </div>
        </section>
    )
}

export default VisionMissiom

