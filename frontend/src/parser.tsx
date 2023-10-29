// src/parser.tsx

import React from 'react';
import { Card, Divider, Row, Col } from 'antd';
import ListRatingComponent from './ListRatingComponent';

interface UniversityData {
  ORGANIZATION: string;
  AWARDS: number;
  FUNDING: string;
  CITY: string;
  STATE: string;
  COUNTRY: string;
}

interface UniversityCardProps {
  index: number;
  data: UniversityData;
}

export const convertOrgName = (orgName: string) => {
  return orgName.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};

const UniversityCard: React.FC<UniversityCardProps> = ({ index, data }) => (
  <Card title={convertOrgName(data.ORGANIZATION)} style={{ width: '100%', marginBottom: '20px' }}>
    <Row align="middle" gutter={16}>
      <Col span={2}>
        <p>{index + 1}</p>
      </Col>
      <Row>
        <Divider type="vertical" style={{ marginLeft: '-30px', height: '40px'}} />
      </Row>
      <Col span={4}>
        <p>State: {data.STATE}</p>
        <p>City: {convertOrgName(data.CITY)}</p>
      </Col>
      <Col span={4}>
        <p>Funding: {data.FUNDING}</p>
      </Col>
      <Col span={4}>
        <p>Awards: {data.AWARDS}</p>
      </Col>
      <Col span={5}>
      </Col>
      <Col span={4}>
        <ListRatingComponent category='Rating' funding={data.FUNDING} />
      </Col>
    </Row>
  </Card>
);

export const processUniversities = (jsonData: UniversityData[]) => {
  let selected = jsonData.slice(20, 30);
  
  // Sort them by their funding in descending order
  selected = selected.sort((a, b) => {
    const fundingA = parseFloat(a.FUNDING.replace(/[^0-9.]/g, ''));
    const fundingB = parseFloat(b.FUNDING.replace(/[^0-9.]/g, ''));
    return fundingB - fundingA;
  });

  // Return them as an array of UniversityCard components
  return selected.map((university, index) => (
    <UniversityCard key={university.ORGANIZATION} data={university} index={index} />
  ));
};
  
