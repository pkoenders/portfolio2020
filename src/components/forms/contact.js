import React, { useEffect } from 'react'
import IconWave from "../../images/svg/icon-wave.inline.svg"
import FormContact from "./formContact"

import { gsap, Elastic } from "gsap"
import { CSSPlugin, ScrollTrigger, TimelineLite } from 'gsap/all'

import * as contactStyles from './contactForm.module.scss'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TimelineLite)
gsap.registerPlugin(CSSPlugin)

const ContactForm = ({ data, location }) => {

    //TimelineLite.fromTo('wave', 2, { rotation: -20 }, { rotation: 0, ease: Elastic.easeOut.config(5, 0.2) })
    // var waveAnim = document.querySelector('.wave');

    //TimelineLite.fromTo('.wave', 2, { rotation: -20 }, { rotation: 0, ease: Elastic.easeOut.config(5, 0.2) })

    // this.waveAnim = new TimelineLite({  })
    // .to(this.logoContainer, 2, { x: 500 })
    // .to(this.logoContainer, 1, { rotation: 360, transformOrigin: "center" });




    useEffect(() => {
        const waveAnim = document.querySelector('.wave')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: waveAnim,
                start: "top bottom-=192px",
                toggleActions: "play none none reverse",
                //markers: true,
            }
        });

        tl.fromTo(waveAnim,
            {
                rotation: -20,
                scale: .9,
            },
            {
                rotation: 0,
                scale: 1,
                filter: "drop-shadow(rgba(0,0,0,.15) 0px 0px 4px)",
                ease: Elastic.easeOut,
                duration: 2,
            })

    }, []);

    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <h2>Contact me</h2>
            <div className={contactStyles.contactFormWrapper}>
                <div className={contactStyles.contactForm}>
                    <span className={"contactForm"}>
                        <IconWave className={'wave'} />
                        <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.</p>
                        <p>You can text or call me <a href="tel:+64 21 155 1085"><i className={"material-icons-round"} aria-hidden="true">call</i>+64 21 155 1085</a>. Alternatively, complete the following form for email enquires. Thanks.</p>

                    </span>
                    <FormContact data={data} location={location} />
                </div>
            </div>
        </section>
    )
}

export default ContactForm
