import React from 'react'
// import PixlLogo from "../../images/svg/logo-pixl.inline.svg"
// import Pkoenders from "../../images/svg/pkoenders.inline.svg"
import IconDevelopment from "../../images/svg/icon-development.inline.svg"


import * as hero from './hero.module.scss'

const Hero = () => {

    return (
        <section className={hero.wrapper + ' section-layout-wide'}>
            <div className={hero.intro}>
                {/* <PixlLogo /> */}
                <IconDevelopment />
                <h1>Tēnā koe, welcome to my portfolio.</h1>

            </div>



            {/* <span>
                <canvas className="headAnim" width="32" height="32" />
                <Pkoenders />
            </span> */}
        </section>
    )
}

export default Hero