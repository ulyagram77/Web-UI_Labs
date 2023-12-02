import { useState, useEffect } from 'react';
import { Typography, Row, Col, Slider } from 'antd';
import axios from 'axios';

import List from '../List/List';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [rows, setRows] = useState(3);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(
                    'https://jsonplaceholder.typicode.com/photos',
                );
                setData(responce.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error.message);
            }
        };
        // Вызываем функцию fetchData
        fetchData();
    }, []);

    return (
        <>
            <Typography.Title style={{ textAlign: 'center' }}>
                Settingable List Component
            </Typography.Title>
            <Row>
                <Col
                    xs={24}
                    md={{ span: 18, offset: 3 }}
                >
                    <Typography.Title level={4}>
                        Кількість виводимих елементів
                    </Typography.Title>
                    <Slider
                        min={1}
                        max={50}
                        defaultValue={rows}
                        onChange={setRows}
                    />
                    <List
                        rows={rows}
                        data={data}
                    />
                </Col>
            </Row>
        </>
    );
}

export default App;
