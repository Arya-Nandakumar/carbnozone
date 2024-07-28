import React from 'react';
// import './ProductsPage.css';

const products = [
  {
    id: 1,
    name: 'Steel Slag',
    description: 'Used as an aggregate in concrete and asphalt, enhancing building materials.',
  },
  {
    id: 2,
    name: 'Fly Ash',
    description: 'Byproduct of coal burning, used in cementitious materials to make concrete.',
  },
];

const ProductsPage = () => {
  return (
    <div className="products">
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
