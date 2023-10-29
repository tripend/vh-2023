// src/HowItWorksPage.tsx

import React from 'react';
import { Layout, Typography } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HowItWorksPage: React.FC = () => (
  <Content style={{ padding: '50px' }}>
    <Title level={2}>How It Works</Title>
    <Paragraph>
      Using eight categories (minimal physical barriers, transportation, dietary considerations, class accommodations, campus resources, professors and staff, student health, and the accessibility of the surrounding city), we have people of the disabled community rate their experiences with their own college on a scale from 0-5 with 5 being the best. Using these ratings, we then average it to have rankings for each university. We also show the NIH funding that each of the universities have to show how much money they have to use, and how little they are doing with that money.
    </Paragraph>
  </Content>
);

export default HowItWorksPage;
