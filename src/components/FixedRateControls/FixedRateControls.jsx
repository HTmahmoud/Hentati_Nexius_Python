import React, { useState } from 'react';
import { Typography, Input, Button, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const FixedRateControls = ({ onApplyFixedRate, onDisableFixedRate, isFixedRateActive }) => {
  const [tempFixedRate, setTempFixedRate] = useState('');

  const handleApplyFixedRate = () => {
    if (tempFixedRate && !isNaN(tempFixedRate)) {
      onApplyFixedRate(parseFloat(tempFixedRate));
      setTempFixedRate('');
    }
  };

  return (
    <div className="fixed-rate-controls">
      <Title level={4}>
        <SettingOutlined /> Fixed Rate Controls
      </Title>
      <Space>
        <Input
          placeholder="Enter fixed rate"
          value={tempFixedRate}
          onChange={(e) => setTempFixedRate(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={handleApplyFixedRate}>
          Apply Fixed Rate
        </Button>
        {isFixedRateActive && (
          <Button danger onClick={onDisableFixedRate}>
            Disable Fixed Rate
          </Button>
        )}
      </Space>
    </div>
  );
};

export default FixedRateControls;