import React from 'react';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }: any) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Actions',
            render: (text: any, record: any) => {
                return (
                    <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
                        <Button>Delete</Button>
                    </Popconfirm>
                );
            },
        },
    ];
    return <Table dataSource={products} columns={columns} />;
};

export default ProductList;