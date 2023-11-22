import { useState } from 'react';
import Table from '../Table/Table';
import ComponentWithProp from '../ComponentWithProp/ComponentWithProp';
import CitiesSelect from '../CitiesSelect/CitiesSelect';

import './App.css';

const product1 = {
    brand: 'Dell',
    model: 'Inspiron 15',
    processor: 'Intel Core i5',
    RAM: '8GB',
    graphicsCard: 'NVIDIA GeForce GTX 1650',
    operatingSystem: 'Windows 10',
    isLaptop: true,
};

const product2 = {
    brand: 'Asus',
    model: 'Vivobook Pro 17',
    processor: 'Intel Core i5',
    RAM: '16GB',
    graphicsCard: 'NVIDIA GeForce GTX 1050',
    operatingSystem: 'Linux Monjaro KDE',
    isLaptop: true,
};

const cities = [
    { id: 1, name: 'Kyiv', country: 'Ukraine', image: '/kyiv.jpg' },
    {
        id: 2,
        name: 'Kharkiv',
        country: 'Ukraine',
        image: '/kharkiv.jpg',
    },
    {
        id: 3,
        name: 'Odessa',
        country: 'Ukraine',
        image: '/odessa.jpg',
    },
    {
        id: 4,
        name: 'Shibuya',
        country: 'Japan',
        image: '/shibuya.jpg',
    },
    { id: 5, name: 'London', country: 'UK', image: '/london.jpg' },
];

function App() {
    return (
        <>
            <h2>Task 1</h2>
            <Table />
            <h2>Task 2</h2>
            <ComponentWithProp productData={product1} />
            <ComponentWithProp productData={product2} />
            <h2>Task 3</h2>
            <CitiesSelect cities={cities} />
        </>
    );
}

export default App;
