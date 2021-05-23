import React from 'react'
import PixlLogo from "../../images/svg/logo-pixl.inline.svg"
import Pkoenders from "../../images/svg/pkoenders.inline.svg"

import * as hero from './hero.module.scss'

const Hero = () => {

    return (
        <section className={hero.wrapper + ' section-layout-wide'}>

            <div className={hero.intro}>
                <div className={hero.introWrapper}>
                    <h1><PixlLogo />Tēnā koe,<br /><span>Welcome to my portfolio.</span></h1>
                </div>
            </div>

            <span>
                <canvas className="headAnim" width="32" height="32" />
                <Pkoenders />
            </span>

        </section>
    )
}

export default Hero