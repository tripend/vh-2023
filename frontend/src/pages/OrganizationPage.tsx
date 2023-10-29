import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Layout, Descriptions, Card, Row, Col } from 'antd';
import jsonData from '../data/data.json';
import { convertOrgName } from '../parser';
import ListRatingComponent from '../ListRatingComponent';

const { Content } = Layout;
const { Title } = Typography;

const OrganizationPage: React.FC = () => {
  const { orgName } = useParams();
  
  // Find the organization data based on orgName
  const organizationData = jsonData.find(org => convertOrgName(org.ORGANIZATION) === orgName);
  
  return (
    <Content style={{ padding: '50px' }}>
      {organizationData ? (
        <>
          <Title level={2}>{organizationData.ORGANIZATION}</Title>
          <Descriptions bordered>
            <Descriptions.Item label="Awards">{organizationData.AWARDS}</Descriptions.Item>
            <Descriptions.Item label="Funding">{organizationData.FUNDING}</Descriptions.Item>
            <Descriptions.Item label="City">{convertOrgName(organizationData.CITY)}</Descriptions.Item>
            <Descriptions.Item label="State">{organizationData.STATE}</Descriptions.Item>
            <Descriptions.Item label="Country">{convertOrgName(organizationData.COUNTRY)}</Descriptions.Item>
          </Descriptions>

          <Card style={{ marginTop: '20px' }}>
            <p>Leave a review! (google form link here)</p>
          </Card>

          <Card style={{ marginTop: '20px' }}>
            <Row>
              <Col span={12}>
                <Title level={3}>Reviews</Title>
                <ListRatingComponent category='Overall Rating' funding={organizationData.FUNDING} />

                <Card style={{ marginTop: '20px' }}>
                  <Title level={4}>Review 1</Title>
                  <ListRatingComponent category='Rating' funding={organizationData.FUNDING} />
                  <p>Review 1 text</p>
                </Card>
                <Card style={{ marginTop: '20px' }}>
                  <Title level={4}>Review 2</Title>
                  <ListRatingComponent category='Rating' funding={organizationData.FUNDING} />
                  <p>Review 2 text</p>
                </Card>
                <Card style={{ marginTop: '20px' }}>
                  <Title level={4}>Review 3</Title>
                  <ListRatingComponent category='Rating' funding={organizationData.FUNDING} />
                  <p>Review 3 text</p>
                </Card>
              </Col>
            </Row>
          </Card>
        </>
      ) : (
        <Title level={2}>Organization not found</Title>
      )}
    </Content>
  );
};

export default OrganizationPage;
