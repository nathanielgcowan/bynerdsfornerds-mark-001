import { useState, useEffect } from 'react'
import './App.css'

function App() {

  function newFunction(name, callback) {
    callback("Hello " + name)
  }

  function printVariable(variable) {
    console.log(variable)
  }

  // Create a new function that takes two parameters.
  // 1. name
  // 2. callback that prints out what we pass to it(printVaribale)
  // Take name and append "Hello" to the beginning of the name
  // If I pass in "Kyle" It will pirnt "Hello Kyle"

  return (
   <div className="App">
    {
      newFunction("Nathaniel", printVariable)
    }
    </div>
  )
}

export default App
