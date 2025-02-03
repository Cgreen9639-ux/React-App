import React, { useState } from 'react';

const ProductForm = ({ product, onSubmit }) => {
    const [name, setName] = useState(product ? product.name : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [image, setImage] = useState(product ? product.image : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, price, description, image });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Product Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProductForm;
