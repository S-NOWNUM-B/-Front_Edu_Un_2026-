import React from 'react';

const items = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Magica'},
    {id: 3, name: 'Silva'},
    {id: 4, name: 'Apple'},
    {id: 5, name: 'Magica'},
    {id: 6, name: 'Silva'},
];

function CombinedList() {
    return (
        <>
            <h2>Fruit List</h2>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            <p>Total: {items.length} items</p>
        </>
    );
}

export default CombinedList;