import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import { getProducts, addProduct, editProduct, deleteProduct } from '../api/products';

const AdminPanel = () => {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const products = await getProducts();
        setProducts(products);
    };

    const handleAddProduct = async (product) => {
        await addProduct(product);
        fetchProducts();
    };

    const handleEditProduct = async (product) => {
        await editProduct(product);
        fetchProducts();
        setEditingProduct(null);
    };

    const handleDeleteProduct = async (productId) => {
        await deleteProduct(productId);
        fetchProducts();
    };

    return (
        <div className="admin-panel">
            <h2>Admin Panel</h2>
            <ProductForm onSubmit={handleAddProduct} />
            <h3>Product List</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => setEditingProduct(product)}>Edit</button>
                        <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {editingProduct && (
                <ProductForm
                    product={editingProduct}
                    onSubmit={handleEditProduct}
                />
            )}
        </div>
    );
};

export default AdminPanel;
