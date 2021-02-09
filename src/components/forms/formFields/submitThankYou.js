import React from "react"
import { Link } from "gatsby"
import submitStyles from "./thankYou.module.scss"
import IconSubmitSuccess from "../../../images/svg/icon-contact-success.inline.svg"

const SubmitThankYou = (resetSubmit) => {
  return (
    <div className={submitStyles.wrapper}>
      <h3>Thank you</h3>
      <IconSubmitSuccess aria-hidden="true" />
      <p>I have recieved your enquiry and will get back to you soon.</p>
      <Link
        onClick={resetSubmit}
        className={'buttonPrimary'} to="/"
      >
        <i className={"material-icons-round md-36"} aria-hidden="true">arrow_back</i>
          Back to my portfolio
      </Link>
    </div>
  )
}
export default SubmitThankYou