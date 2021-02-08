import React from "react"

const Email = ({ inputEmail, onEmailChange }) => {
  return (
    <label htmlFor="email">
      Email (required)
      <input
        type="email"
        name="email"
        value={inputEmail}
        placeholder="Your email address"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
        onChange={onEmailChange}
      />
    </label>
  )
}
export default Email