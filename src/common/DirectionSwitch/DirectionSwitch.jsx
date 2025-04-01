import React from 'react';
import { Switch, Space } from 'antd';
import './DirectionSwitch.css';

const DirectionSwitch = ({ 
  checked, 
  onChange, 
  checkedLabel, 
  unCheckedLabel, 
  icon,
  className = ''
}) => {
  return (
    <Space direction="vertical" align="center" className={`direction-switch ${className}`}>
      <Switch
        checkedChildren={checkedLabel}
        unCheckedChildren={unCheckedLabel}
        checked={checked}
        onChange={onChange}
        className="direction-switch-control"
      />
      {icon && <div className="direction-switch-icon">{icon}</div>}
    </Space>
  );
};

export default DirectionSwitch;