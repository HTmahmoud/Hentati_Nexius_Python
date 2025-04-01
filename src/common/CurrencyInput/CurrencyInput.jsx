import React from 'react';
import { InputNumber, Typography, Space } from 'antd';
import './CurrencyInput.css';

const { Text } = Typography;


const CurrencyInput = ({ 
  value, 
  onChange, 
  currency, 
  label, 
  disabled = false, 
  min = 0, 
  precision = 2,
  size = 'large',
  className = ''
}) => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} className={`currency-input ${className}`}>
      {label && <Text className="currency-input-label">{label} ({currency})</Text>}
      <InputNumber
        value={value}
        onChange={onChange}
        className="currency-input-field"
        min={min}
        precision={precision}
        size={size}
        disabled={disabled}
        placeholder={`Entrez un montant en ${currency}`}
      />
    </Space>
  );
};

export default CurrencyInput;