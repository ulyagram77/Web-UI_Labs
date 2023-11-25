import { Table, Typography, Image } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        sorter: (a, b) => a.price - b.price,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
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

const Cart = ({ products, rows }) => {
    const cartData = products.map((product) => ({
        ...product,
        key: product.id,
    }));

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
