import React , {  useState}           from "react";
import {  Table } from "antd";
import styles from "../style";
import { Button } from "antd";
import { EyeOutlined, DownloadOutlined, DeleteOutlined } from "@ant-design/icons";


const File = () => {
  const data = [
    {
      key: 1,
      Title: "Location Image",
      FileSize: "53 MB",
      FileType: "Pdf",
      AddedBy: "Tony Fernendas",
      icons: "",
    },
    {
      key: 2,
      Title: "Location Image",
      FileSize: "53 MB",
      FileType: "Pdf",
      AddedBy: "Tony Fernendas",
    },
    {
      key: 3,
      Title: "Location Image",
      FileSize: "53 MB",
      FileType: "Pdf",
      AddedBy: "Tony Fernendas",
    },
    {
      key: 4,
      Title: "Location Image",
      FileSize: "53 MB",
      FileType: "Pdf",
      AddedBy: "Tony Fernendas",
    },
    {
      key: 5,
      Title: "Location Image",
      FileSize: "53 MB",
      FileType: "Pdf",
      AddedBy: "Tony Fernendas",
    },
  ];

  const columns = [
    {
      title: "Title",
      dataIndex: "Title",
      key: "Title",
    },
    {
      title: "FileSize",
      dataIndex: "FileSize",
      key: "FileSize",
    },
    {
      title: "FileType",
      dataIndex: "FileType",
      key: "FileType",
    },
    {
      title: "FileType",
      dataIndex: "FileType",
      key: "FileType",
    },

    {
      title: "AddedBy",
      dataIndex: "AddedBy",
      key: "AddedBy",
    },{
      title: "",
      key: "actions",
      render: (_, record) => (
        <div style={{ display: 'flex', gap: '12px'  , }}>
          <Button
            icon={<EyeOutlined      style={{ fontSize: '20px' }}                                    />}
            onClick={() => handleView(record)}
            size="small"
            style={{ borderRadius:"25px" ,          padding:'18px',           fontSize:'20px' }}
          />
          <Button
            icon={<DownloadOutlined     style={{ fontSize: '20px' }}                               />}
            onClick={() => handleDownload(record)}
            size="small"
            style={{color:'green' , borderRadius:"25px"  ,  fontSize:'18px'    , padding:'18px'                        }}
          />
          <Button
            icon={<DeleteOutlined     style={{ fontSize: '20px' }}                                    />}
            onClick={() => handleDelete(record)}
            size="small"
            danger
            style={{ borderRadius:"25px" ,fontSize:'18px' , padding:'18px' }}

          />
        </div>
      ),
    },
  ];
  
  const handleView = (record) => {
    console.log("Viewing", record);
  }

const handleDownload = (record)=> {
  console.log("Viewing", record);

}

const handleDelete = (record)=> {
  console.log("Viewing", record);

}
const [hovered, setHovered] = useState(false);


  return (
    <>
      <div    style={{
          display: 'flex',
          justifyContent: 'flex-end', marginBottom:'52px'  }}  >
        <Button      
      
         style={hovered ? styles.addButtonHover : styles.addButton}
         onMouseEnter={() => setHovered(true)}
         onMouseLeave={() => setHovered(false)}    > + ADD </Button>
      </div>

      <div>
        <Table dataSource={data} columns={columns}         scroll={{ y: 300 }}      style={{marginBottom:'30px'}}    />
      </div>
    </>
  );
};

export default File;
