import React, {PureComponent} from 'react';
import {Collapse} from 'antd';
import TableCenterComponent from "./TableCenterComponent";

const {Panel} = Collapse;

function callback(key: string | string[]) {
    console.log(key);
}

interface OwnProps {
}

type Props = OwnProps;

class CollapseCenterComponent extends PureComponent<Props> {
    render() {
        return (
            <Collapse defaultActiveKey={['1']} onChange={callback} accordion>
                <Panel header="Test: IP 10.465.43.22 (12)" key="1">
                    <p><TableCenterComponent/></p>
                </Panel>
                <Panel header="Scan: IP 10.465.43.21 (1)" key="2">
                    <p><TableCenterComponent/></p>
                </Panel>
                <Panel header="root: IP 10.465.43.20 (5)" key="3">
                    <p><TableCenterComponent/></p>
                </Panel>
            </Collapse>
        );
    }
}

export default CollapseCenterComponent;
