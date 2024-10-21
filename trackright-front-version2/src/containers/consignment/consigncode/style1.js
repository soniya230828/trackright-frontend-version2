const styles1 = {
    // container: {
    //   backgroundColor: 'lightblue',
    //   padding: '20px',
    //   borderRadius:'25px',
    //   marginBottom:'15px'
    // }
    container: {
      backgroundColor: 'lightblue',
      padding: '20px',
      borderRadius: '25px',
      marginBottom: '5px',
      marginTop: '10px', // Add marginTop to move the container down
    },
    
    container1: {
      backgroundColor: 'white',
      width: '50%',
      borderRadius: '18px',
      paddingLeft: '20px',
      marginTop: '50px',
      alignSelf: 'flex-start',
      height: '100px',

    },
    container2: {
      backgroundColor: 'white',
      width: '50%',
      borderRadius: '18px',
      paddingLeft: '20px',
      marginTop: '20px',
      height: '100px',
      alignSelf: 'flex-end',
    },
    container3: {
      backgroundColor: 'white',
      width: '50%',
      borderRadius: '18px',
      paddingLeft: '20px',
      marginTop: '20px',
      height: '110px',
      paddingTop: '10px',
      paddingBottom: '10px',
    },
    container4: {
      position: 'relative',
      width: '100%',
      marginTop: '20px',
    },
    messageContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '365px',
      overflowY: 'auto',
      padding: '10px',
    
    },
    messageInput: {
      width: '100%',
      padding: '10px 40px 10px 20px',
      border: 'none',
      borderRadius: '18px',
      outline: 'none',
      boxSizing: 'border-box',
    },
    sendIcon: {
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '24px',
      cursor: 'pointer',
      color: 'lightgreen',
    },

    messageColumn: {
      position: 'relative',
    },
    resolveButton: {
      visibility: 'hidden',
      transition: 'visibility 0.3s ease-in-out',
      borderRadius: '25px',
      backgroundColor: 'rgb(6, 109, 8)',  
      color: 'white', 
      border: 'none',  
    },
    messageColumnHover: {
      visibility: 'visible',
    },
    table: {
      marginTop: '20px',
    },



    // Responsive design adjustments
    '@media (max-width: 768px)': {
      container1: {
        width: '100%',
      },
      container2: {
        width: '100%',
      },
      container3: {
        width: '100%',
      },
      messageInput: {
        padding: '10px 30px 10px 15px',
      },
      sendIcon: {
        right: '10px',
      }, 
   
      // messageColumn: {
      //   position: 'relative',
      // },
      // resolveButton: {
      //   visibility: 'hidden',
      //   transition: 'visibility 0.3s ease-in-out',
      // },
      // messageColumnHover: {
      //   visibility: 'visible',
      // },
      // table: {
      //   marginTop: '20px',
      // },


      
    },
  };
  


  export default styles1