import React from 'react'
import contactStyles from './contact.module.scss'
import { useForm, ErrorMessage } from "react-hook-form"
import IconWave from "../../images/svg/icon-wave.inline.svg"

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch(`./contact-success`)
            .then(resp => {
                window.location = "./contact-success";
            });
    }

    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <h2>Contact me</h2>
            <div className={contactStyles.contactFormWrapper}>

                <div className={contactStyles.contactForm}>
                    <IconWave />
                    <p>I would love to be contacted to discuss work commissions or just hear your thoughts and ideas.</p>
                    <p>You can call me (New Zealand) <a href="tel:+64 21 1551 085">+64 21 1551 085</a>. Alternatively, complete the form for email enquires. Thank you.</p>
                    <div className={contactStyles.contactFormInput}>
                        <form
                            name="pixl-contact"
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                            //action="contact-success"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                        >
                            <input type="hidden" name="bot-field" />
                            <p>
                                <label htmlFor="name">
                                    <span>Name (required)</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        id="name"
                                        ref={register({
                                            required: "Your name is required",
                                            maxLength: 80,
                                            message: 'Please enter your name'
                                        })} />
                                    <ErrorMessage errors={errors} name="name" as="em" />
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
                                        placeholder="Email"
                                        ref={register({
                                            required: "Please enter your email address",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "Invalid email address"
                                            }
                                        })} />
                                    <ErrorMessage errors={errors} name="email" as="em" />
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
                                    className="buttonPrimaryDark">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm
