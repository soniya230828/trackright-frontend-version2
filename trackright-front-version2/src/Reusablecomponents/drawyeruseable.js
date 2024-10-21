import React ,{useState}from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Switch ,Typography} from 'antd';
import styles from '../containers/consignment/createStyle';





const DrawyerUseable = ( { }) => {
  const [formData, setFormData] = useState({});
  console.log('Form Data ==> :', formData);

  const formik = useFormik({
    initialValues: {
      consignous1: '',
      transporter1: '',
      consignous2: '',
      transporter2: '',
      consignee: '',
      deliverables: '',
      dimensions: '',
      grossWeight: '',
      pickupLocation: '',
      pickupDateTime: '',
      dropoffLocation: '',
      pickupNotes: '',
      dropoffNotes: '',
      remark: '',
      zone: '',
      deliveryPin: false,
    },
    
    validationSchema: Yup.object({
      consignous1: Yup.string().required('Consignous is required'),
      transporter1: Yup.string().required('Transporter is required'),
      consignous2: Yup.string().required('Consignous is required'),
      transporter2: Yup.string().required('Transporter is required'),
      consignee: Yup.string().required('Consignee is required'),
      deliverables: Yup.string().required('Number of Deliverables is required'),
      dimensions: Yup.string().required('Dimensions are required'),
      grossWeight: Yup.string().required('Gross Weight is required'),
      pickupLocation: Yup.string().required('Pickup Location is required'),
      pickupDateTime: Yup.string().required('Pickup Date & Time is required'),
      dropoffLocation: Yup.string().required('Dropoff Location is required'),
    }),
    
    
    onSubmit: (values) => {
      // On form submission, set the form data
      setFormData({
        consignous1: { label: "Consignous1", value: values.consignous1 },
        transporter1: { label: "Transporter1", value: values.transporter1 },
        consignous2: { label: "Consignous2", value: values.consignous2 },
        transporter2: { label: "Transporter2", value: values.transporter2 },
        consignee: { label: "Consignee", value: values.consignee },
        deliverables: { label: "Deliverables", value: values.deliverables },
        dimensions: { label: "Dimensions", value: values.dimensions },
        grossWeight: { label: "Gross Weight", value: values.grossWeight },
        deliveryPin: { label: "Delivery Pin", value: values.deliveryPin ? 'Yes' : 'No' },
        pickupLocation: { label: "Pickup Location", value: values.pickupLocation },
        pickupDateTime: { label: "Pickup Date & Time", value: values.pickupDateTime },
        dropoffLocation: { label: "Dropoff Location", value: values.dropoffLocation },
        pickupNotes: { label: "Pickup Notes", value: values.pickupNotes },
        dropoffNotes: { label: "Dropoff Notes", value: values.dropoffNotes },
        remark: { label: "Remark", value: values.remark },
        zone: { label: "Zone", value: values.zone },
      });
    }
  });

  return (

    <>


    <Typography.Title level={2} style={{ marginBottom: "20px" }}>
            <h1> Creating Consingments</h1>
          </Typography.Title>
         


    <form onSubmit={formik.handleSubmit} style={styles.formContainer}>
      <div style={styles.formGroup}>
        <div style={styles.formGroupItem}>
          <label htmlFor="consignous1" style={styles.label}>Consignous*</label>
          <Input   
            id="consignous1"
            name="consignous1"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.consignous1}
          />
          {formik.touched.consignous1 && formik.errors.consignous1 ? (
            <div style={{ color: 'red' }}>{formik.errors.consignous1}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="transporter1" style={styles.label}>Transporter*</label>
          <Input
            id="transporter1"
            name="transporter1"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transporter1}
          />
          {formik.touched.transporter1 && formik.errors.transporter1 ? (
            <div style={{ color: 'red' }}>{formik.errors.transporter1}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="consignous2" style={styles.label}>Consignous*</label>
          <Input
            id="consignous2"
            name="consignous2"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.consignous2}
          />
          {formik.touched.consignous2 && formik.errors.consignous2 ? (
            <div style={{ color: 'red' }}>{formik.errors.consignous2}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="transporter2" style={styles.label}>Transporter*</label>
          <Input
            id="transporter2"
            name="transporter2"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transporter2}
          />
          {formik.touched.transporter2 && formik.errors.transporter2 ? (
            <div style={{ color: 'red' }}>{formik.errors.transporter2}</div>
          ) : null}
        </div>
      </div>

      {/* Second Row of Inputs */}
      <div style={styles.formGroup}>
        <div style={styles.formGroupItem}>
          <label htmlFor="consignee" style={styles.label}>Consignee*</label>
          <Input
            id="consignee"
            name="consignee"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.consignee}
          />
          {formik.touched.consignee && formik.errors.consignee ? (
            <div style={{ color: 'red' }}>{formik.errors.consignee}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="deliverables" style={styles.label}>Number of Deliverables*</label>
          <Input
            id="deliverables"
            name="deliverables"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.deliverables}
          />
          {formik.touched.deliverables && formik.errors.deliverables ? (
            <div style={{ color: 'red' }}>{formik.errors.deliverables}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="dimensions" style={styles.label}>Dimensions (l/b/h)*</label>
          <Input
            id="dimensions"
            name="dimensions"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dimensions}
          />
          {formik.touched.dimensions && formik.errors.dimensions ? (
            <div style={{ color: 'red' }}>{formik.errors.dimensions}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="grossWeight" style={styles.label}>Gross Weight in (CMS)*</label>
          <Input
            id="grossWeight"
            name="grossWeight"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.grossWeight}
          />
          {formik.touched.grossWeight && formik.errors.grossWeight ? (
            <div style={{ color: 'red' }}>{formik.errors.grossWeight}</div>
          ) : null}
        </div>
      </div>

      {/* Delivery Pin */}
      <div style={styles.deliveryPinGroup}>
        <label htmlFor="deliveryPin" style={styles.label}>Delivery Pin</label>
        <Switch
          id="deliveryPin"
          name="deliveryPin"
          checked={formik.values.deliveryPin}
          onChange={(checked) => formik.setFieldValue('deliveryPin', checked)}
        />
      </div>

      {/* Third Row of Inputs */}
      <div style={styles.formGroup}>
        <div style={styles.formGroupItem}>
          <label htmlFor="pickupLocation" style={styles.label}>Pickup Location*</label>
          <Input
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupLocation}
          />
          {formik.touched.pickupLocation && formik.errors.pickupLocation ? (
            <div style={{ color: 'red' }}>{formik.errors.pickupLocation}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="pickupDateTime" style={styles.label}>Pickup Date & Time*</label>
          <Input
            id="pickupDateTime"
            name="pickupDateTime"
            type="datetime-local"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupDateTime}
          />
          {formik.touched.pickupDateTime && formik.errors.pickupDateTime ? (
            <div style={{ color: 'red' }}>{formik.errors.pickupDateTime}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="dropoffLocation" style={styles.label}>Dropoff Location*</label>
          <Input
            id="dropoffLocation"
            name="dropoffLocation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropoffLocation}
          />
          {formik.touched.dropoffLocation && formik.errors.dropoffLocation ? (
            <div style={{ color: 'red' }}>{formik.errors.dropoffLocation}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="pickupNotes" style={styles.label}>Pickup Notes</label>
          <Input
            id="pickupNotes"
            name="pickupNotes"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupNotes}
          />
          {formik.touched.pickupNotes && formik.errors.pickupNotes ? (
            <div style={{ color: 'red' }}>{formik.errors.pickupNotes}</div>
          ) : null}
        </div>
      </div>

      {/* Fourth Row of Inputs */}
      <div style={styles.formGroup}>
        <div style={styles.formGroupItem}>
          <label htmlFor="dropoffNotes" style={styles.label}>Dropoff Notes</label>
          <Input
            id="dropoffNotes"
            name="dropoffNotes"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropoffNotes}
          />
          {formik.touched.dropoffNotes && formik.errors.dropoffNotes ? (
            <div style={{ color: 'red' }}>{formik.errors.dropoffNotes}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="remark" style={styles.label}>Remark</label>
          <Input
            id="remark"
            name="remark"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.remark}
          />
          {formik.touched.remark && formik.errors.remark ? (
            <div style={{ color: 'red' }}>{formik.errors.remark}</div>
          ) : null}
        </div>

        <div style={styles.formGroupItem}>
          <label htmlFor="zone" style={styles.label}>Zone</label>
          <Input
            id="zone"
            name="zone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zone}
          />
          {formik.touched.zone && formik.errors.zone ? (
            <div style={{ color: 'red' }}>{formik.errors.zone}</div>
          ) : null}
        </div>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="default"                                      onClick={() => formik.resetForm()}>
          Reset
        </Button>
      </div>
    </form>

    </>
  );
};

export default DrawyerUseable;


