// src/RatingComponent.tsx

import React, { useState } from 'react';

interface RatingProps {
  category: string;
}

const RatingComponent: React.FC<RatingProps> = ({ category }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div>
      <label>{category}:</label>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(value)}
            style={{
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: (hover && value <= hover) || (rating && value <= rating) ? '#ffc107' : '#e4e5e9'
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingComponent;
