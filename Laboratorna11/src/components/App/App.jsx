import { Row, Col } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductContainer from '../ProductContainer/ProductContainer';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get(
                    'https://fakestoreapi.com/products',
                );
                setProducts(responce.data);
            } catch (error) {
                console.error('Ошибка при получении данных:', error.message);
            }
        };
        // Вызываем функцию fetchData
        fetchData();
    }, []);

    return (
        <Row>
            <Col>
                <ProductContainer products={products} />
            </Col>
        </Row>
    );
}

export default App;
