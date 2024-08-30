import Styled from "styled-components";

const LayoutWrap = Styled.div`
.side_bar{
   transition: 1s;
  -webkit-transition: all 500ms ease-in-out;
}

 .logo_Style{
    margin: 24px;
    transition: 1s;
    -webkit-transition: all 500ms ease-in-out;
 }
 
 .Logo_txt{
   margin: 26px 23px 0px -13px;
  
 }
 .total_body{
     height: 100%;
 }
 .demo-logo-vertical{
   display: flex;
 }
 .ant-layout.ant-layout-has-sider{
    height: 100vh !important;
 }
 .ant-layout .ant-layout-sider{
   background-color: #061C06;
 }
 .ant-menu-dark{
   background-color: #061C06;
 }
 .ant-menu-dark.ant-menu-inline .ant-menu-sub{
  background-color: #061C06;
 }
 .ant-menu-dark .ant-menu-item-selected{
  opacity: 2.5;
  background-color: #363636;
  border-right: solid #2C963D 4px;
 }
 :where(.css-dev-only-do-not-override-11lehqq).ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover{
   background: transparent  !important;
 }
 .ant-menu-item {
  opacity: 0.5; 
  transition: opacity 0.3s ease; 
 }
 

.arrow-left{
   transition: 0.5s;
  rotate: 180deg;
  margin-right: 46px;
  background-color: #ffffff;
    border-radius: 17px;
    padding: 3px;
}
.arrow-right{
   transition: 0.5s;
  rotate: 360deg;
   background-color: #ffffff;
    border-radius: 17px;
    padding: 3px;
}


`;
export default LayoutWrap;
