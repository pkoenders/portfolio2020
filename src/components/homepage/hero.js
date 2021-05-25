import React from 'react'

import * as hero from './hero.module.scss'

const Hero = () => {

    return (
        <section className={hero.wrapper + ' section-layout-wide contentStart'}>
            <div className={hero.intro}>
                <a href="/peter-koenders-resume.pdf" className={"buttonPrimary"}><i className={"material-icons-round"} aria-hidden="true">article</i> View my resumé</a>
                <h1>Tēnā koe, welcome to my portfolio.</h1>
            </div>
        </section>
    )
}

export default Hero