
import { Color } from "antd/es/color-picker";

const styles = {

h1:{
  backgroundColor : "purple",

},
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', 
    width: '100%', 
    maxWidth: '1200px', 
    margin: '0 auto',  // Center the form
  },
  formGroup: {
    display: 'grid', // Change to grid for 4 items per row
    gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal-width columns
    gap: '16px',
    marginBottom: '16px'
  },
  formGroupItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    display: 'block',
    marginBottom: '8px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end', // Align buttons to the right
    gap: '8px',
    marginTop: '16px'
  },
  deliveryPinGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    gridColumn: 'span 4', // Make the delivery pin span the entire width
    marginBottom: '16px'
  }
};

export default styles;