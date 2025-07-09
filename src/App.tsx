import { useState, useEffect } from 'react'
import './App.css'

function App() {

  function setname(name) {
    return "Hello" + name
  }


  return (
    <div>
      {setname("Nathaniel")}
    </div>
  )
}

export default App
