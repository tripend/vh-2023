import React from 'react';
import { Row, Col } from 'antd';
import RatingInput from '../components/RatingInputProps';

const Review: React.FC = () => {
  return (
    <div>
      <h1>Rating Inputs</h1>
      <Row gutter={20}>
        <Col span={24}>
          <RatingInput label="Minimal Physical Barriers" />
        </Col>
        <Col span={24}>
          <RatingInput label="Transportation" />
        </Col>
        <Col span={24}>
          <RatingInput label="Dietary Considerations" />
        </Col>
        <Col span={24}>
          <RatingInput label="Class Accomodations" />
        </Col>
        <Col span={24}>
          <RatingInput label="Campus Resources" />
        </Col>
        <Col span={24}>
          <RatingInput label="Professors and Staff" />
        </Col>
        <Col span={24}>
          <RatingInput label="Student Health" />
        </Col>
        <Col span={24}>
          <RatingInput label="Surrounding City Accessability" />
        </Col>
      </Row>
    </div>
  );
};

export default Review;
