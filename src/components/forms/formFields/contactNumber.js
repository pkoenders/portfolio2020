import React from "react"

const ContactNum = ({ inputNumber, onNumberChange }) => {
  const { t } = useTranslation()

  return (
    <label htmlFor="number">
      Contact number
      <input
        type="text"
        name="number"
        value={inputNumber}
        onChange={onNumberChange}
      />
    </label>
  )
}
export default ContactNum