import React from 'react';
import { Row, Col, Typography } from 'antd';
import { SwapOutlined } from '@ant-design/icons';
import './CurrencyConverter.css';

// Import des composants communs
import CurrencyInput from '../../common/CurrencyInput/CurrencyInput.jsx';
import DirectionSwitch from '../../common/DirectionSwitch/DirectionSwitch.jsx';

const { Title } = Typography;

const Converter = ({
  inputValue,
  convertedValue,
  isEuroToDollar,
  onInputChange,
  onDirectionChange,
  className = ''
}) => {
  return (
    <div className={`currency-converter ${className}`}>
      <Title level={4} className="converter-title">Convert Currency</Title>
      
      <Row gutter={16} align="middle" className="converter-controls">
        <Col xs={24} sm={10}>
          <CurrencyInput
            value={inputValue}
            onChange={onInputChange}
            currency={isEuroToDollar ? 'EUR' : 'USD'}
            label="Amount"
          />
        </Col>
        
        <Col xs={24} sm={4} className="switch-col">
          <DirectionSwitch
            checked={isEuroToDollar}
            onChange={onDirectionChange}
            checkedLabel="EUR → USD"
            unCheckedLabel="USD → EUR"
            icon={<SwapOutlined />}
          />
        </Col>
        
        <Col xs={24} sm={10}>
          <CurrencyInput
            value={convertedValue}
            currency={isEuroToDollar ? 'USD' : 'EUR'}
            label="Converted Amount"
            disabled={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Converter;