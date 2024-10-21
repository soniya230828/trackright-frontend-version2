import React, { useState } from "react";
import { Table, Button  , Modal} from "antd";
import { CopyOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import buttonStyle from "./buttonstyle";
import DrawyerUseable from "../../Reusablecomponents/drawyeruseable";
import styles from "../consignment/createStyle";


const ConsingmentPopup = () => {
  const [opendrawyer , setopendrawyer] = useState(false)


  const handleClick = () => {
    console.log('am clicked ')
    setopendrawyer( true)
  }
  const handleModalCancel = () => {
    console.log('am clicked ')
    setopendrawyer( false)
  }

    const dataSource = [
    
     
        {
          key:1,
          Consigncode : "122112 High",
          VehicleDriver : "KA123452 Tony Fernandes" ,
          Event : 'Finished ',
          Consignor : 'Test Client' ,
          Consignee : 'Chennai , Madurai ,Trichy',
          Location : 'Test' ,
        
        
        }, 
            
        {
          key:2,
          Consigncode : "122112 High",
          VehicleDriver : "KA123452 Tony Fernandes" ,
          Event : 'Finished ',
          Consignor : 'Test Client' ,
          Consignee : 'Chennai , Madurai ,Trichy',
          Location : 'Test' ,
        
        
        }, 
            
        {
          key:3,
          Consigncode : "122112 High",
          VehicleDriver : "KA123452 Tony Fernandes" ,
          Event : 'Finished ',
          Consignor : 'Test Client' ,
          Consignee : 'Chennai , Madurai ,Trichy',
          Location : 'Test' ,
        
        
        }, 
            
        {
          key:4,
          Consigncode : "122112 High",
          VehicleDriver : "KA123452 Tony Fernandes" ,
          Event : 'Finished ',
          Consignor : 'Test Client' ,
          Consignee : 'Chennai , Madurai ,Trichy',
          Location : 'Test' ,
        
        
        }, 
        
        
        
        
        
        
        
        
          ];
          
          const columns = [{
            title: 'Consigncode',
              dataIndex: 'Consigncode',
              key: 'Consigncode',
           
              render: (text) => {
               
                const [firstPart, secondPart] = text.split(' ');
        
                return (
                  <>
                    {firstPart}
                    <span
                      style={{
                        display: 'inline-block',
                        width: '8px',  
                        height: '8px',  
                        borderRadius: '50%',  
                        backgroundColor: 'red',  
                        margin: '0 8px', 
                      }}
                    ></span>
                    {secondPart}
                  </>
                );
              },
            },,
            {
              title: 'VehicleDriver',
              dataIndex: 'VehicleDriver',
              key: 'VehicleDriver',
            },
            {
              title: 'Event',
              dataIndex: 'Event',
              key: 'Event',
            },
            
            {
              title: 'Consignor',
              dataIndex: 'Consignor',
              key: 'Consignor',
            },
            {
              title: 'Consignee',
              dataIndex: 'Consignee',
              key: 'Consignee',
            },
            
            ,
            {
                title: 'Location',
                dataIndex: 'Location',
                key: 'Location',
                render: () => (
                  <div style={buttonStyle.containEdit1}>
                    <Button style={buttonStyle.containEdit}>
                      <CopyOutlined style={buttonStyle.copy} />
                    </Button>
                    <Button style={buttonStyle.containEdit}>
                      <EditOutlined style={buttonStyle.edit}     onClick = {handleClick}                  />
                  
                      </Button>
                    <Button style={buttonStyle.containEdit}>
                      <DeleteOutlined style={buttonStyle.delete} />
                    </Button>
               

                  </div>
                 
                ),
              },
        
        
        
        
          ];
    
  return ( 
  <>
    <div    style={{ marginTop: '20px' ,width: '100%' }}      scroll={{ x: 1000 }}                      >
    <Table                  dataSource={dataSource} columns={columns} />
    </div>
  
  <Modal
       title= "Create New Consignment"
        visible={opendrawyer}
         onCancel={handleModalCancel}
        footer={null}
      width={1100}
      >
      <DrawyerUseable/>
       </Modal>
    </>
  )
}

export default ConsingmentPopup