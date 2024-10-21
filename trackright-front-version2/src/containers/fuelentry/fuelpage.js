import React , {useState} from 'react'
import Fuelentry from './style';
import { Button, Space, Badge , Typography, Table } from "antd";
import { ExportOutlined, ImportOutlined, SortAscendingOutlined, FilterOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import DrawyerUseable from '../../Reusablecomponents/drawyeruseable';
import FuelDetails from './fueldetails';
const { Title } = Typography;

const FuelPage = ({newValue}) => {
  console.log(newValue)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkedState, setCheckedState] = useState({
        all: false,
        consignor: false,
        consignee: false,
        transporter: false,
        location: false,
        orderNo: false,
      })
    
      const handleCheckboxChange = (checkbox) => {
        setCheckedState((prevState)  =>      ({
          ...prevState, 
          [checkbox] : !prevState[checkbox], 
        }))
      }


      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        }
      ];
      
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          email: 'john.brown@example.com',
          phone: '123-456-7890',
          role: 'Manager'
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          email: 'jim.green@example.com',
          phone: '987-654-3210',
          role: 'Developer'
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 28,
          address: 'Sidney No. 1 Lake Park',
          email: 'joe.black@example.com',
          phone: '555-555-5555',
          role: 'Designer'
        },
        {
          key: '4',
          name: 'Sara White',
          age: 35,
          address: 'Tokyo No. 1 Lake Park',
          email: 'sara.white@example.com',
          phone: '777-777-7777',
          role: 'Marketing'
        },
        {
          key: '5',
          name: 'Michael Blue',
          age: 30,
          address: 'Berlin No. 1 Lake Park',
          email: 'michael.blue@example.com',
          phone: '444-444-4444',
          role: 'HR'
        },
        {
          key: '6',
          name: 'Anna Yellow',
          age: 27,
          address: 'Paris No. 1 Lake Park',
          email: 'anna.yellow@example.com',
          phone: '333-333-3333',
          role: 'Sales'
        }
        , {
          key: '7',
          name: 'Anna Yellow',
          age: 27,
          address: 'Paris No. 1 Lake Park',
          email: 'anna.yellow@example.com',
          phone: '333-333-3333',
          role: 'Sales'
        }, {
          key: '6',
          name: 'Anna Yellow',
          age: 27,
          address: 'Paris No. 1 Lake Park',
          email: 'anna.yellow@example.com',
          phone: '333-333-3333',
          role: 'Sales'
        },{
          key: '7',
          name: 'Anna Yellow',
          age: 27,
          address: 'Paris No. 1 Lake Park',
          email: 'anna.yellow@example.com',
          phone: '333-333-3333',
          role: 'Sales'
        },
        

      ];
      

      const [isModalOpenone, setIsModalOpenone] = useState(false);
      const showModalone = () => {
        setIsModalOpenone(true);
      };
      const handleOk = () => {
        setIsModalOpenone(false);
      };
      const handleCancel = () => {
        setIsModalOpenone(false);
      };
  
const [drawyer , setDrawyer] = useState(false)
const createPopupClick = () => {
  setDrawyer(true)
}
const PopupClickclose = () => {
  setDrawyer(false)
}

const[isfuelpageOpen ,setisfuelpageOpen ] = useState(true)
const [modalData, setModalData] = useState(null);

