import React from 'react';
import { Input, Button, Row, Col, Typography, Divider, Layout, Menu } from 'antd';
import { InfoCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import HomePage from './pages/Homepage'
import FeedbackPage from './pages/FeedbackPage'
import ReviewPage from './pages/ReviewPage'
import OrganizationPage from './pages/OrganizationPage'


const { Text } = Typography;
const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', backgroundSize: 'cover' }}>
        <Header style={{ padding: '0 50px' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/feed" element={<FeedbackPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/organization/:orgName" element={<OrganizationPage />} />
        </Routes>

        <Footer style={{ textAlign: 'center' }}>
          <Text>©2023 Student Inclusivity Initiative</Text>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
