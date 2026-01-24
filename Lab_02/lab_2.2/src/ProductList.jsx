import React from 'react';
import Card from './Card';

const products = [
    {id: 1, name: 'Widget', price: 0.99 },
    {id: 2, name: 'Product', price: 9.99 },
    {id: 3, name: 'Product', price: 10.59 },
];

function ProductList() {
    return (
        <>
            {products.map(product => (
                <Card
                key={product.id}
                title={product.name}
                className='product-card'
                >
                    <p>Price: {product.price} USD</p>
                </Card>
            ))}
        </>
    );
}

export default ProductList;