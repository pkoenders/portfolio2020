import React from "react"

const Subject = ({ inputSubject, onSubjectChange }) => {
  return (
    <label htmlFor="subject">
      Subject
      <input
        type="text"
        name="subject"
        value={inputSubject}
        onChange={onSubjectChange}
      />
    </label>
  )
}
export default Subject