import React, { PureComponent } from 'react';

import { Table } from 'antd';


const columns = [
    {
        title: 'Date Time',
        dataIndex: 'dataTime',
        sorter: {
            // @ts-ignore
            compare: (a, b) => a.dataTime - b.dataTime,
            multiple: 3,
        },
    },
    {
        title: 'Source IP',
        dataIndex: 'sourceIp',
        sorter: {
            // @ts-ignore
            compare: (a, b) => a.sourceIp - b.sourceIp,
            multiple: 2,
        },
    },
    {
        title: 'History',
        dataIndex: 'history',
        sorter: {
            // @ts-ignore
            compare: (a, b) => ('' + a.history).localeCompare(b.history),
            multiple: 1,
        },
    },
];

const data = [
    {
        key: '1',
        dataTime: '01.05.2020 14:34:12',
        sourceIp: '10.10.10.54',
        history: 'Вход в систему'
    },
    {
        key: '2',
        dataTime: '01.05.2020 14:34:12',
        sourceIp: '10.10.10.54',
        history: 'Команда #1'
    },
    {
        key: '3',
        dataTime: '01.05.2020 14:34:12',
        sourceIp: '10.10.10.54',
        history: 'Команда #2'
    },
    {
        key: '4',
        dataTime: '01.05.2020 14:34:12',
        sourceIp: '10.10.10.54',
        history: 'Команда #3'
    },
];
// @ts-ignore
function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

interface OwnProps {}

type Props = OwnProps;

class TableCenterComponent extends PureComponent<Props> {
  render() {
    return (
        <Table columns={columns} dataSource={data} onChange={onChange} />
    );
  }
}

export default TableCenterComponent;
