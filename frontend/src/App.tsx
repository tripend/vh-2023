import React from 'react';
import { Input, Button, Row, Col, Typography, Divider, Layout, Menu } from 'antd';
import { InfoCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import blackBg from './blackbg.png';

const { Title, Text, Paragraph } = Typography;
const { Header, Content, Footer } = Layout;

const HomePage = () => (
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
      <Col span={12}>
        <Button type="dashed" block style={{ marginBottom: "20px" }}>
          About us
        </Button>
        <Button type="link" block style={{ color: "#1890ff" }}>
          Donate
        </Button>
      </Col>
    </Row>
  </Content>
);

const AboutPage = () => (
  <Content style={{ padding: '50px' }}>
    <Title level={2}>About Us</Title>
    <Paragraph>
      We are a passionate group of students from Vanderbilt University, on a mission to highlight the pressing need for greater disability inclusion within campuses across the United States. Our inspiration came from a Johns Hopkins study that assessed schools heavily funded by the NIH. This research honed in on publicly available data regarding the information colleges make available and the resources they list. We were appalled by the findings, which revealed that a staggering 60% of the 50 universities received a D or F grade on an A-F scale.
    </Paragraph>
    <Paragraph>
      Although the findings were upsetting on their own, we set out to include the student perspective into the ranking process, giving rise to the concept of Student Inclusivity Initiative. Our primary objective is to cultivate a community where disabled students' stories are shared, making it increasingly challenging for institutions to hide non-inclusive policies behind supportive language. Our overarching goals include amplifying the voices of students, alerting Student Access offices to pressing accessibility concerns, and, hopefully, influencing other university ranking systems (like US News) to incorporate accessibility as a key factor in their future lists.
    </Paragraph>
    <Paragraph>
      We are so excited you checked out our page and take interest in changing the landscape of universal accessibility in higher education. Together, we can foster a more inclusive and supportive academic environment for all.
    </Paragraph>
  </Content>
);

const HowItWorksPage = () => (
  <Content style={{ padding: '50px' }}>
    <Title level={2}>How It Works</Title>
    <Paragraph>
      Using eight categories (minimal physical barriers, transportation, dietary considerations, class accommodations, campus resources, professors and staff, student health, and the accessibility of the surrounding city), we have people of the disabled community rate their experiences with their own college on a scale from 0-5 with 5 being the best. Using these ratings, we then average it to have rankings for each university. We also show the NIH funding that each of the universities have to show how much money they have to use, and how little they are doing with that money.
    </Paragraph>
  </Content>
);

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', backgroundImage: `url(${blackBg})`, backgroundSize: 'cover' }}>
        <Header style={{ padding: '0 50px' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="how">
              <Link to="/how-it-works">How it works</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
        </Routes>

        <Footer style={{ textAlign: 'center' }}>
          <Text>©2023 Student Inclusivity Initiative</Text>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
