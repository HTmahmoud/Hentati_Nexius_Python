import React from 'react';
import { Typography, Tag } from 'antd';
import './RateDisplay.css';

const { Text } = Typography;

const RateDisplay = ({ 
  exchangeRate, 
  fixedRate, 
  isFixedRateActive,
  className = '' 
}) => {
  return (
    <div className={`rate-display ${className}`}>
      <div className="rate-info">
        <Text className="rate-label">Current Exchange Rate: </Text>
        <Text strong className="rate-value">
          1 EUR = {exchangeRate.toFixed(4)} USD
        </Text>
      </div>
      
      {isFixedRateActive && (
        <div className="fixed-rate-info">
          <Tag color="green" className="fixed-rate-tag">
            Using Fixed Rate: {fixedRate.toFixed(4)}
          </Tag>
        </div>
      )}
    </div>
  );
};

export default RateDisplay;