import React, { useState } from 'react'

const Yourtext = (props) => {
  const [text, setText] = useState('')

  const onTextChange = (e) => {
    setText(e.target.value)
  }

  const ToUpperCase = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
    props.showAlert('converted to Uppercase', 'success')
  }

  const ToLowerCase = () => {
    let newtext = text.toLowerCase()
    setText(newtext)
    props.showAlert('converted to Lowercase', 'success')
  }

  const RemoveSpace = () => {
    // let newtext = text.replace(/\s+/g, ' ').trim() both works
    let newtext = text.split(/[ ]+/).join(' ')
    setText(newtext)
    props.showAlert('Extra Spaces removed', 'success')
  }

  return (
    <div
      className={`text-${props.mode === 'light' ? 'dark' : 'light'} bg-${
        props.mode
      }`}
    >
      <div className="container ">
        <button
          className="btn btn-warning my-2"
          onClick={(text) => setText('')}
        >
          Reset
        </button>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${
              props.mode === 'light' ? 'light' : 'secondary'
            }  my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}
            value={text}
            placeholder="Enter text"
            onChange={onTextChange}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-warning mx-2 my-1" onClick={ToUpperCase}>
            convert to UpperCase
          </button>
          <button className="btn btn-warning mx-2 my-1" onClick={ToLowerCase}>
            convert to Lowercase
          </button>
          <button className="btn btn-warning mx-2 my-1" onClick={RemoveSpace}>
            remove extra Spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h4>Summary of your Text</h4>
        <p>
          {text.split(/[ ]+/).length - 1} words and {text.length} characters
        </p>
        <p className="text-muted">
          {Math.round(0.008 * (text.split(' ').length - 1))}m read time
        </p>
        <h5 className="mt-4 ">Preview</h5>
        <p className="mt-3 ">
          {text === ''
            ? 'Enter something in textbox to preview here'
            : text}
        </p>
      </div>
    </div>
  )
}

export default Yourtext
