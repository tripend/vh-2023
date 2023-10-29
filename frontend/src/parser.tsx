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
  key: string;
  index: number;
  data: UniversityData;
}

const convertOrgName = (orgName: string) => {
  return orgName.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};

const UniversityCard: React.FC<UniversityCardProps> = ({ key, index, data }) => (
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
    // Randomly pick 10 universities from the data
    const shuffled = jsonData.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 10);
    
    // Sort them by their funding in descending order
    selected = selected.sort((a, b) => parseFloat(b.FUNDING.replace(/,/g, '')) - parseFloat(a.FUNDING.replace(/,/g, '')));
  
    // Return them as an array of UniversityCard components
    return selected.map((university, index) => <UniversityCard key={university.ORGANIZATION} data={university} index={index} />);
  };