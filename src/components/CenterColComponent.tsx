import React, {PureComponent} from 'react';
import Title from 'antd/lib/typography/Title';
import CollapseCenterComponent from "./CollapseCenterComponent";
import NetworkInteractionComponent from "./NetworkInteractionComponent";

interface OwnProps {
}

type Props = OwnProps;

class CenterColComponent extends PureComponent<Props> {
    render() {
        return (
            <>
                <Title level={4}>Подключенные пользователи (активные)</Title>
                <CollapseCenterComponent/>
                <Title level={4} style={{marginTop: 20}}>Сетевые взаимодействия (активные)</Title>
                <NetworkInteractionComponent/>
            </>
        );
    }
}

export default CenterColComponent;
