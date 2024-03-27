import React from 'react';

import { Link } from 'react-router-dom';
import CartWidgetComponent from './CartWidgetComponent';

export default function NavBarComponent({ color }) {
  const misEstilos = {
    backgroundColor: color,
  };

  return (
    <>
      <nav style={misEstilos}>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            <img
              src="../img/cartoon_animal_dog_animals_cute_icon_260626.svg"
              alt="Logo de perro"
            />
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/catalogo">Productos</Link> {/* Vincular a la ruta del catálogo */}
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <CartWidgetComponent />
            </li>
            <li>5</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
