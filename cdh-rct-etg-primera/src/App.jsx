import { useState } from 'react'
import { NavBar } from './componets/NavBar/NavBar'
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div>

      <NavBar />
      <ItemListContainer gretting="pruebas" />
    </div>
  )
}

export default App
