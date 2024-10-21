import React , {useState} from 'react'
import { Button, Table } from "antd";
import styles from '../style';
import { EditOutlined } from '@ant-design/icons';
import { Modal } from "antd";

const Event = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };



    const data = [
        {
          key: 1,
          Event: "Accepted",
          UpdatedOn: "24 August 2024",
          UpdatedBy: "Thomas",
          Remark: "---",
         icon: <Button icon={<EditOutlined />}     onClick={showModal}                                   />,
        },
        {
          key: 2,
          Event: "Accepted",
          UpdatedOn: "24 August 2024",
          UpdatedBy: "Thomas",
          Remark: "---",
        icon:null

        },
        {
          key: 3,
          Event: "Accepted",
          UpdatedOn: "24 August 2024",
          UpdatedBy: "Thomas",
          Remark: "---",
          icon:null


        },
        {
          key: 4,
          Event: "Accepted",
          UpdatedOn: "24 August 2024",
          UpdatedBy: "Thomas",
          Remark: "---",
          icon:null


        }
      ];
    
      const columns = [
        {
          key: 'Event',
          title: 'Event',
          dataIndex: 'Event'
        },
        {
          key: 'UpdatedOn',
          title: 'UpdatedOn',
          dataIndex: 'UpdatedOn'
        },
        {
          key: 'UpdatedBy',
          title: 'UpdatedBy',
          dataIndex: 'UpdatedBy'
        },
        {
          key: 'Remark',
          title: 'Remark',
          dataIndex: 'Remark'
        },
        {
          key: 'icon',
          title: 'icon',
          dataIndex: 'icon'
        },{
            key: '',
            title: '',
            dataIndex: '',
            render: (icons) => "" // Render the icon here
          }
      ];


  return (
    <div  style={styles.eventTable}>

<Table columns={columns} dataSource={data}                pagination={false}/>
<Modal
  title="Updating ODO Reading"
  open={isModalOpen}
  onOk={handleOk}
  onCancel={handleCancel}
  bodyStyle={{ height: '380px' }} 
  footer={null}
  
  
  >
  <hr />

  <div style={styles.ContainerEvent1}>
  <label>ODO Reading</label> <br />
  <input type="text" style={{ borderRadius: '25px', padding: '8px', border: '1px solid gray' , width:'60%' }} />
</div>

<div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 'auto', 
          padding: '20px 0 0', 
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '100%', 
        }}>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: '#f5f5f5',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                marginRight: '10px',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(232, 255, 236)';
                e.currentTarget.style.color = 'rgb(44, 150, 61)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
                e.currentTarget.style.color = 'black';
              }}
            >
              Cancel
            </button>
            <button
              onClick={handleOk}
              style={{
                backgroundColor: '#4caf50',
                border: '1px solid #4caf50',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '25px',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(44, 150, 61)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#4caf50';
                e.currentTarget.style.color = 'white';
              }}
            >
              Update
              </button>
        </div>
</Modal>



    </div>

  )
}

export default Event
























