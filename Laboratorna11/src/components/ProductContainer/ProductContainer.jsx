import { Card, List, Image } from 'antd';

const ProductContainer = ({ products }) => {
    return (
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={products}
            renderItem={(item) => (
                <List.Item style={{ minHeight: 300 }}>
                    <Card
                        hoverable
                        style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                        cover={
                            <Image
                                alt="example"
                                src={item.image}
                                style={{ objectFit: 'cover' }}
                            />
                        }
                    >
                        <Card.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default ProductContainer;
