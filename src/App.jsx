import React, { useState } from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import About from './components/About'
import Navbar from './components/Navbar'
import Yourtext from './components/Yourtext'
import Alert from './components/Alert'

function App() {
  // const [modeicon, setModeicon] = useState(<BsMoon />)
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529'
      handleAlert('Dark mode has been set', 'success')
    } else {
      setMode('light')
      handleAlert('Light mode has been set', 'success')
      document.body.style.backgroundColor = 'white'
    }
  }
  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  return (
    <>
      <Navbar home="Home" mode={mode} ToggleMode={ToggleMode} />
      <Alert alert={alert} />
      <Yourtext mode={mode} showAlert={handleAlert} title="TextUtils" />
    </>
  )
}

export default App
