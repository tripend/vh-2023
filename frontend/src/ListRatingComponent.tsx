// src/ListRatingComponent.tsx

import React from 'react';

interface ListRatingProps {
    category: string;
    funding: string;
  }

// TODO: change this function if you want to change the rating system
function calculateFundingRating(funding: string): number {
    const fundingAmount = parseInt(funding.replace(/\D/g, ''), 10);
    if (fundingAmount < 200000) return 1;
    if (fundingAmount < 500000) return 2;
    if (fundingAmount < 1000000) return 3;
    if (fundingAmount < 2000000) return 4;
    return 5;
  }

const ListRatingComponent: React.FC<ListRatingProps> = ({ category, funding }) => {
  const rating = calculateFundingRating(funding);
  return (
    <div>
      <label>{category}:</label>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: value <= rating ? '#ffc107' : '#e4e5e9',
            }}
          >
            ★
          </span>
        );
      })}
      <span style={{ fontSize: '1rem', marginLeft: '10px' }}>({rating}/5)</span>
    </div>
  );
};

export default ListRatingComponent;
