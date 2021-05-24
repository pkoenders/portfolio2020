import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'

import IconDevelopment from "../../images/svg/icon-development.inline.svg"

import * as intro from './intro.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Intro = () => {

    const panelRefs = useRef([])
    panelRefs.current = []

    const panelRef = item => {
        if (item && !panelRefs.current.includes(item)) {
            panelRefs.current.push(item);
        }
    }

    useEffect(() => {
        panelRefs.current.forEach((item, index) => {
            ScrollTrigger.create({

                trigger: item,
                //start: "top top+=60px",
                start: "top top+=59px",
                //end: 'bottom top',
                pin: true,
                pinSpacing: false,

            });
            return () => {
                panelRefs.current.kill()
            }
        });

        // ScrollTrigger.create({
        //     //snap: 1 / 4 // snap whole page to the closest section!
        // });

    }, [])

    return (
        <section className={intro.sectionIntro + ' section-layout-wide contentStart'}>
            <div className={intro.intro}>

                <div className={intro.part1} ref={panelRef}>
                    <span>
                        <p>I’m a versatile UI/UX designer originally from a traditional Graphic Design background and transitioned into Digital and Web Design.</p>
                    </span>
                </div>

                <div className={intro.part2} ref={panelRef}>
                    <span>
                        <p>I support digital accessibility, am curious and enjoy working with creative and integration teams delivering digital solutions.</p>
                    </span>
                </div>

                <div className={intro.part3} ref={panelRef}>
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

                <div className={intro.part4} ref={panelRef}>
                    <span>
                        <IconDevelopment />
                        <p>With professionalism, integrity and care. I work in a collaborative manner to plan, design and deliver crafted solutions.</p>
                        <a href="/peter-koenders-resume.pdf" className="buttonPrimary">View my resumé</a>
                    </span>
                </div>



            </div>
            <span ref={panelRef}></span>
        </section>
    )
}

export default Intro

