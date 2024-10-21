import React, { useState ,useEffect} from "react";
import { Button, Table } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "../style";
import { EditOutlined } from "@ant-design/icons";
import { DeleteOutlined } from "@ant-design/icons";
import { CopyOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import Event from "./event";
import File from "./file";
import Comment from "./comment";
import Location from "./location";
import Kpis from "./kpi";
import styles2 from './style2'


const ConsignCode = ({goBack ,  formData = {}    }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [event , setEvent] = useState(null)





  // Function to handle button click
  const handleClick = (key) => {
    setActiveButton(key);
    
  
  };

  // Function to determine button style
  const getButtonStyle = (key) => {
    if (activeButton === key) {
      return { ...styles.customButton, ...styles.customButtonActive };
    } else if (hoveredButton === key) {
      return { ...styles.customButton, ...styles.customButtonHover };
    } else {
      return styles.customButton;
    }
  };

  const [hoveredButton, setHoveredButton] = useState(null);

  

  const onDelete = () => {};

  const onEdit = () => {};

  const onCopy = () => {};


  useEffect(() => {
    console.log('ConsignCode formData:', formData);
  }, [formData]);


  return (
    <>
    <div  style={styles.heightProblem} >
    <div      style={styles.heighProb1} >                          
      <div style={styles.sideContainer}>
        <div>
          <Button
            type="default"
            style={styles.ReverseButton}
            icon={<ArrowLeftOutlined style={styles.BackButton} />}
            onClick={goBack}
          />
          <span style={styles.ConsignCode}>Consign code - 212314</span>
        </div>
        <div style={styles.sideButton}>
          <Button
            icon={<CopyOutlined />}
            onClick={onCopy}
            style={styles.roundedButton}
          />

          <Button
            icon={<EditOutlined />}
            onClick={onEdit}
            style={styles.roundedButton}
          ></Button>

          <Popconfirm
            title="Are you sure you want to delete?"
            onConfirm={onDelete}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              danger
              style={styles.roundedButton}
            />
          </Popconfirm>
        </div>
      </div>

   
 <div style={styles2.containerBtn}>
    {/* First Container */}
    <div style={styles2.container}>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Consignor</label><br />
        <h4 style={styles2.h4}>GCS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Consignor</label><br />
        <h4 style={styles2.h4}>TQS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Transporter</label><br />
        <h4 style={styles2.h4}>TQS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Charge Type</label><br />
        <h4 style={styles2.h4}>Daily rate</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>No of Container</label><br />
        <h4 style={styles2.h4}>3</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Dimension of single container</label><br />
        <h4 style={styles2.h4}>200/200/200</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Gross weight in kg</label><br />
        <h4 style={styles2.h4}>200/200/200</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Delivery pin</label><br />
        <h4 style={styles2.h4}>No</h4>
      </div>
    </div>

    {/* Second Container */}
    <div style={styles2.container}>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Consignor</label><br />
        <h4 style={styles2.h4}>GCS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Consignor</label><br />
        <h4 style={styles2.h4}>TQS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Transporter</label><br />
        <h4 style={styles2.h4}>TQS</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Charge Type</label><br />
        <h4 style={styles2.h4}>Daily rate</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>No of Container</label><br />
        <h4 style={styles2.h4}>3</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Dimension of single container</label><br />
        <h4 style={styles2.h4}>200/200/200</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Gross weight in kg</label><br />
        <h4 style={styles2.h4}>200/200/200</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Delivery pin</label><br />
        <h4 style={styles2.h4}>No</h4>
      </div>
    </div>

    {/* Third Container */}
    <div style={styles2.container}>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Link Dossaier</label><br />
        <h4 style={styles2.h4}>-/-</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Order No</label><br />
        <h4 style={styles2.h4}>-/-</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Reference No</label><br />
        <h4 style={styles2.h4}>-/-</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Container No</label><br />
        <h4 style={styles2.h4}>-/-</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Charge Type</label><br />
        <h4 style={styles2.h4}>Daily rate</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>No of Container</label><br />
        <h4 style={styles2.h4}>3</h4>
      </div>
      <div style={styles2.containerItem}>
        <label style={styles2.label}>Zone</label><br />
        <h4 style={styles2.h4}>Bern</h4>
      </div>
    {/* </div>
  </div> */}
  
     <div style={styles.CommonButton}>
        <span>
          <Button
            type="text"
            style={getButtonStyle(1)}
            onClick={() => handleClick(1)}
            onMouseEnter={() => setHoveredButton(1)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            Event
          </Button>
        </span>
        <span>
          <Button
            type="text"
            style={getButtonStyle(2)}
            onClick={() => handleClick(2)}
            onMouseEnter={() => setHoveredButton(2)}
            onMouseLeave={() => setHoveredButton(null)}
          >File
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
            Comment
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
            Location
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
            KPIs
          </Button>
        </span>
      </div>


     {activeButton === 1 && <Event/>}
     {activeButton === 2 && <File/>}
     {activeButton === 3 && <Comment/>}
     {activeButton === 4 && <Location/>}
     {activeButton === 5 && <Kpis/>}
     </div>
     </div>
     </div>
     </div>
    </>
  );
};

export default ConsignCode;
