import React from "react"

const Name = ({ inputName, onNameChange }) => {
  return (
    <label htmlFor="name">
      Name (required)
      <input
        type="text"
        name="name"
        value={inputName}
        placeholder="Your name"
        required
        onChange={onNameChange}
      />
    </label>
  )
}
export default Name