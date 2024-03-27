import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const productosPerros = [
  {
    id: 1,
    nombre: 'Correa ajustable',
    imagen: '../img/correa.jpg',
    descripcion: 'Correa resistente y ajustable para pasear a tu perro con comodidad.',
  },
  {
    id: 2,
    nombre: 'Juguete mordedor',
    imagen: '../img/juguete.webp',
    descripcion: 'Juguete de goma resistente para satisfacer el instinto de morder de tu perro.',
  },
  {
    id: 3,
    nombre: 'Cama para perros',
    imagen: '../img/cama.png',
    descripcion: 'Cama suave y cómoda para que tu perro descanse placenteramente.',
  },
  {
    id: 4,
    nombre: 'Bol de comida',
    imagen: '../img/Comedero para perros.jpg',
    descripcion: 'Bol de comida antideslizante para que tu perro disfrute sus comidas sin problemas.',
  },
];

const ItemListContainer = () => {
  return (
    <div className="row">
      {productosPerros.map(producto => (
        <div className="col s12 m6 l3" key={producto.id}>
          <Link to={`/item/${producto.id}`}>
            <ProductCard producto={producto} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemListContainer;

