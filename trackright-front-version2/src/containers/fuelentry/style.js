import { getOverflowOptions } from "antd/es/_util/placements";

const Fuelentry = {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
    },
    btn: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    textSection: {
      flex: 1,
    },
    roundedBtn: {
      borderRadius: '50%', 
      width: '40px', 
      height: '40px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      padding: '0', 
      border:'none',
      backgroundColor: 'rgb(235,247,237)'
  
    }, 
    createbtn: {
      borderRadius: '25px', 
      backgroundColor: 'rgb(44,150,61)',
      height: '40px', 
      color:'white'
    },popupcheck: {
      backgroundColor:'green', 
      color:'white'
    }, filterPopup: {
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-between',
      width:'100%',
      gap:'22px',
    },inputContainer: {
  marginBottom:'10px'
   }, borderstyle: {
    borderRadius:'25px'  , 
    border:'1px bold rgb(135,146,169)',
    height: 'auto',
    padding:'07px',
    paddingRight:'06px'
    ,marginBottom:'15px'
  ,width: '100%', 
  color:'rgb(135,146,169)'
  },BackButton: {
    borderRadius:'25px',
    width:'14px', 
    color:'green'
  }, ReverseButton: {
    borderRadius:'25px',
backgroundColor:'rgb(235,247,237)',
border:'none'
  } , twocontainer: {
    display:'flex',
    justifyContent:'space-between', 
    alignItems:'center',
    width:'100%',
    flexWrap: 'wrap',
  },leftSection: {
    display:'flex'
    , justifyContent:'flex-start',
    alignItems:'center',
    gap:'20px',
    flexWrap: 'wrap', 
  }, rightSection:{
    display:'flex'
    , justifyContent:'flex-end',
    gap:'20px'

  },EditButton:{
    borderRadius:'50%',
    width:'38px',
    border:'.5px solid rgb(235,235,240)',
    color:'rgb(231,175,32)'
  },DeleteButton:{
    borderRadius:'50%',
    width:'38px',
    border: '1px solid rgb(235,235,240)',    color:'red'
  },ReverseButton:{
    borderRadius:'50%',
    width:'38px',
    height:'38px',
    backgroundColor:'rgb(235,247,237)'
    , border:'none',
color:'green'
   
  },  newcontainer: {
    width: '100%',
    padding: '10px',
  },vehicle: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%'
  }, Fueldate: {
    display: 'flex',
   justifyContent:'space-between',
   flexWrap:'wrap',
   gap:'20px',
   width:'100%'
  } ,   gridItem: {
 display:'flex',
flexDirection:'column', textAlign: 'center',
    width: '23%', 
    boxSizing: 'border-box', 
 
 
  }, newcontainer: {
    backgroundColor:'rgb(248,248,248)',
    marginTop:'12px',
    padding:'14px'
  },heightProblem: {
    maxHeight: "80vh", 
    overflowY: "auto", 
  },
  heighProb1: {
    overflowY: "auto", 
  },
  Prob1: {

  }
 ,filebox: {
  marginTop:'5px'
 }

  };
  export default   Fuelentry

