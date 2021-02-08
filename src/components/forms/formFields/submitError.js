import React from "react"
import submitStyles from "./thankYou.module.scss"
import IconSubmitError from "../../../images/svg/icon-contact-error.inline.svg"

const SubmitError = () => {
  return (
    <div className={submitStyles.wrapper}>
      <h3>Sorry</h3>
      <IconSubmitError aria-hidden="true" />
      <p>Looks like there was a problem receiving the form on our end.</p>
    </div>
  )
}
export default SubmitError