const handleRowClick = (record) => {
  console.log('am clickeee ! ')
  setisfuelpageOpen(false)
  setModalData(record); 

}
const goBackToConsignment = () => {
  setisfuelpageOpen(true);
};






  return (
    <>
    <div  style={Fuelentry.Problem}                                                  >
    <div  style={Fuelentry.Prob1}                                                  >

      { isfuelpageOpen ?  (<><div style={Fuelentry.container}>
    <div style={Fuelentry.textSection}>
      <Title level={3}>29 Fuel Entry</Title>
    </div>

    <div style={Fuelentry.btn}>
      <Button style={Fuelentry.roundedBtn}>
        <ExportOutlined />
      </Button>
      <Button style={Fuelentry.roundedBtn}>
        <ImportOutlined />
      </Button>
      <Button style={Fuelentry.roundedBtn}  onClick={showModal}          >
        <SortAscendingOutlined />
      </Button>
      <Modal
          title=""
          visible={isModalOpen}
          onCancel={handleCloseModal} // This closes the modal when clicking outside
          footer={null} // Removes footer buttons
          closable={false} // Removes close icon
        >
         <div>
            <input type="checkbox"
              checked={checkedState.all}
              style={{ accentColor: checkedState.all ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange("all")}
            />
            <label>All</label><br />
            <hr/>

            <input type="checkbox"
              checked={checkedState.consignor}
              style={{ accentColor: checkedState.consignor ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange("consignor")}
            />
            <label>Consignor</label><br />

            <input type="checkbox"
              checked={checkedState.consignee}
              style={{ accentColor: checkedState.consignee ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange('consignee')}
            />
            <label>Consignee</label><br />

            <input type="checkbox"
              checked={checkedState.transporter}
              style={{ accentColor: checkedState.transporter ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange('transporter')}
            />
            <label>Transporter</label><br />

            <input type="checkbox"
              checked={checkedState.location}
              style={{ accentColor: checkedState.location ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange('location')}
            />
            <label>Location</label><br />

            <input type="checkbox"
              checked={checkedState.orderNo}
              style={{ accentColor: checkedState.orderNo ? 'green' : 'black' }}
              onChange={() => handleCheckboxChange('orderNo')}
            />
            <label>Order no</label><br />
          </div>
        </Modal>
      
      <Button style={Fuelentry.roundedBtn}     onClick={showModalone}                                    >
        <Space size="small">
          <Badge count={5} size="small">
            <FilterOutlined />
          </Badge>
        </Space>
      </Button>

      <Modal title=""    width='1100px'open={isModalOpenone} 
      footer={<Button style={Fuelentry.createbtn}      >Create
        </Button>}    onCancel={handleCancel}                                          >
     <div>
<div>      <Title level={4}>Filter (5)</Title>
<hr/>
<div     style = {Fuelentry.filterPopup}                 >
<div style={Fuelentry.inputContainer}>
  <label>Vehicle</label>
  <select   style={Fuelentry.borderstyle}                   >
  <option value="">--Select an option--</option> 
  <option value="ka2123">ka2123</option>
    <option value="ka2123" selected>ka2123</option>
    <option value="ka2123">ka2123</option>
    </select>
    </div>
    <div style={Fuelentry.inputContainer}>

    <label>Driver</label>
    <select  style={Fuelentry.borderstyle}                    >
  <option value="">--Select an option--</option> 
  <option value="ka2123">ka2123</option>
    <option value="ka2123" selected>ka2123</option>
    <option value="ka2123">ka2123</option>
    </select>    </div>
    <div style={Fuelentry.inputContainer}>

    <label>Duration</label>
    <select   style={Fuelentry.borderstyle}                   >
  <option value="">--Select an option--</option> 
  <option value="ka2123">ka2123</option>
    <option value="ka2123" selected>ka2123</option>
    <option value="ka2123">ka2123</option>
    </select>  </div>
    <div style={Fuelentry.inputContainer}>

    <label>Date of range </label>
    <select  style={Fuelentry.borderstyle}                          >
  <option value="">--Select an option--</option> 
  <option value="ka2123">ka2123</option>
    <option value="ka2123" selected>ka2123</option>
    <option value="ka2123">ka2123</option>
    </select> </div>
    <div style={Fuelentry.inputContainer}>

    <label>Vehicle</label>
    <select     style={Fuelentry.borderstyle}                                  >
  <option  value="">--Select an option--</option> 
  <option value="ka2123">ka2123</option>
    <option value="ka2123" selected>ka2123</option>
    <option value="ka2123">ka2123</option>
    </select></div>
    
  </div>
  </div>

       </div>
      </Modal>





      <Button  style={Fuelentry.createbtn}     onClick={createPopupClick}                   >+ Create</Button>
      <Modal
       title= "Create New Consignment"
        visible={drawyer}
        onCancel={PopupClickclose}
        footer={null}
      width={1100}
      >
      <DrawyerUseable/>
       </Modal>
    </div>
  </div>                           
  
  <div>    <Table columns={columns} dataSource={data} pagination={false}   
           onRow={(record) => {
            return {
              onClick: (() => handleRowClick(record) 
)};
          }}        />

    </div></>) : (<><FuelDetails  record={modalData}  goBack={goBackToConsignment}   /></>)}
  

</div>
    </div>





{/* <ul>
  {
    NewValue.map((value, index ,ele ) => (
<li    key={index}   >{ele.age}</li>
     ) )
  }
</ul> */}



       </>         
  )
}

export default FuelPage