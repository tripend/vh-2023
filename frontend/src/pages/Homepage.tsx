// src/Homepage.tsx

import React from 'react';
import { Layout, Row, Col, Input, Button, Typography, Divider } from 'antd';
import { processUniversities } from '../parser';
import jsonData from '../data/data.json';

const { Content } = Layout;
const { Title } = Typography;

const Homepage: React.FC = () => (
  <Content style={{ padding: '50px', flex: '1 1 auto' }}>
    <Row justify="center" style={{ marginBottom: "50px" }}>
      <Title level={2}>College Accessibility Ratings</Title>
    </Row>
    
    <Divider />

    <Row justify="center" gutter={[0, 24]}>
      <Col span={12}>
        <Input.Search 
          placeholder="Your school"  
          size="large"
          style={{ marginBottom: "20px" }}
        />
        <Button type="link" block style={{ marginBottom: "20px" }}>
          I don't see my school
        </Button>
      </Col>
    </Row>

    <Divider />

    <Row justify="center" gutter={[0, 24]}>
      <Col span={14}>
        {processUniversities(jsonData)}
      </Col>
    </Row>

    <Divider />

    <Row justify="center" gutter={[0, 24]}>
      <Col span={12}>
        <Button type="link" block style={{ color: "#1890ff" }}>
          Donate
        </Button>
      </Col>
    </Row>
  </Content>
);

export default Homepage;
