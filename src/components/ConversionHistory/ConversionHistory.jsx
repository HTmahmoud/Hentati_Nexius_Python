import React from 'react';
import { Typography, Table, Tag } from 'antd';

const { Title } = Typography;

const ConversionHistory = ({ history }) => {
  // Définir les colonnes du tableau
  const columns = [
    {
      title: 'Time',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Real Rate',
      dataIndex: 'realRate',
      key: 'realRate',
      render: (rate) => rate.toFixed(4)
    },
    {
      title: 'Used Rate',
      dataIndex: 'usedRate',
      key: 'usedRate',
      render: (rate, record) => (
        <span>
          {rate.toFixed(4)}
          {record.realRate !== record.usedRate && (
            <Tag color="blue" style={{ marginLeft: 5 }}>Fixed</Tag>
          )}
        </span>
      )
    },
    {
      title: 'Input',
      key: 'input',
      render: (_, record) => `${record.inputValue} ${record.inputCurrency}`
    },
    {
      title: 'Output',
      key: 'output',
      render: (_, record) => `${record.outputValue} ${record.outputCurrency}`
    }
  ];

  return (
    <div className="history-table">
      <Title level={4}>Conversion History</Title>
      <Table
        columns={columns}
        dataSource={history}
        pagination={false}
        size="small"
      />
    </div>
  );
};

export default ConversionHistory;