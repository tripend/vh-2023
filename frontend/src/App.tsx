import React from 'react';
import { Input, Button, Row, Col, Typography, Divider, Card } from 'antd';
import { InfoCircleOutlined, SearchOutlined } from '@ant-design/icons';

const { Title } = Typography;

const App = () => {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Title Section */}
      <Row justify="center" style={{ marginBottom: "2rem" }}>
        <Title level={2}>College Accessibility Ratings</Title>
      </Row>
      
      <Divider />

      <Row justify="center" gutter={[0, 24]}>
        <Col span={12}>
          <Input.Search 
            prefix={<SearchOutlined className="site-form-item-icon" />}
            placeholder="Your school" 
            enterButton 
            size="large"
            style={{ marginBottom: "1rem" }}
          />
          <Button type="link" block style={{ marginBottom: "1rem" }}>
            I don't see my school
          </Button>
        </Col>
      </Row>

      <Divider />

      <Button type="dashed" block style={{ marginBottom: "1rem" }}>
            About us
      </Button>

      <Button type="link" block style={{ color: "#1890ff" }}>
        Donate
      </Button>
    </div>
  );
}

export default App;
