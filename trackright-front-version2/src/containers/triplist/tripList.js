import React , {useState}from "react";
import styles2 from "../consignment/consigncode/style2";
import { Table } from "antd";
import { Typography } from 'antd';
import { ExportOutlined  , FilterOutlined , FormOutlined                            } from '@ant-design/icons';
import { Button } from 'antd';
import { Avatar, Badge, Space } from 'antd';
import { Modal } from 'antd';
import TripCode from "./tripcode";
import DrawyerUseable from "../../Reusablecomponents/drawyeruseable";
import styles from "../consignment/createStyle";


const { Title } = Typography;


const TripList = () => {
  const [count, setCount] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tripdrawyer , setTripDrawyer] = useState(false)

  const [dataPopUp, setdataPopUp] = useState(true);

  const clickMe = () => {
    console.log('am clicked ')
    setTripDrawyer(true)
  }
  const handleModalCancel1 = () => {
    setTripDrawyer(false)
  }
  

  const handleClick1 = (record)=> {

    setdataPopUp(false)
  }

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleUpdate = () => {
    console.log('update button is clicked');
  };



  const data = [
    {
      key: 1,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 2,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 3,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 4,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 5,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 6,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 7,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 8,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'

    },
    {
      key: 9,
      ConsignCode: "292112",
      vehicleDriver: "KA12345432",
      Status: "completed",
      Consignor: "Test Client",
      Consignee: "Test Consignee",
      Transporter: "Test Transport",
      Carbon:'carbon'
    },
  ];

  const columns = [
    {
      title: "ConsignCode",
      dataIndex: "ConsignCode",
      key: "ConsignCode",
    },
    {
      title: "vehicleDriver",
      dataIndex: "vehicleDriver",
      key: "vehicleDriver",
    },
    {
      title: "Status",  // Fix here
      dataIndex: "Status",  // Fix here
      key: "Status",  // Fix here
    },
    {
      title: "Consignor",
      dataIndex: "Consignor",
      key: "Consignor",
    },
    {
      title: "Consignee",
      dataIndex: "Consignee",
      key: "Consignee",
    },
    {
      title: "Transporter",
      dataIndex: "Transporter",
      key: "Transporter",
    },
    {
      title: "carbon",
      key: "carbon",
      render: (text, record) => (
        <span>
          <FormOutlined
            onClick={(e) => {
              e.stopPropagation(); 
              clickMe() ; 
            }}
            style={{ marginRight: '10px', color: 'rgb(228,164,0)' }}
          />  
          {record.Transporter}
        </span>
      ),
      
    },
  ];
  

  return (
   
<>{dataPopUp ? ( <>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <Title level={4} style={{ margin: 0 }}>29 Trips</Title>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          type="primary"
          shape="circle"
          icon={<ExportOutlined />}
          style={{
            backgroundColor: 'rgb(235,247,237)',
            color: 'black',
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
          }}
        />

        <Button
          type="primary"
          shape="circle"
          style={{ backgroundColor: 'rgb(235,247,237)', height: '40px', width: '39px' }}
          onClick={showModal}
        >
          <Badge count={count} offset={[10, 0]} style={{ backgroundColor: 'red' }}>
            <FilterOutlined style={{ fontSize: '20px', color: '#000' }} />
          </Badge>
        </Button>

        <Modal
          title=""
          open={isModalOpen}
          onCancel={handleCancel}
          footer={[
            <Button key="update" type="primary" onClick={handleUpdate} style={styles2.updateButton}>
              Clear all
            </Button>,
          ]}
          width="80%"
          bodyStyle={styles2.modalBody}
        >
          <div style={styles2.header}>
            <Title level={4} style={{ margin: '0' }}>Filter 10</Title>
            <Title level={4} style={{ margin: '0', marginLeft: '-40px', color: 'green' }}>Results Found</Title>
          </div>
          <hr />
          <div    style={styles2.boxTrip}                    >

            <div style={styles2.container1}>
              <label htmlFor="trip1" style={styles2.label}>Trip code</label> <br />
              <select id="trip1" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip1" style={styles2.label}>Trip code</label> <br />
              <select id="trip1" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
          
            <div style={styles2.container1}>
              <label htmlFor="trip3" style={styles2.label}>Trip code</label> <br />
              <select id="trip3" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
           
            <div style={styles2.container1}>
              <label htmlFor="trip4" style={styles2.label}>Trip code</label> <br />
              <select id="trip4" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip5" style={styles2.label}>Trip code</label> <br />
              <select id="trip5" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip6" style={styles2.label}>Trip code</label> <br />
              <select id="trip6" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip7" style={styles2.label}>Trip code</label> <br />
              <select id="trip7" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip8" style={styles2.label}>Trip code</label> <br />
              <select id="trip8" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip9" style={styles2.label}>Trip code</label> <br />
              <select id="trip9" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
            <div style={styles2.container1}>
              <label htmlFor="trip10" style={styles2.label}>Trip code</label> <br />
              <select id="trip10" style={styles2.select}>
                <option value="chennai">Chennai</option>
                <option value="bangalore">Bangalore</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>
</div>
      
        </Modal>
      </div>
    </div>

  <div     style={styles2.newBox}   >

      <Table dataSource={data} columns={columns} 
      
      
      onRow={(record) => {
        return {
          onClick: (() => handleClick1(record) 
)}  }}
      
    
      />
    </div></>):(<> <TripCode/></>)
}

<Modal
       title= "Create New Consignment"
        visible={tripdrawyer}
         onCancel={handleModalCancel1}
        footer={null}
      width={1100}
      >
      <DrawyerUseable/>
       </Modal>



</> 
  )
};




















export default TripList;
