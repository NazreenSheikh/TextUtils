import React, { useState } from 'react'
import { BsMoon } from 'react-icons/bs'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import Yourtext from './components/Yourtext'

function App() {
  // const [modeicon, setModeicon] = useState(<BsMoon />)
  const [mode, setMode] = useState('light')
  const ToggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      // setModeicon(<BiSun />)
    } else {
      setMode('light')
      // setModeicon(<BsMoon />)
    }
  }

  return (
    <>
      {' '}
      <Router>
        <Navbar about="About" mode={mode} ToggleMode={ToggleMode} />
        <Switch>
          <Route exact path="/">
            <Yourtext mode={mode} />
          </Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
