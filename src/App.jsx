import React from 'react';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarra from './Componentes/NavBarra/NavBarra';

const App = () => {
  return (
    <>

      <BrowserRouter>
        <NavBarra />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App