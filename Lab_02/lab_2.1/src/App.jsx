import React from 'react';
import FragmentLayout from './FragmentLayout.jsx';
import ItemList from "./ItemList.jsx";
import CombinedList from "./CombinedList.jsx";

function App() {
    return (
        <>
            <FragmentLayout />
            <ItemList />
            <CombinedList />
        </>
    )
}

export default App;