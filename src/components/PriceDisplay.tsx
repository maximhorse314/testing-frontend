import React from 'react';

interface PriceDisplayProps {
  latest: number;
  average: number;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ latest, average }) => {
  return (
    <div>
      <h3>Latest Price: {latest} EUR</h3>
      <h3>Average Price: {average} EUR</h3>
    </div>
  );
};

export default PriceDisplay;
