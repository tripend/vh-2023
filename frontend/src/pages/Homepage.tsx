// src/Homepage.tsx

import React from 'react';
import { Layout, Row, Col, Input, Button, Typography, Divider, AutoComplete } from 'antd';
import { processUniversities } from '../parser';
import jsonData from '../data/data.json';
import { convertOrgName } from '../parser';
import { useNavigate } from 'react-router-dom';

const { Content } = Layout;
const { Title } = Typography;

const Homepage: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selectedOrganization, setSelectedOrganization] = React.useState('');
  const [options, setOptions] = React.useState<{ value: string }[]>([]);
  const navigate = useNavigate();

  const onSearch = (searchText: string) => {
    const filteredOptions = jsonData
      .filter(item => item.ORGANIZATION.toLowerCase().includes(searchText.toLowerCase()))
      .map(item => ({ value: convertOrgName(item.ORGANIZATION) }));
    setOptions(filteredOptions);
  };

  const onSelect = (value: string) => {
    setSelectedOrganization(value);
  };

  const onButtonClick = () => {
    if (selectedOrganization) {
      navigate(`/organization/${selectedOrganization}`);
    }
  };

  return (
    <Content style={{ padding: '50px', flex: '1 1 auto' }}>
      <Row justify="center" style={{ marginBottom: "50px" }}>
        <Title level={2}>College Accessibility Ratings</Title>
      </Row>
      
      <Divider />

      <Row justify="center" gutter={[0, 24]}>
        <Col span={12}>
          <AutoComplete
            options={options}
            style={{ width: '100%', marginBottom: "20px" }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="Your school"
          >
            <Input.Search size="large" onSearch={onButtonClick} />
          </AutoComplete>
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
};

export default Homepage;
