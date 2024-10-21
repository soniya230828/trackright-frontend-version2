import React from 'react';
import { Table, Button } from 'antd';
import { CloseCircleOutlined, MessageOutlined } from '@ant-design/icons';
import styles1 from './style1';  // Import the styles as JavaScript objects

const Kpis = () => {
  const columns = [
    {
      title: 'KPI Name',
      dataIndex: 'KPIname',
      key: 'KPIname',
    },
    {
      title: 'Date & Time',
      dataIndex: 'Date&Time',
      key: 'Date&Time',
    },
    {
      title: 'Target Duration',
      dataIndex: 'Target Duration',
      key: 'Target Duration',
    },
    {
      title: 'Actual Duration',
      dataIndex: 'Actual Duration',
      key: 'Actual Duration',
    },
    {
      title: 'Difference',
      dataIndex: 'Difference',
      key: 'Difference',
    },
    {
      title: 'Status',
      key: 'Status',
      dataIndex: 'Status',
      render: (_, record, index) => (
        <>
          {index < 2 && (
            <CloseCircleOutlined style={{ color: 'red', fontSize: '16px' }} />
          )}{' '}
          Unresolved
        </>
      ),
    },
    {
      title: 'Resolved By',
      dataIndex: 'Resolved by',
      key: 'Resolved by',
    },
    {
      title: 'Message',
      key: 'Message',
      render: (_, record, index) => (
        <div
          style={styles1.messageColumn}
          onMouseEnter={(e) => {
            e.currentTarget.querySelector('button').style.visibility = 'visible';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.querySelector('button').style.visibility = 'hidden';
          }}
        >
          {/* Resolve button is hidden until hover */}
          <Button
            type="primary"
            style={styles1.resolveButton}
            onClick={() => resolveIssue(record.key)}
          >
            Resolve
          </Button>
          {/* Show Message Icon for first 2 rows */}
          {index < 2 && (
            <MessageOutlined
              style={{ fontSize: '16px', color: 'gray', marginLeft: '10px' }}
            />
          )}
        </div>
      ),
    },
  ];

  // Data for the table
  const data = [
    {
      key: '1',
      KPIname: 'custfiled KPI',
      'Date&Time': '20th August 2024 07:10 Am',
      'Target Duration': '7hrs',
      'Actual Duration': '20hrs',
      Difference: '1hr 20 mints',
      Status: 'Unresolved',
      'Resolved by': '-/-',
      Message: '',
    },
    {
      key: '2',
      KPIname: 'custfiled KPI',
      'Date&Time': '20th August 2024 07:10 Am',
      'Target Duration': '7hrs',
      'Actual Duration': '20hrs',
      Difference: '1hr 20 mints',
      Status: 'Unresolved',
      'Resolved by': '-/-',
      Message: '',
    },
    {
      key: '3',
      KPIname: 'custfiled KPI',
      'Date&Time': '20th August 2024 07:10 Am',
      'Target Duration': '7hrs',
      'Actual Duration': '20hrs',
      Difference: '1hr 20 mints',
      Status: 'Unresolved',
      'Resolved by': '-/-',
      Message: '',
    },
    {
      key: '4',
      KPIname: 'custfiled KPI',
      'Date&Time': '20th August 2024 07:10 Am',
      'Target Duration': '7hrs',
      'Actual Duration': '20hrs',
      Difference: '1hr 20 mints',
      Status: 'Unresolved',
      'Resolved by': '-/-',
      Message: '',
    },
  ];

  // Function to handle resolve action
  const resolveIssue = (key) => {
    console.log(`Resolving issue for key: ${key}`);
  };

  return (
    <div>
      <Table columns={columns} style={styles1.table} dataSource={data} />
    </div>
  );
};

export default Kpis;























