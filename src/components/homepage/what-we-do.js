import React from 'react'
import PixlLogo from "../../images/svg/logo-pixl.inline.svg"
import IconDevelopment from "../../images/svg/icon-development.inline.svg"
import Pkoenders from "../../images/svg/pkoenders.inline.svg"

import * as whatWeDoStyles from './what-we-do.module.scss'

const WhatWeDo = () => {

    return (
        <>
            <section className={whatWeDoStyles.sectionHeroImg + ' section-layout-wide'}>

                <div className={whatWeDoStyles.intro}>
                    <div className={whatWeDoStyles.introWrapper}>
                        <h1><PixlLogo />Tēnā koe,<br /><span>Welcome to my portfolio.</span></h1>
                    </div>
                </div>

                <span>
                    <canvas className="headAnim" width="32" height="32" />
                    <Pkoenders />
                </span>

            </section>

            <section className={whatWeDoStyles.whatWeDoWrapper + ' section-layout-wide contentStart'}>

                <div className={whatWeDoStyles.whatWeDo}>

                    <div className={whatWeDoStyles.aboutMe}>
                        <div>
                            <p>I’m a versatile UI/UX designer originally from a traditional Graphic Design background and transitioned into Digital and Web Design.</p>
                        </div>

                        <span>
                            {/* <p>I cover and range of design tasks.</p> */}
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

                    <div className={whatWeDoStyles.technical}>
                        <div>
                            <p>I support digital accessibility, am curious and enjoy working with creative and integration teams delivering digital solutions.</p>
                        </div>
                        <span>
                            <IconDevelopment />
                            <p>With professionalism, integrity and care. I work in a collaborative manner to plan, design and deliver crafted solutions.</p>
                            <a href="/peter-koenders-resume.pdf" className="buttonPrimary">View my resumé</a>
                        </span>

                    </div>


                </div>
            </section>
        </>
    )
}

export default WhatWeDo

