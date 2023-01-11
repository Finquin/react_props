import { useState } from 'react'
import { NavBar } from './componets/NavBar/NavBar'
import { ItemListContainer } from './componets/ItemListContainer/ItemListContainer'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Contactos } from './componets/Contactos/Contactos'
import { ItemDetailConteiner } from './componets/ItemDetailConteiner/ItemDetailConteiner'
import { Navigate } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/home" element={<ItemListContainer />} />
        <Route path="/about" element={<ItemListContainer />} />
        <Route path="/productos/:categoryId" element={<ItemListContainer />} />
        <Route path="/itemDetail/:itemId" element={<ItemDetailConteiner />} />
        <Route path="/contacto" element={<Contactos />} />
        <Route path="/info" element={<ItemDetailConteiner />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>

      {/* <div>
      <NavBar />
      <ItemListContainer gretting="pruebas" />
    </div> */}
    </BrowserRouter>
  )
}

export default App
