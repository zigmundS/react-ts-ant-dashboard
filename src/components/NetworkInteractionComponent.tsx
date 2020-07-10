import React, {PureComponent} from 'react';
import {Table} from 'antd';

const columns = [
    {
        title: 'Входящие',
        dataIndex: 'in',
    },
    {
        title: 'Исходящие',
        dataIndex: 'out',
    },
];
const data = [
    {
        key: '1',
        in: 'IP 10.465.87.28 Port 43',
        out: 'IP 10.465.87.27 Port 43',
    },
    {
        key: '2',
        in: 'IP 10.465.87.28 Port 43',
        out: 'IP 10.465.87.27 Port 43',
    },
    {
        key: '3',
        in: 'IP 10.465.87.28 Port 43',
        out: 'IP 10.465.87.27 Port 43',
    },
];

interface OwnProps {
}

type Props = OwnProps;

class NetworkInteractionComponent extends PureComponent<Props> {
    render() {
        return (
            <Table columns={columns} dataSource={data} size="small"/>
        );
    }
}

export default NetworkInteractionComponent;
