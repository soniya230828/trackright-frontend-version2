import React from "react";
import { Button, Space, version, Table, Typography, Modal } from "antd";
import {
  ExportOutlined,
  ImportOutlined,
  SortAscendingOutlined,
  FilterOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import styles from "./style.js";
import Create from "./create";
import { useState } from "react";
 import ConsignCode  from "./consigncode/consigncode.js";

const Consignmentt = () => {
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isRowModalVisible, setIsRowModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);
const [isPopUpOpen , setIsPopUpOpen] = useState(true)

  // Close Create modal
const handleCreateModalCancel = () => {
  setIsCreateModalVisible(false);
};
 // Show create modal
 const showCreateModal = () => {
  setIsCreateModalVisible(true);
};


  const showRowModal = (record) => {
    setModalData(record);
    setIsRowModalVisible(true);
  };

 
  // Close ConsignCode modal
  const handleRowModalCancel = () => {
    setModalData(null);
    setIsRowModalVisible(false);
  };

  
  const handleRowClick = (record) => {
    showRowModal(record);
  
    setIsPopUpOpen(false); 
  };
  const goBackToConsignment = () => {
    setIsPopUpOpen(true);
  };





  const data = [
    {
      key: 1,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",
      


    },
    {
      key: 2,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",

    },
    {
      key: 3,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",


    },
    {
      key: 4,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",
     
    },
    {
      key: 5,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",

    },
    {
      key: 6,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",

    },
    {
      key: 7,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Event: "Finished",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Location: "chennai , madurai , pudukottai",
      Transport: "Test Transport",
    },
  ];
  const columns = [
    {
      title: "Consign Code",
      dataIndex: "ConsignCode",
      key: "consignCode", 
      
    },
    {
      title: "Vehicle Driver",
      dataIndex: "vehicleDriver",
      key: "vehicleDriver",
    },
    {
      title: "Event",
      dataIndex: "Event",
      key: "event",
    },
    {
      title: "Consignor",
      dataIndex: "Consignor",
      key: "consignor",
    },
    {
      title: "Consignee",
      dataIndex: "Consignee",
      key: "consignee",
    },
    {
      title: "Location",
      dataIndex: "Location",
      key: "location",
    },
    {
      title: "Transport",
      dataIndex: "Transport",
      key: "transport",
    },{
      title: "",
      dataIndex: "Transport",
      key: "transport",
    }
  ];

    
  return (
    <>
     
    { isPopUpOpen ? (<> <div style={{ padding: "25px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Space>
            <Button style={styles.customButton}>Assigned</Button>
            <Button style={styles.customButton}>UnAssigned</Button>
          </Space>

          <Space>
            <Button
              style={styles.customIcon1}
              icon={<ExportOutlined style={styles.customIcon} />}
            />
            <Button
              style={styles.customIcon1}
              icon={<ImportOutlined style={styles.customIcon} />}
            />
            <Button
              style={styles.customIcon1}
              icon={<SortAscendingOutlined style={styles.customIcon} />}
            />
            <Button
              style={styles.customIcon1}
              icon={<FilterOutlined style={styles.customIcon} />}
            />
            <Button
              style={
                isHovered
                  ? styles.customIconBtn2Hover
                  : styles.customIconBtn2Base
              }
              icon={<PlusOutlined />}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={showCreateModal}
            >
              {" "}
              Create
            </Button>
          </Space>
        </div>
      </div>

      <Typography.Title level={2} style={{ marginBottom: "20px" }}>
        29 Consingments
      </Typography.Title>

      <div>
        <header className="app-header">
          <Table
            dataSource={data}
            columns={columns}
            onRow={(record) => {
              return {
                onClick: (() => handleRowClick(record) 
  )};
            }}
          />
        </header>
      </div></>) :(<><ConsignCode     record={modalData}    goBack={goBackToConsignment}                  /></>) }



       <Modal
       title= "Create New Consignment"
        visible={isCreateModalVisible}
        onCancel={handleCreateModalCancel}
        footer={null}
      width={1100}
      >
      <Create/>
       </Modal>
    </>
  );
};

export default Consignmentt;
