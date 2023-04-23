import React from "react";
import { Formik, Form, Field } from 'formik';
import { useFormik } from "formik";
import * as Yup from 'yup';
function CheckOut() {
    const validationSchema = Yup.object({
    name: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    city: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
    address: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      city: '',
      address: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div>
        <div className="container">
        <h1 className="w-full text-[45px] p-[20px]">CheckOut Page  </h1>
            <div className="content flex items-center flex-col justify-center w-full p-[40px] ">
            <form onSubmit={formik.handleSubmit} className="text-black place-items-center w-full grid gap-[30px] lg:grid-cols-2 md:grid-cols-2 grid-cols-1  ">
                <div className="w-full">
                    <label htmlFor="name">Name</label>
                    <input className={`w-full ${formik.touched.name && formik.errors.city ? 'border-2 border-red-500' : ''}  p-[10px] border-violet-600 border-2 rounded-md` } id="name" name="name" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                </div>
                <div className="w-full">
                <label htmlFor="email">Email</label>
        <input className={`w-full ${formik.touched.email && formik.errors.city ? 'border-2 border-red-500' : ''}  p-[10px] border-violet-600 border-2 rounded-md` } id="email" name="email" type="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>

        <div className="w-full">
        <label htmlFor="city">City</label>
        <input className={`w-full ${formik.touched.city && formik.errors.city ? 'border-2 border-red-500' : ''}  p-[10px] border-violet-600 border-2 rounded-md` } id="city" name="city" type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} />
        </div>
    
        <div className="w-full">
        <label htmlFor="address">Address</label>
        <input className={`w-full ${formik.touched.address && formik.errors.city ? 'border-2 border-red-500' : ''}  p-[10px] border-violet-600 border-2 rounded-md` } name="address" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address} />
        </div>
    </form>
    <div className=" checkout w-[100%] flex items-center justify-center mt-[50px]"><button  className=' bg-violet-600 text-white w-[30%] h-[50px] ' type="submit">Submit</button></div>
            </div>
        </div>

        
    </div>
    
  );
  
}


export default CheckOut;
