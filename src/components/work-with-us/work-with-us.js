import React from 'react'
import contactStyles from '../homepage/contact.module.scss'
import { useForm, ErrorMessage } from "react-hook-form"
import IconWave from "../../images/svg/icon-wave.inline.svg"

const ConsoltationForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        fetch(`./contact-success`)
            .then(resp => {
                window.location = "./contact-success";
            });
    }
    return (
        <section className={contactStyles.contactFormSection + ' section-layout-wide'}>
            <h2>Considering working with us?</h2>
            <div className={contactStyles.contactFormWrapper}>

                <div className={contactStyles.contactForm}>
                    <IconWave />
                    <p>We would love to be contacted to discuss work commissions or just hear your thoughts and ideas. We will always reply.</p>
                    <p>You can call us (New Zealand) <a href="tel:+64 21 1551 085">+64 21 1551 085</a>. Alternatively, complete the form for email enquires. Thank you.</p>
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
                                    <span>Your name (required)</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
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
                                <label htmlFor="businessName">
                                    <span>Your business name</span>
                                    <input
                                        type="text"
                                        name="business-name"
                                        placeholder="Business name"
                                        id="businessName"
                                    />

                                </label>
                            </p>

                            <p>
                                <label htmlFor="businessWebsite">
                                    <span>Existing website (if applicable)</span>
                                    <input
                                        type="text"
                                        name="website-name"
                                        placeholder="https://mybusinessname.com"
                                        id="businessWebsite"
                                    />
                                </label>
                            </p>


                            <p>What services are you loooking for?</p>
                            <p>
                                <label htmlFor="webdesign">
                                    <span>Web design &amp; develpment</span>
                                    <input type="checkbox" name="webdesign" id="webdesign" />
                                </label>
                            </p>
                            <p>

                                <label for="graphicdesign">
                                    <span>Graphic design &amp; branding</span>
                                    <input type="checkbox" name="graphicdesign" id="graphicdesign" />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="timeline">
                                    <span>What is your timeframe?</span>
                                    <input
                                        type="text"
                                        name="timeline"
                                        placeholder="Within 2 months"
                                        id="timeline" />
                                </label>
                            </p>
                            <p>
                                <label htmlFor="message">
                                    <span>Tell us about your project</span>
                                    <textarea name="message" id="message" rows="5" />
                                </label>
                            </p>
                            <p>
                                <button type="submit" className="buttonPrimaryDark">Send</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConsoltationForm
