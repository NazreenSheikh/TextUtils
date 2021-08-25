import React, { useState } from 'react'

const About = () => {
  const [modetext, setModetext] = useState('Dark mode')
  const [style, setStyle] = useState({
    color: 'black',
    backgroundColor: '#ffc107',
    borderColor: '#ffc107',
    borderRadius: '.25rem',
  })

  const SwitchMode = () => {
    if (style.color === 'black') {
      setStyle({
        color: 'white',
        backgroundColor: 'gray',
        borderColor: 'gray',
        borderRadius: '.25rem',
      })
      setModetext('Light mode')
    } else {
      setStyle({
        color: 'black',
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        borderRadius: '.25rem',
      })
      setModetext('Dark mode')
    }
  }

  return (
    <div>
      <div className="container">
        <button
          className="btn btn-warning my-2"
          onClick={(text) => setText('')}
        >
          Reset
        </button>
        <div className="mb-3">
          <button style={style}>convert to UpperCase</button>
          <button style={style}>convert to lowercase</button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={SwitchMode}>
        {modetext}
      </button>
    </div>
  )
}

export default About
