import React from 'react';

const ProductItem = ({ product }) => {
    return (
        <div className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    );
};

export default ProductItem;
