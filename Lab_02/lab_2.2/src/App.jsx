import React from 'react';
import Card from './Card';
import ProductList from './ProductList';

function App() {
    return (
        <>
            <Card title="Первое задание" className='card-primery'>
                <p>Это тело первой карточки для проверки работы функционала</p>
            </Card>

            <Card title="Второе задание" className='card-secondary'>
                <p>Вторая карточка для проверки работы функционала</p>
            </Card>

            <ProductList />
        </>
    );
}

export default App;