const products = [
    { id: 1, name: 'Product 1', price: 10, description: 'Description 1', image: 'image1.jpg' },
    { id: 2, name: 'Product 2', price: 20, description: 'Description 2', image: 'image2.jpg' },
    { id: 3, name: 'Product 3', price: 30, description: 'Description 3', image: 'image3.jpg' },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

export const addProduct = (product) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            products.push({ ...product, id: products.length + 1 });
            resolve();
        }, 1000);
    });
};

export const editProduct = (updatedProduct) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = products.findIndex(product => product.id === updatedProduct.id);
            if (index !== -1) {
                products[index] = updatedProduct;
            }
            resolve();
        }, 1000);
    });
};

export const deleteProduct = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const index = products.findIndex(product => product.id === productId);
            if (index !== -1) {
                products.splice(index, 1);
            }
            resolve();
        }, 1000);
    });
};
