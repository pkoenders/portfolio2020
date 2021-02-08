import React from "react"

const Message = ({ inputMessage, onMessageChange }) => {
  return (
    <label htmlFor="message">
      Message
      <textarea
        name="message"
        value={inputMessage}
        rows="5"
        onChange={onMessageChange}
      />
    </label>
  )
}
export default Message