import React, { useState } from "react";
import Fuelentry from "./style";
import {
  ArrowLeftOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Modal } from "antd";
import { Typography } from "antd";
import DrawyerUseable from "../../Reusablecomponents/drawyeruseable";
import File from "../consignment/consigncode/file";
import FuelPage from "./fuelpage";

const { Title } = Typography;



const FuelDetails = ({ goBack }) => {
  const [fueldeatilpopup, setFuelDetailPopup] = useState(false);
  const [newValue , setNewValue] = useState([
    {
        "name": "Jane Doe",
        "age": 28,
        "gender": "Female",
        "email": "jane.doe@example.com",
        "phone": "(123) 456-7890",
        "address": "123 Main St, Anytown, USA",
        "occupation": "Graphic Designer",
        "hobbies": ["Hiking", "Photography", "Reading"],
        "education": "Bachelor's Degree in Fine Arts",
        "languages": ["English", "Spanish"]
    },
    {
        "name": "John Smith",
        "age": 34,
        "gender": "Male",
        "email": "john.smith@example.com",
        "phone": "(234) 567-8901",
        "address": "456 Elm St, Othertown, USA",
        "occupation": "Software Engineer",
        "hobbies": ["Gaming", "Cycling", "Cooking"],
        "education": "Master's Degree in Computer Science",
        "languages": ["English", "French"]
    },
    {
        "name": "Emily Johnson",
        "age": 25,
        "gender": "Female",
        "email": "emily.johnson@example.com",
        "phone": "(345) 678-9012",
        "address": "789 Pine St, Sometown, USA",
        "occupation": "Marketing Specialist",
        "hobbies": ["Traveling", "Yoga", "Painting"],
        "education": "Bachelor's Degree in Marketing",
        "languages": ["English"]
    },
    {
        "name": "Michael Brown",
        "age": 41,
        "gender": "Male",
        "email": "michael.brown@example.com",
        "phone": "(456) 789-0123",
        "address": "321 Maple St, Anycity, USA",
        "occupation": "Project Manager",
        "hobbies": ["Running", "Fishing"],
        "education": "Bachelor's Degree in Business",
        "languages": ["English", "German"]
    },
    {
        "name": "Sarah Davis",
        "age": 30,
        "gender": "Female",
        "email": "sarah.davis@example.com",
        "phone": "(567) 890-1234",
        "address": "654 Oak St, Yourtown, USA",
        "occupation": "Data Analyst",
        "hobbies": ["Reading", "Cooking", "Gardening"],
        "education": "Bachelor's Degree in Statistics",
        "languages": ["English", "Italian"]
    },
    {
        "name": "David Wilson",
        "age": 29,
        "gender": "Male",
        "email": "david.wilson@example.com",
        "phone": "(678) 901-2345",
        "address": "987 Cedar St, Hometown, USA",
        "occupation": "Web Developer",
        "hobbies": ["Coding", "Photography"],
        "education": "Bachelor's Degree in Information Technology",
        "languages": ["English"]
    },
    {
        "name": "Linda Martinez",
        "age": 35,
        "gender": "Female",
        "email": "linda.martinez@example.com",
        "phone": "(789) 012-3456",
        "address": "159 Spruce St, Thistown, USA",
        "occupation": "Nurse",
        "hobbies": ["Volunteering", "Baking"],
        "education": "Associate's Degree in Nursing",
        "languages": ["English", "Spanish"]
    },
    {
        "name": "Robert Garcia",
        "age": 38,
        "gender": "Male",
        "email": "robert.garcia@example.com",
        "phone": "(890) 123-4567",
        "address": "753 Willow St, Thatown, USA",
        "occupation": "Financial Analyst",
        "hobbies": ["Golfing", "Reading"],
        "education": "Bachelor's Degree in Finance",
        "languages": ["English"]
    },
    {
        "name": "Jessica Lee",
        "age": 27,
        "gender": "Female",
        "email": "jessica.lee@example.com",
        "phone": "(901) 234-5678",
        "address": "852 Birch St, Anyville, USA",
        "occupation": "Teacher",
        "hobbies": ["Crafting", "Traveling"],
        "education": "Master's Degree in Education",
        "languages": ["English", "Korean"]
    },
    {
        "name": "James Walker",
        "age": 32,
        "gender": "Male",
        "email": "james.walker@example.com",
        "phone": "(012) 345-6789",
        "address": "963 Ash St, Everytown, USA",
        "occupation": "Mechanical Engineer",
        "hobbies": ["Motorcycling", "Hiking"],
        "education": "Bachelor's Degree in Engineering",
        "languages": ["English"]
    }
])



  const handleClick = () => {
    console.log("am clicked ");
    setFuelDetailPopup(true);
  };
  const handleClickClose = () => {
    setFuelDetailPopup(false);
  };

  return (
    <>
     
     <div                   style={Fuelentry.heightProblem}                      > 
       <div        style={Fuelentry.heighProb1}                                                                > 

      
      <div style={Fuelentry.alingnment}>
        <div style={Fuelentry.twocontainer}>
          <div style={Fuelentry.leftSection}>
            <Button
              type="default"
              style={Fuelentry.ReverseButton}
              icon={<ArrowLeftOutlined style={Fuelentry.BackButton} />}
          onClick={goBack}  />

            <Title level={3} style={Fuelentry.inlineTitle}>
              29 Fuel Entry
            </Title>
          </div>
          <div style={Fuelentry.rightSection}>
            <Button
              type=""
              style={Fuelentry.EditButton}
              icon={<EditOutlined />}
              onClick={handleClick}
            />
            <Button
              type=""
              style={Fuelentry.DeleteButton}
              icon={<DeleteOutlined />}
            />
            <Modal
              title="Create New Consignment"
              visible={fueldeatilpopup}
              onCancel={handleClickClose}
              footer={null}
              width={1100}
            >
              <DrawyerUseable />
            </Modal>
          </div>
        </div>

        <div style={Fuelentry.newcontainer}>
          <div style={Fuelentry.vehicle}>
            <div style={Fuelentry.Fueldate}>
              <div style={Fuelentry.gridItem}>
                <label>Vehicle</label> <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>Fuel date </label>
                <br />
                <span>KA-12345</span>
              </div>

              <div style={Fuelentry.gridItem}>
                <label>Litres fueled </label>
                <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>Amount </label>
                <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>ODO Reading </label>
                <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>Mileage </label>
                <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>Fuel Text </label>
                <br />
                <span>KA-12345</span>
              </div>
              <div style={Fuelentry.gridItem}>
                <label>Transporter </label>
                <br />
                <span>KA-12345</span>
              </div>
            </div>
          </div>
        </div>

        <div      style={Fuelentry.filebox}                                            >
          <File />
        </div>
      </div>
      </div>
      </div>




<div><FuelPage    newValue = {newValue} />
  </div>



    </>
  );
};

export default FuelDetails;
