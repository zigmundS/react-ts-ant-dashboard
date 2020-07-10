import React, { PureComponent } from 'react';
import { Row, Col, Typography } from 'antd';
import HostProfileTabs from "./HostProfileTabs";
import LeftColComponent from "./LeftColComponent";
import CenterColComponent from "./CenterColComponent";
import RightColComponent from "./RightColComponent";

const { Title } = Typography;

interface OwnProps {}

type Props = OwnProps;

class HostProfile extends PureComponent<Props> {
  render() {
    return (
      <>
          <Title level={2}>Профиль хоста SBT-05765-5985</Title>
          <HostProfileTabs />
          <Row>
              <Col span={6}><LeftColComponent /></Col>
              <Col span={10}><CenterColComponent /></Col>
              <Col span={8} style={{paddingLeft: 20}}><RightColComponent /></Col>
          </Row>
      </>
    );
  }
}

export default HostProfile;
