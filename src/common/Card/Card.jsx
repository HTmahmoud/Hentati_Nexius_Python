import React from 'react';
import { Card as AntCard } from 'antd';
import './Card.css';

const Card = ({ 
  children, 
  title, 
  className = '', 
  bordered = true,
  shadow = true,
  ...otherProps 
}) => {
  const cardClassName = `custom-card ${shadow ? 'card-with-shadow' : ''} ${className}`;
  
  return (
    <AntCard
      title={title}
      className={cardClassName}
      variant={bordered}
      {...otherProps}
    >
      {children}
    </AntCard>
  );
};

export default Card;