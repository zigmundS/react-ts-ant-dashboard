import React, { PureComponent } from 'react';
import {Typography, Space} from 'antd';

const {Text, Link} = Typography;

interface OwnProps {}

type Props = OwnProps;

class TypeCmponent extends PureComponent<Props> {
  render() {
    return (
        <>
            <Space direction="vertical">
                <p>
                    <Text strong>OS</Text> <Text type="secondary">Windows</Text>
                </p>
                <p>
                    <Text strong>Местоположение</Text> <Text type="secondary">-</Text>
                </p>
                <p>
                    <Text strong>MAC-address</Text> <Text type="secondary">f8:ff:c2:74:c5:d8</Text>
                </p>
                <p>
                    <Text strong>AD</Text> <Text type="secondary">-</Text>
                </p>
            </Space>
        </>
    );
  }
}

export default TypeCmponent;
