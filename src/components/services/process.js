import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import ourProcessStyles from './process.module.scss'
import IconDesignProcess from "../../images/svg/icon-design-process.inline.svg"

const DesignProcess = () => {

    return (
        <section className={ourProcessStyles.ourProcess + ' section-layout-wide'} id="designProcess">
            <div className={ourProcessStyles.ourProcessWrapper}>

                <ul>
                    <li>
                        <IconDesignProcess />
                        <h3>Our design process</h3>
                        <p>Good design includes a design process that aligns with an overarching strategy. The following process has been created for website design and can be adapted for graphic design.</p>
                        <p>Our process is a guide that builds a carefully planned project with task allocation and attention to detail allowing for change requests, testing and contingency.</p>

                        <ol>
                            <li>
                                <h4>Research &amp; goal identification</h4>
                                <p>We work with you to define who are your customers, what is the purpose of the project and what are the goals and deliverables that need be fulfilled.</p>
                            </li>
                            <li>
                                <h4>Discovery, scope &amp; definition</h4>
                                <p>Knowing the project goals are, we can define the scope of the project. I.e., what elements and features are required to fulfil the goal, and the time-line for building those out. Collaborate and build relationships with stakeholders.</p>
                            </li>
                            <li>
                                <h4>Wire-frame creation</h4>
                                <p>Knowing the scope and definition, a map can created defining how content and features will interrelate. Test (with actual users where possible), iterate and test again.</p>
                            </li>
                            <li>
                                <h4>Testing</h4>
                                <p>With the elements defined, test how they display to the user. Ensure these elements work. Identify everything from user experience issues to simple broken links.</p>
                            </li>
                            <li>
                                <h4>Visual elements</h4>
                                <p>With in wire-frames (lo-fi) in place, we can start working on the visual elements. Depending on the client, this may already be well-defined, but you might also be defining the visual style from the ground up. Tools like style guides, mood-boards, and hi-fi/html templates can help with this process.</p>
                            </li>
                            <li>
                                <h4>Testing</h4>
                                <p>Test test test - Did I mention test?</p>
                            </li>
                            <li>
                                <h4>Implementation &amp; delivery</h4>
                                <p>Work closely with developers and engineers to mitigate any potential miscommunication and reduce double handling of assets.</p>
                            </li>
                            <li>
                                <h4>Support implementation</h4>
                                <p>Be available to anyone / everyone who have any questions. It is important to keep communication open and maintain a level of trust we work hard to build within teams.</p>
                            </li>
                        </ol>
                    </li>
                </ul>

            </div>
        </section>
    )
}

export default DesignProcess

