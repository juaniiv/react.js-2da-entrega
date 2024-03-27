import React from 'react';
import CartWidget from './CartWidgetComponent';

  return (
    <>
      <nav style={misEstilos}>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            <img src="../img/cartoon_animal_dog_animals_cute_icon_260626.svg" alt="Logo" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="./index.html">Inicio</a></li>
            <li><a href="sass.html">Productos</a></li>
            <li><a href="badges.html">Contacto</a></li>
            <li><CartWidget /></li>
            <li>5</li>
          </ul>
        </div>
      </nav>
    </>
  );


export default NavbarComponent;

