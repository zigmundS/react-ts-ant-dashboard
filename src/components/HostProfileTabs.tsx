import React, {PureComponent} from 'react';
import {Tabs, Badge} from 'antd';

const {TabPane} = Tabs;

class HostProfileTabs extends PureComponent {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" size="large" style={{marginBottom: 32}}>
                    <TabPane tab="Общий" key="1">
                        Content of tab 1
                    </TabPane>
                    <TabPane tab="Процессы" key="2">
                        Content of tab 2
                    </TabPane>
                    <TabPane tab={
                        <>
                            Сетевые взаимодействия
                            <Badge count={99} style={{marginLeft: 5}} />
                        </>
                    } key="3">

                        Content of tab 3
                    </TabPane>
                    <TabPane tab={
                        <>
                            Подключенные пользователи
                            <Badge count={5} style={{marginLeft: 5, backgroundColor: '#52c41a'}} />
                        </>
                    } key="4">
                        Content of tab 4
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default HostProfileTabs;
