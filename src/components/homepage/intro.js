import React, { useEffect, useRef } from 'react'
import { gsap, Bounce } from "gsap"
import { ScrollTrigger } from 'gsap/all'
// import IconDevelopment from "../../images/svg/icon-development.inline.svg"

import * as intro from './intro.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {

    const iconRefs = useRef([]);
    iconRefs.current = [];

    const iconRef = item => {
        if (item && !iconRefs.current.includes(item)) {
            iconRefs.current.push(item);
        }
    }

    useEffect(() => {
        // const timeline = gsap.timeline()
        // gsap.fromTo(iconRefs.current,
        //     {
        //         opacity: 0,
        //         scale: .0,

        //     },
        //     {
        //         opacity: 1,
        //         scale: 1,
        //         ease: Bounce.easeOut,
        //         duration: .5,
        //         stagger: .75
        //     },
        // )

        // return () => {
        //     iconRefs.current.kill()
        // }

        iconRefs.current.forEach((item, index) => {
            gsap.fromTo(item,
                {
                    scale: .66,
                    opacity: 0
                },
                {
                    opacity: 1,
                    scale: 1,
                    ease: Bounce.easeOut,
                    duration: 1,
                    stagger: .75,
                    scrollTrigger: {
                        trigger: item,
                        stagger: .75,
                        start: "top bottom-=32px",
                        // end: 'bottom bottom+=124px',
                        toggleActions: 'play none none reset',
                        // markers: true
                    }
                },
            )

            return () => {
                iconRefs.current.kill()
            }
        })

    }, [])

    return (
        <section className={intro.sectionIntro + ' section-layout-wide'}>
            <div className={intro.intro}>

                <div className={intro.part1}>
                    <span>
                        <i className={"material-icons-round"} aria-hidden="true" ref={iconRef}>follow_the_signs</i>
                        <p>I’m a UI/UX designer originally from a traditional Graphic Design background and transitioned into Digital and Web Design.</p>
                    </span>
                </div>

                <div className={intro.part2} >
                    <span>
                        <i className={"material-icons-round"} aria-hidden="true" ref={iconRef}>accessibility_new</i>
                        <p>I support digital accessibility, am curious and enjoy working with creative and integration teams delivering digital solutions.</p>
                    </span>
                </div>

                <div className={intro.part3} >
                    <span>
                        <i className={"material-icons-round"} aria-hidden="true" ref={iconRef}>favorite_border</i>
                        {/* <IconDevelopment /> */}
                        <p>With professionalism, integrity and care. I work in a collaborative manner to plan, design and deliver crafted solutions.</p>
                    </span>
                </div>

                <div className={intro.part4} >
                    <span>
                        <i className={"material-icons-round"} aria-hidden="true" ref={iconRef}>design_services</i>
                        <ul>
                            <li>Implementation of the UI/UX design process</li>
                            {/* <li>Estimating &amp; proposal review</li> */}
                            <li>Iterative wire-framing &amp; prototypes</li>
                            {/* <li>Build &amp; maintain design systems</li> */}
                            <li>HTML templates &amp; components</li>
                            {/* <li>Graphic design</li> */}
                        </ul>
                    </span>
                </div>

                {/* <IconDevelopment /> */}

            </div>
        </section>
    )
}

export default Intro

