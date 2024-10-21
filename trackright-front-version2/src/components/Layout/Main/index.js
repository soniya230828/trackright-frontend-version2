import React, { useState } from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import TrackRightLogo from "../../../assets/images/Frame 2147225324.png";
import TrackRightLogoTxt from "../../../assets/images/TrackRight.png";
import HomeIcon from "../../../assets/images/home-angle-2-svgrepo-com.png";
import DashboardIcon from "../../../assets/images/dashboard-svgrepo-com.png";
import CustDashIcon from "../../../assets/images/dashboard-tile-setting-solid-svgrepo-com.png";
import OperationIcon from "../../../assets/images/check-square-svgrepo-com.png";
import ReportsIcon from "../../../assets/images/document-svgrepo-com.png";
import arrow from "../../../assets/images/Frame 2147225326.png";

import LayoutWrap from "./style";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));




const Mainindex = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [heading, setHeading] = useState("Home");
  const [selectedKey, setSelectedKey] = useState("1");
  console.log('selectedKey--->',selectedKey)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate = useNavigate();

  const item = [
    {
      key: "1",
      icon: <img src={HomeIcon} alt="home" />,
      label: "Home",
      path: "/home",
    },
    {
      key: "2",
      icon: <img src={DashboardIcon} alt="dashboard" />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      key: "3",
      icon: <img src={CustDashIcon} alt="custdashboard" />,
      label: "Custom Dashboard",
      path: "/customDashboard",
    },
    {
      key: "4",
      icon: <img src={OperationIcon} alt="operation" />,
      label: "Operations",
      path: "/operations",
      children: [
        {
          key: "4-1",
          label: "Consignment",
          path: "/operations/consignment",
        },
        {
          key: "4-2",
          label: "Trip List",
          path: "/operations/trip list",
        },
        {
          key: "4-3",
          label: "Fuel Entry",
          path: "/operations/fuel entry",
        },
      ],
    },
    {
      key: "5",
      icon: <img src={ReportsIcon} alt="reports" />,
      label: "Reports",
      path: "/reports",
    },
    {
      key: "6",
      icon: <UploadOutlined />,
      label: "Tracks",
      path: "/tracks",
    },
  ];

  const handleMenuClick = (key) => {
    const parentItem = item.find(
      (item) =>
        item.key === key || item.children?.some((sub) => sub.key === key)
    );

    if (parentItem) {
      if (parentItem.key === key) {
        navigate(parentItem.path);
        setHeading(parentItem.label);
      } else {
        const childItem = parentItem.children.find((sub) => sub.key === key);
        navigate(childItem.path);
        setHeading(childItem.label);
      }
      setSelectedKey(key);
    }
  };

  const handleLogoClick = () => {
    setSelectedKey('1');
    setHeading('Home');
    navigate('/home');  
    
   
  };
    return (
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo-vertical">
            <div className="d-flex">
              <Link to={`home`} onClick={handleLogoClick}>
                <img className="logo_Style" src={TrackRightLogo} alt="TrackRight" />
              </Link>
              {!collapsed && (
                <Link to={`home`} onClick={handleLogoClick}>
                  <img className="Logo_txt" src={TrackRightLogoTxt} alt="TrackRight" />
                </Link>
              )}
            </div>
       
          </div>
  
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            onClick={({ key }) => handleMenuClick(key)}
            items={item}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
  
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <h1>{heading}</h1>
          <Outlet />
        </Content>
      </Layout>
    );
}









    // <LayoutWrap>
    //   <Layout>
    //     <Sider
    //       className="side_bar"
    //       trigger={null}
    //       collapsible
    //       collapsed={collapsed}
    //     >
    //       <div className="demo-logo-vertical">
    //         <div className={`d-flex`}>
    //           <Link to={`home`} onClick={handleLogoClick}>
    //             <img
    //               className="logo_Style"
    //               src={TrackRightLogo}
    //               alt="TrackRight"
    //             />
    //           </Link>
    //           {!collapsed && (
    //             <Link to={`home`} onClick={handleLogoClick}>
    //               <img
    //                 className="Logo_txt"
    //                 src={TrackRightLogoTxt}
    //                 alt="TrackRight"
    //               />
    //             </Link>
    //           )}
    //         </div>
    //         <Button
    //           type="text"
    //           icon={
    //             <img
    //               src={arrow}
    //               alt={collapsed ? "arrow-left" : "arrow-right"}
    //               className={collapsed ? "arrow-left" : "arrow-right"}
    //             />
    //           }
    //           onClick={() => setCollapsed(!collapsed)}
    //           style={{
    //             fontSize: "16px",
    //             width: 64,
    //             height: 64,
    //           }}
    //         />
    //       </div>
    //       <Menu
    //         theme="dark"
    //         mode="inline"
    //         defaultSelectedKeys={[selectedKey]}
    //         onClick={({ key }) => handleMenuClick(key)}
    //         items={item}
    //       />
    //     </Sider>
    //     <Layout>
    //       <Header
    //         style={{
    //           padding: 0,
    //           background: colorBgContainer,
    //         }}
    //       >
    //         <p className="ml-5">
    //           <h1>{heading}</h1>
    //         </p>
    //       </Header>
    //       <Content
    //         style={{
    //           margin: "24px 16px",
    //           padding: 24,
    //           minHeight: 280,
    //           background: colorBgContainer,
    //           borderRadius: borderRadiusLG,
    //         }}
    //       >
    //         <Outlet />
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </LayoutWrap>





















  
export default Mainindex;
