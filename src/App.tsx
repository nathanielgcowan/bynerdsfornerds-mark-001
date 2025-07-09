import { useState, useEffect } from 'react'
import './App.css'

function App() {

  function saySomething() {
    console.log( "Nathaniel Cowan")
  }

  saySomething();

  return (
    <div>
      Hello World!
    </div>
  )
}

export default App
