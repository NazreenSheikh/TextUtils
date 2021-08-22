import React, { useState } from 'react'

const Yourtext = () => {
  const [text, setText] = useState('')

  const onTextChange = (e) => {
    setText(e.target.value)
  }
  const ToUpperCase = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  return (
    <div>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          placeholder="Enter text"
          onChange={onTextChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={ToUpperCase}>
          {' '}
          convert to UpperCase
        </button>
      </div>
    </div>
  )
}

export default Yourtext
