import React from 'react';
import { Link } from 'react-router-dom';

const ProductoCard = ({ producto }) => {
  return (
    <div className="card">
      <div className="card-image">
        {/* Enlace al detalle del producto */}
        <Link to={`/item/${producto.id}`}>
          <img src={producto.imagen} alt={producto.nombre} />
        </Link>
        <span className="card-title">{producto.nombre}</span>
      </div>
      <div className="card-content">
        <p>{producto.descripcion}</p>
      </div>
    </div>
  );
};

export default ProductoCard;
