import React from 'react'
import introStyles from './intro.module.scss'
import LogoPixel from "../../images/svg/logo-pixel.inline.svg"
const Intro = () => {

    return (
        <section className='section-layout'>
            <div className={introStyles.intro}>
                <LogoPixel />
                <h1>Kia ora, <br />
                    Welcome, to the portfolio od Peter Koenders.
                </h1>
            </div>
        </section>
    )
}

export default Intro

