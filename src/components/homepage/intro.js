import React from 'react'
import IconDevelopment from "../../images/svg/icon-development.inline.svg"

import * as intro from './intro.module.scss'

const Intro = () => {
    return (
        <section className={intro.sectionIntro + ' section-layout-wide contentStart'}>
            <div className={intro.intro}>

                <div className={intro.part1}>
                    <span>
                        <p>I’m a versatile UI/UX designer originally from a traditional Graphic Design background and transitioned into Digital and Web Design.</p>
                    </span>
                </div>

                <div className={intro.part2}>
                    <span>
                        <p>I support digital accessibility, am curious and enjoy working with creative and integration teams delivering digital solutions.</p>
                    </span>
                </div>

                <div className={intro.part3}>
                    <span>
                        <ul>
                            <li>Implementation of the UI/UX design process</li>
                            <li>Estimating &amp; proposal review</li>
                            <li>Iterative wire-framing &amp; prototypes</li>
                            <li>Build &amp; maintain design systems</li>
                            <li>HTML templates &amp; components</li>
                            <li>Graphic design</li>
                        </ul>
                    </span>
                </div>

                <div className={intro.part4}>
                    <span>
                        <IconDevelopment />
                        <p>With professionalism, integrity and care. I work in a collaborative manner to plan, design and deliver crafted solutions.</p>
                        <a href="/peter-koenders-resume.pdf" className="buttonPrimary">View my resumé</a>
                    </span>
                </div>

            </div>
        </section>
    )
}

export default Intro

