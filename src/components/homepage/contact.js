import React from 'react'
import contactStyles from './contact.module.scss'
import IconWave from "../../images/svg/icon-wave.inline.svg"
import IconPhone from "../../images/svg/icon-phone.inline.svg"

const ContactForm = () => {


    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <h2>Contact me</h2>
            <div className={contactStyles.contactFormWrapper}>

                <div className={contactStyles.contactForm}>
                    <IconWave />
                    <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.</p>
                    <p>You can text or all me <a href="tel:+64 21 155 1085"><IconPhone className={contactStyles.contactIconPhone} />+64 21 155 1085</a>. Alternatively, complete the following form for email enquires. Thanks.</p>
                    <div className={contactStyles.contactFormInput}>
                        <form
                            name="pkoenders-contact"
                            method="post"
                            action="contact-success"
                            netlify-honeypot="bot-field"
                            data-netlify="true"

                        >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="pkoenders-contact" />
                            <p>
                                <label htmlFor="name">
                                    <span>Name (required)</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        id="name"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="email">
                                    <span>Email (required)</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your email address"
                                        id="email"
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                        required
                                    />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="subject">
                                    <span>Subject</span>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject" />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span>Message</span>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="5" />
                                </label>
                            </p>
                            <p>
                                <button
                                    type="submit"
                                    className="buttonPrimary">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
