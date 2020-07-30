import React from 'react'
import contactStyles from './contact.module.scss'
import IconSuccess from "../../images/svg/icon-contact-success.inline.svg"
import IconPhone from "../../images/svg/icon-phone.inline.svg"


const contactFormSucess = () => {

    return (
        <section className={contactStyles.contactFormSectionSuccess + ' section-layout-wide'}>
            <h2>Thanks!</h2>
            <div className={contactStyles.contactSuccessWrapper}>
                <div className={contactStyles.contactSuccess}>
                    <IconSuccess />
                    <p>We have recieved your request and will reply to you soon.</p>
                    <p><em>You can always call us</em> <strong><a href="tel:+64 21 155 1085"><IconPhone className={contactStyles.contactIconPhone} />+64 21 155 1085</a></strong></p>
                </div>
            </div>
        </section>
    )
}

export default contactFormSucess
