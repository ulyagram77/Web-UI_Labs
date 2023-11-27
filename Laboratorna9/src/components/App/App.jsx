import { useState } from 'react';
import { ConfigProvider, Divider, Row, Col, Slider, Typography } from 'antd';

import MyCounter from '../Counter/MyCounter/MyCounter';
import CounterList from '../Counter/CounterList/CounterList';
import Cart from '../Cart/Cart';
import Game from '../Game/Game';

import './App.css';

const theme = {
    // другие настройки темы...
    token: {
        // Seed Token
        colorPrimary: '#3DB0E3',
        borderRadius: 7,
        colorPrimaryHover: '#3E72FF',
    },
};

const counters = [
    { id: 1, initial: 6, min: -5, max: 10 },
    { id: 2, initial: 5 },
    { id: 3 },
];

const products = [
    {
        id: 1,
        name: 'Asus TUF Gaming',
        price: 1000,
        quantity: 5,
        image: '/products/tuf.png',
    },
    {
        id: 2,
        name: 'Macbook Pro 13',
        price: 2000,
        quantity: 1,
        image: '/products/macb.png',
    },
    {
        id: 3,
        name: 'Lenovo ThinkPad',
        price: 700,
        quantity: 3,
        image: '/products/thnkp.png',
    },
    {
        id: 4,
        name: 'Asus ROG',
        price: 1500,
        quantity: 2,
        image: '/products/rog.png',
    },
    {
        id: 5,
        name: 'MSI QE-62',
        price: 1300,
        quantity: 1,
        image: '/products/msi.png',
    },
    {
        id: 6,
        name: 'Asus VivoBook Pro 15',
        price: 1100,
        quantity: 4,
        image: '/products/vivo15.png',
    },
];

function App() {
    const [rows, setRows] = useState(3);
    return (
        <>
            <ConfigProvider theme={theme}>
                <Divider>
                    <b>TASK 1</b>
                </Divider>
                <MyCounter />
                <Divider>
                    <b>TASK 1.2</b>
                </Divider>
                <CounterList countersData={counters} />
                <Divider>
                    <b>TASK 2</b>
                </Divider>
                <Row>
                    <Col
                        xs={24}
                        md={{ span: 16, offset: 4 }}
                    >
                        <Typography.Title level={4}>
                            Products Cart
                        </Typography.Title>
                        <Slider
                            min={1}
                            max={6}
                            defaultValue={rows}
                            onChange={setRows}
                        />
                        <Cart
                            rows={rows}
                            products={products}
                        />
                    </Col>
                </Row>
                <Divider>
                    <b>TASK 3</b>
                </Divider>
                <Game />
            </ConfigProvider>
        </>
    );
}

export default App;
