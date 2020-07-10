import React, {PureComponent} from 'react';
import Title from "antd/lib/typography/Title";
import SecurityComponent from "./SecurityComponent";
import TypeCmponent from "./TypeCmponent";

interface OwnProps {
}

type Props = OwnProps;

class LeftColComponent extends PureComponent<Props> {
    render() {
        return (
            <>
                <Title level={4}>10.173.34.67 \ SBT-05765-5985</Title>
                <Title level={4}>Security Components</Title>
                <SecurityComponent/>
                <Title level={4}>Тип</Title>
                <TypeCmponent/>
            </>
        );
    }
}

export default LeftColComponent;
