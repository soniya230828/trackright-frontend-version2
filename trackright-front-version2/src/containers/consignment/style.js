import userEvent from '@testing-library/user-event';

const styles = {
    customButton: {
        borderRadius: '25px',
        padding: '16px 20px',
        marginRight: '11px',
        border: 'none',
        color:'green',
        backgroundColor: 'rgb(178, 190, 181)',
        marginTop :'90px'
    },
    customButtonHover: {
        color: 'rgb(18, 162, 18)',
    },
    customIcon: {
        color: 'rgb(89, 89, 232)',
        borderRadius: '50%',
        fontSize: '18px',
    },
    customIcon1: {
        marginRight: '16px',
    },
    customIconBtn2Base: {
        backgroundColor: 'rgb(20, 96, 20)',
        borderRadius: '24px',
        border: 'none',
        color: 'white'    },
    customIconBtn2Hover: {
        backgroundColor: 'rgb(46, 165, 46)',
    },
    BackButton : {
        color:'green',
    },
    ReverseButton: {
        borderRadius:'50%'
    } ,
    ConsignCode:{
        marginLeft: '10px',
        fontSize: '22px'
    },
    
    heightProblem: {
      maxHeight: "80vh", 
      overflowY: "auto", 
    },
  
    heighProb1: {
      overflowY: "auto", 
    },
    
    
    
    
    sideContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
   marginTop: "0px", 
    flexWrap: "wrap", 
    },
    sideButton: {
       gap: '15px',
        display:'flex',
        flexWrap: "wrap"
    },
    roundedButton:{
        borderRadius: '50%',  
        width: '40px',        
        height: '40px',     
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid  #d3d3d3',
        marginBottom: "10px",
    },
      tableContainer: {
    marginTop: '20px',
    maxHeight: '400px',
    // overflowY: 'auto',
    overflow: 'hidden',
      },    
    customButton: {
        borderRadius: "25px",
        padding: "10px 20px",
        marginRight: "11px",
        border: "none",
        backgroundColor: "white", 
        color: "black", 
        transition: "all 0.3s ease",
        marginTop:'-35px'
      },
      customButtonHover: {
        backgroundColor: "lightgray", // Color when hovered
        color: "black", // Text color on hover
      },
      customButtonActive: {
        backgroundColor: "green",
        color: "white", 
      },
      CommonButton: {
        marginTop: "65px",
      },
      eventTable: {
        marginTop:"50px",
        width: '100%', // Ensures the table takes up full width
        overflowX: 'auto', // Prevents horizontal overflow on small screens


      },
      ContainerEvent1: {
        marginTop:"20px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center input on smaller screens
        width: '100%', // Ensure container adapts to smaller screens
      },
      
        containerModal: {
          // height: '600px', 
          maxHeight: "80vh", // Adjusted for screen size
          overflowY: "auto",
        },
       
       
        cancelButton1: {
          backgroundColor: '#f5f5f5',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px', 
            borderRadius:'25px'
        },
        addButton: {
          borderRadius: '25px',
          backgroundColor: 'rgb(44,150,61)',
          color: 'white',
          border: 'none',
          padding: '10px 30px',
        },
        addButtonHover: {
          backgroundColor: 'darkgreen',
          color: 'rgb(6,109,8)',
          transition: 'background-color 0.3s ease',
          padding: '10px 30px !important',
          borderRadius: '25px!important',
          color:'white'

        },
        
      

}

export default styles;



