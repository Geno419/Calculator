import { useState } from 'react'
import './App.css'
import {Display, Numbers, Operations} from './components/index'


function App() {

  return (
    <div>
      <Display></Display>
      <Numbers></Numbers>
      <Operations></Operations>
    </div>
  )
}

export default App
