import React, { useState } from "react";
import { Typography, Select, Button, Modal, Flex } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  EditOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import tripStyles from "./tripsstyles";
import { CheckCircleOutlined } from "@ant-design/icons";
import styles from "../consignment/style";
import ConsingmentPopup from "./consingment";
import Location from "../consignment/consigncode/location";
import TripCodeEvent from "./tripcodeevent";
import TripCodeFile from "./tripcodefile";
import TripCodeComment from "./tripcodecomment";
import DriverBreaks from "./driverbreaks";
const { Option } = Select;
const { Title } = Typography;

const TripCode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [active , setActive ] =  useState(null);

  
  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleUpdate = () => {
    console.log("am clicked ");
  };
  const handleClick = (key) => {
    setActive(key);
  console.log('am clicked ')
  };
  const getButtonStyle = (key) => {
    if (active === key) {
      return  { ...styles.customButton, ...styles.customButtonActive } ;
    } else if (hoveredButton === key) {
      return { ...styles.customButton, ...styles.customButtonHover };
    } else {
      return styles.customButton;
    }
  };
console.log(    active      , "active")
  const [hoveredButton, setHoveredButton] = useState(null);

  

  const onDelete = () => {};

  const onEdit = () => {};

  const onCopy = () => {};



  return (
    <>
    <div  style={styles.heightProblem} >
    <div      style={styles.heighProb1} >                          
      
      <div style={tripStyles.container}>
        <div style={tripStyles.leftSection}>
          <Button
            style={tripStyles.backButton}
            type="primary"
            icon={<LeftOutlined />}
            size="small"
          />
          <div style={tripStyles.consignCodeTitle}>
            <Title level={4}>Consign Code - 21223</Title>
          </div>
        </div>

        {/* Right Section: Status Dropdown, Primary Button, Edit Button */}
        <div style={tripStyles.rightSection}>
          <div style={tripStyles.statusDropdown}>
            <label       style={tripStyles.lblOpt}                              >                                        
            Status</label>
         
            <select
              id="myDropdown"
              defaultValue="option1"
              style={tripStyles.selectBtn}
            > <span  style={tripStyles.ContainBtn}></span> 
              <option value="option1">
               
                
                KA3123-Dev Edward
              </option>

              <option value="option2">
                
                KA3123-Dev Edward
              </option>
              <option value="option3">
               
               KA3123-Dev Edward
              </option>
            </select>
          </div>

          <div style={tripStyles.primaryButtonContainer}>
          <Flex gap="small" wrap>

            <Button type="primary" onClick={showModal}      className="primaryButton" style={tripStyles.primaryButton}                                                  >
              <ArrowUpOutlined   style= {tripStyles.upBtn}/>
              <ArrowDownOutlined    style= {tripStyles.upDowBtn}                               />
              Primary Button
            </Button>
            </Flex>
          </div>

          <div>
      <Button
            style={tripStyles.editButton}
            icon={<EditOutlined style={{ color: "rgb(228,164,0)" }} />}
          /></div>

        </div>
      </div>

      {/* Modal Component */}
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        bodyStyle={{ height: "300px" }}
        footer={
          <div>
            <hr />
            <Button onClick={handleCancel} style={tripStyles.updateBtn}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={handleUpdate}
              style={tripStyles.updateBtn1}
            >
              Update
            </Button>
          </div>
        }
      >
        <div>
          <Title level={4}>Consign Code - 26723</Title>
        </div>
        <hr />
        <div>
          <div>
            <Title level={4} style={tripStyles.tonyFernandezBtn}>
              KA 12345 - Tony Fernandez
            </Title>
          </div>
          <div style={tripStyles.devEdwardBtn}>
            <label style={tripStyles.newVehicleTo}>
              Choose new vehicle to change
            </label>
            <select
              id="myDropdown"
              defaultValue="option1"
              style={tripStyles.selectBtn}
            >
              <option value="option1">
                {" "}
                <CheckCircleOutlined />{" "}
                <span style={tripStyles.selectCircle}></span>
                KA3123-Dev Edward
              </option>
              <option value="option2">
                {" "}
  <span style={tripStyles.selectCircle}></span>
                KA3123-Dev Edward
              </option>
              <option value="option3">
                {" "}
  <span style={tripStyles.selectCircle}></span>
               KA3123-Dev Edward
              </option>
            </select>
          </div>
        </div>
      </Modal>
     

<div style={tripStyles.tripsPageData}>

  <div style={tripStyles.driverList}>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Driver Name</label><br/>
      <span style={tripStyles.driverName}>Tony Fernandez</span>
    </div>
    
    <hr />
    <br />
    
    <div style={tripStyles.driverItem}>
      <label>Fuel Quantity</label><br/>
      <span style={tripStyles.driverName}>Safari</span>
    </div>
    <div style={tripStyles.driverItem}>
      <label>Trip Allowance</label><br/>
      <span style={tripStyles.driverName}> 0</span>
    </div>
    
  </div>
  
</div>

<div style={tripStyles.CommonButton}>
        <span>
          <Button
            type="text"
            style={getButtonStyle(1)}
            onClick={() => handleClick(1)}
            onMouseEnter={() => setHoveredButton(1)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Consingment
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(2)}
            onClick={() => handleClick(2)}
            onMouseEnter={() => setHoveredButton(2)}
            onMouseLeave={() => setHoveredButton(null)}
          >Map
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(3)}
            onClick={() => handleClick(3)}
            onMouseEnter={() => setHoveredButton(3)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Event
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(4)}
            onClick={() => handleClick(4)}
            onMouseEnter={() => setHoveredButton(4)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Files
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(5)}
            onClick={() => handleClick(5)}
            onMouseEnter={() => setHoveredButton(5)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Comment
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(6)}
            onClick={() => handleClick(6)}
            onMouseEnter={() => setHoveredButton(6)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Drivers Break
          </Button>
        </span>
{active  === 1  && <ConsingmentPopup /> }
{ active === 2 &&       <Location/>    }
{ active === 3 && <TripCodeEvent/> }
{active === 4   &&  <TripCodeFile/>}
{active === 5   && <TripCodeComment/>}
{active === 6   && <DriverBreaks/>}
      </div>
    
     </div>
     </div>
    </>
  );
};
export default TripCode;
