import React, { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
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
      handleAlert('dark mode has been set', 'success')
    } else {
      setMode('light')
      handleAlert('Light mode has been set', 'success')
    }
  }
  const handleAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  return (
    <>
      {' '}
      <Router>
        <Navbar about="About" mode={mode} ToggleMode={ToggleMode} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Yourtext mode={mode} showAlert={handleAlert} />
          </Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
