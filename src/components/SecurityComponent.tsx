import React, {PureComponent} from 'react';
import {Typography, Space} from 'antd';

const {Text, Link} = Typography;

interface OwnProps {
}

type Props = OwnProps;

class SecurityComponent extends PureComponent<Props> {
    render() {
        return (
            <>
                <Space direction="vertical">
                    <p>
                        <Text strong>Logs</Text> <Text type="secondary">No alerts</Text>
                    </p>
                    <p>
                        <Text strong>Netflow</Text> <Text type="secondary">No alerts</Text>
                    </p>
                    <p>
                        <Text strong>AVPO</Text> <Text type="danger">1 alerts</Text>
                    </p>
                    <p>
                        <Text strong>SCCM</Text> <Text type="secondary">No alerts</Text>
                    </p>
                    <p>
                        <Text strong>EDR</Text> <Text type="secondary">No alerts</Text>
                    </p>
                </Space>
            </>
        );
    }
}

export default SecurityComponent;
