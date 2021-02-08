import React from "react"
import submitStyles from "./thankYou.module.scss"
import IconSubmitSuccess from "../../../images/svg/icon-contact-success.inline.svg"

const SubmitThankYou = () => {
  return (
    <div className={submitStyles.wrapper}>
      <h3>Thank you</h3>
      <IconSubmitSuccess aria-hidden="true" />
      <p>I have recieved your enquiry and will get back to you soon.</p>
    </div>
  )
}
export default SubmitThankYou