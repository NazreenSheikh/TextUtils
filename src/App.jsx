import React from 'react'
import Navbar from './components/Navbar'
import Yourtext from './components/Yourtext'
function App() {
  return (
    <>
      <Navbar about="About" />
      <div className="container">
        <Yourtext />
      </div>
    </>
  )
}

export default App
