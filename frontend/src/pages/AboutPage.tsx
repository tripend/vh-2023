// AboutPage.tsx

import React from 'react';
import { Layout, Typography, Card, Space } from 'antd';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const AboutPage: React.FC = () => (
  <Content style={{ padding: '50px' }}>
    <Title level={2}>About Us</Title>
    <Card>
      <Paragraph style={{ fontSize: '18px' }}>
        We are a passionate group of students from Vanderbilt University, on a mission to highlight the pressing need for greater disability inclusion within campuses across the United States. Our inspiration came from a Johns Hopkins study that assessed schools heavily funded by the NIH. This research honed in on publicly available data regarding the information colleges make available and the resources they list. We were appalled by the findings, which revealed that a staggering 60% of the 50 universities received a D or F grade on an A-F scale.
      </Paragraph>
      <Paragraph style={{ fontSize: '18px' }}>
        Although the findings were upsetting on their own, we set out to include the student perspective into the ranking process, giving rise to the concept of Student Inclusivity Initiative. Our primary objective is to cultivate a community where disabled students' stories are shared, making it increasingly challenging for institutions to hide non-inclusive policies behind supportive language. Our overarching goals include amplifying the voices of students, alerting Student Access offices to pressing accessibility concerns, and, hopefully, influencing other university ranking systems (like US News) to incorporate accessibility as a key factor in their future lists.
      </Paragraph>
      <Paragraph style={{ fontSize: '18px' }}>
        We are so excited you checked out our page and take interest in changing the landscape of universal accessibility in higher education. Together, we can foster a more inclusive and supportive academic environment for all.
      </Paragraph>
    </Card>

    <Title level={2} style={{ marginTop: '50px' }}>How It Works</Title>
    <Card>
      <Paragraph style={{ fontSize: '18px' }}>
        Using eight categories (minimal physical barriers, transportation, dietary considerations, class accommodations, campus resources, professors and staff, student health, and the accessibility of the surrounding city), we have people of the disabled community rate their experiences with their own college on a scale from 0-5 with 5 being the best. Using these ratings, we then average it to have rankings for each university. We also show the NIH funding that each of the universities have to show how much money they have to use, and how little they are doing with that money.
      </Paragraph>
    </Card>
  </Content>
);

export default AboutPage;
