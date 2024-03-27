import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from '../components/navbar/NavbarComponent';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ProductCard from '../components/ProductCard';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarComponent color={'black'}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const Home = () => {
  return <h1>¡Bienvenido a la tienda!</h1>;
};

const Catalogo = () => {
  return (
    <div>
      <h2>Catálogo</h2>
      <ItemListContainer />
      
    </div>
  );
};

export default App;


