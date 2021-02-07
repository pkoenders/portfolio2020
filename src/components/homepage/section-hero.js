import React from "react"
import { Link } from "gatsby"
import SectionHeroStyles from "./section-hero.module.scss"

import LogoPixel from "../../images/svg/logo-pixel.inline.svg"


const SectionHero = () => (
    <section className='section-layout'>
        <div className={SectionHeroStyles.hero}>
            <div>
                <LogoPixel />
            </div>
        </div>
    </section>
)

export default SectionHero
