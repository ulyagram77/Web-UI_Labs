import { Table, Typography, Image, Button } from 'antd';
import { useState } from 'react';

const Cart = ({ products, rows }) => {
    const [cartData, setCartData] = useState(
        products.map((product) => ({
            ...product,
            key: product.id,
            total: product.price * product.quantity,
        })),
    );

    const handleIncrement = (record) => {
        const updatedCartData = cartData.map((item) =>
            item.id === record.id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                      total: (item.quantity + 1) * item.price,
                  }
                : item,
        );
        setCartData(updatedCartData);
    };

    const handleDecrement = (record) => {
        const updatedCartData = cartData.map((item) =>
            item.id === record.id && item.quantity > 0
                ? {
                      ...item,
                      quantity: item.quantity - 1,
                      total: (item.quantity - 1) * item.price,
                  }
                : item,
        );
        setCartData(updatedCartData);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => (
                <Typography.Text copyable>{text}</Typography.Text>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            render: (text) => <Typography.Text>{text} $</Typography.Text>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                <div>
                    <Button onClick={() => handleIncrement(record)}>+</Button>
                    <span style={{ margin: '0 8px' }}>{text}</span>
                    <Button onClick={() => handleDecrement(record)}>-</Button>
                </div>
            ),
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (text) => <Typography.Text>{text} $</Typography.Text>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (text) => (
                <Image
                    src={text}
                    width={100}
                    alt="product"
                />
            ),
        },
    ];

    return (
        <Table
            dataSource={cartData}
            columns={columns}
            pagination={{
                pageSize: rows,
            }}
        />
    );
};

export default Cart;
