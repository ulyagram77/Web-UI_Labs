import { Table, Typography, Image } from 'antd';
import './List.css';

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        filters: [
            {
                text: 'less than 7 words',
                value: '',
            },
        ],
        onFilter: (value, item) => {
            const words = item.title.split(' ');
            return words.length < 7;
        },
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>,
    },
    {
        title: 'Url',
        dataIndex: 'url',
        key: 'url',
        render: (text) => (
            <Typography.Link href={text}>Open picture</Typography.Link>
        ),
    },
    {
        title: 'Thumbnail',
        dataIndex: 'thumbnailUrl',
        key: 'thumbnailUrl',
        render: (image) => (
            <Image
                src={image}
                alt="img"
            />
        ),
    },
];

const List = ({ data, rows }) => {
    const modifiedDataSource = data.map((item) => ({ ...item, key: item.id }));
    return (
        <Table
            dataSource={modifiedDataSource}
            columns={columns}
            pagination={{
                pageSize: rows,
            }}
        />
    );
};

export default List;
