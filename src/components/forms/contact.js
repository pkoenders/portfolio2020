import React from 'react'
import contactStyles from './contactForm.module.scss'
import IconWave from "../../images/svg/icon-wave.inline.svg"
import FormContact from "./formContact"

const ContactForm = ({ data, location }) => {


    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <h2>Contact me</h2>
            <div className={contactStyles.contactFormWrapper}>
                <div className={contactStyles.contactForm}>
                    <span className={"contactForm"}>
                        <IconWave />
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
