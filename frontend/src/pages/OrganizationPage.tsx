// src/pages/OrganizationPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Layout } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const OrganizationPage: React.FC = () => {
  const { orgName } = useParams();

  return (
    <Content style={{ padding: '50px' }}>
      <Title level={2}>{orgName}</Title>
      {/* Render organization-specific information here */}
    </Content>
  );
};

export default OrganizationPage;
