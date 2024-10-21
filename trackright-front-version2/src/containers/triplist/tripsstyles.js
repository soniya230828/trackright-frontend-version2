// const tripStyles = {
//     backTripBtn: {
//       background: 'rgb(235,247,237)',
//       border: 'none',
//       color: 'rgb(59, 180, 59)',
//       borderRadius: '50%',
//       width: '40px',
//       height: '40px',
//       padding: 0
//     },
//     editBtn: {
//       border: '1px solid rgb(60, 60, 62)',
//       borderRadius: '50%',
//       backgroundColor: 'transparent',
//       width: '40px',
//       height: '35px',
//       marginTop: '12px',
//       padding: 0
//     },
//     tripsPageData: {
//       backgroundColor: 'rgb(248, 248, 248)',
//       borderRadius: '18px',
//       padding: '20px',
//       height: 'auto',
//       marginTop: '30px'
//     },
//     driverList: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       marginTop: '25px',
//       gap: '40px'
//     },
//     driverItem: {
//       flex: 'calc(20% - 10px)'
//     },
//     statusLeft1: {
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       gap: '20px ',
//       flexWrap: 'wrap'
//     }
//     ,h1:{
//         backgroundColor: 'black',
//     },
//     statusSelect: {
//       textAlign: 'center',
//       marginLeft: 0
//     },
//     btnContain: {
//       marginTop: '10px'
//     },
//     updateBtn: {
//       paddingLeft: '36px',
//       paddingRight: '36px',
//       borderRadius: '25px',
//       backgroundColor: 'rgb(232,255,236)',
//       border: 'none',
//       color: 'rgb(140, 238, 140)'
//     },
//     updateBtn1: {
//       paddingLeft: '36px',
//       paddingRight: '36px',
//       borderRadius: '25px',
//       backgroundColor: 'rgb(44,150,61)',
//       border: 'none',
//       color: 'white'
//     },
//     selectBtn: {
//       width: '100%',
//       borderRadius: '25px',
//       marginTop: '20px'
//     },
//     hrStyle: {
//       width: '100%',
//       border: '1px solid #ccc',
//       margin: '10px 0'
//     },
//     driverLabel: {
//       display: 'inline-block'
//     },
//     driverName: {
//       display: 'inline-block',
//       marginTop: '10px'
//     },
//     greenIconStyle: {
//         display: 'inline-block',
//         width: '10px',
//         height: '10px',
//         borderRadius: '50%',
//         backgroundColor: 'green',
//         marginRight: '8px', // Spacing between the icon and text
//       }
//     //   dropBox: {
//     //     width: '200 px'
//     //   }
//       ,
//       tonyFernandezBtn: {
//         marginTop: '15px'
//       }
//     ,devEdwardBtn:{
//         marginTop: '20px' 
//     }, newVehicleTo:{
//  display: 'block',
//   marginBottom: '-10px'
//     }, arrowUpFor:{
//         display: 'flex',
//          alignItems: 'right' 
//     },
//   };

const tripStyles = {
    container: {
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
        padding: "0 20px",
      },
      leftSection: {
        display: "flex",
        alignItems: "center", 
      },
      backButton: {
        marginRight: "10px",
        background: 'rgb(235,247,237)',
             border: 'none',
               color: 'rgb(59, 180, 59)',
              borderRadius: '50%',
          width: '40px',
          height: '40px',
              padding: 0
      },
      consignCodeTitle: {
        marginLeft: "10px",
      marginTop: "8px"
      },
      rightSection: {
        display: "flex",
        alignItems: "center", 
      },
      selectBtn: {
        borderRadius:'25px',
        width: '200px',
        padding: '06px',
        paddingLeft:'09px',
        marginRight:'45px',
        marginBottom: '0px',
        border: '1px light rgb(237,237,241)',
    
      },lblOpt: {
        marginRight: '10px',
    fontFamily: 'sans-serif',
     
       }
      ,ContainBtn: {
        width: '10px',
  height: '10px',
  borderRadius: '100%',
  backgroundColor: 'rgb(13, 153, 13)',
  display: 'inline-block',

      },
       selectCircle: { 
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'green',
        marginRight: '10px', 
      }, 
      primaryButton: {
        color: 'white',
        backgroundColor: 'rgb(37, 163, 37)',
        borderRadius: '25px',
        marginRight:'28px',
        paddingRight:'10px'
      },upDowBtn: {
        marginRight:'11px'
      }, primaryButtonContainer:{
        marginLeft:'px'
      },editButton: {
        borderRadius: '50%', 
        width: '40px', 
        height: '35px', 
        padding: 0 ,
        marginTop:'0px'
      },editButtonHover:{
border:' 1px light rgb(237,237,241)!important',

      }, tripsPageData: {
        backgroundColor: "rgb(248, 248, 248)",
        borderRadius: "18px",
        padding: "20px",
        height: "auto",
        marginTop: "30px",
        marginBottom : '25PX'
      },
      driverList: {
        display: "flex",
        flexWrap: "wrap",
        marginTop: "25px",
        gap: "40px",
      },
      driverItem: {
        flex: "calc(20% - 10px)",
      },
      hrStyle: {
        width: "100%",
        border: "1px solid #ccc",
        margin: "10px 0",
      },
      driverItemLabel: {
        display: "inline-block", // Ensures the label behaves as a block element
      },
      driverName: {
        display: "inline-block", // or block
        marginTop: "10px", // Adjust the margin value as needed
      }











      

    };
            

  export default tripStyles