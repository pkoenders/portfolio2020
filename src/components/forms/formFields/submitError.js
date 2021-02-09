import React from "react"
import { Link } from "gatsby"
import submitStyles from "./thankYou.module.scss"
import IconSubmitError from "../../../images/svg/icon-contact-error.inline.svg"

const SubmitError = () => {
  return (
    <div className={submitStyles.wrapper}>
      <h3>Sorry</h3>
      <IconSubmitError aria-hidden="true" />
      <p>Looks like there was a problem receiving the form on our end.</p>
      <Link className={'buttonPrimary'} to="/"><i className={"material-icons-round md-36"} aria-hidden="true">arrow_back</i>Back to my portfolio</Link>
    </div>
  )
}
export default SubmitError