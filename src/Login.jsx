import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import {useJwt} from "./UserStore";
// import { LoginName } from "./loginName";



export default function Login() {

    const [location, setLocation] = useLocation();
    const { setJwt } = useJwt();
    // const {setName} = LoginName();


    const formEntry ={
        email:'',
        password:''
    }

    const validateForm = Yup.object({
        email:Yup.string().email("Invalid Address").required("Email is required"),
        password:Yup.string().required("Password is required")
    })

    const handleSubmit = async (values,actions) =>{
        try{
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, values);
            console.log('Login successful:', response.data);
            setJwt(response.data.token);
            // setName(response.data.name);
            // console.log(response.data.name)
            actions.setSubmitting(false);
            setLocation("/");
        }
        catch(error)
        {
            console.error("Login Failed", error.response?.data || error.message);
        }
        // finally{
        //     setLocation("/");
        // }
    }


    return (
        <>
            <div className="h-100 formField m-auto container mt-5">
                <div className="m-5">
                    <div className="mb-5"><h1>Login</h1></div>
                    <Formik 
                    initialValues={formEntry}
                    validationSchema = {validateForm}
                    onSubmit={handleSubmit}
                    >
                       {function(formik) {
                        return (
                        <Form className="row">
                            <div className="mb-3 col-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <Field type ="email" className="form-control" name="email"/>
                                {formik.errors.email && formik.touched.email ? <div className="form-text text-danger"><small>{formik.errors.email}</small></div> : null
                                }
                            </div>
                            <div className="mb-3 col-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field type ="password" className="form-control" name="password"/>
                                {formik.errors.password && formik.touched.password ? <div className="form-text text-danger"><small>{formik.errors.password}</small></div> : null
                                }
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>{formik.isSubmitting ? 'Logging in...' : 'Login'}</button>
                            </div>

                        </Form>
                      );
                    }}

                    </Formik>
        
                </div>
            </div>

        </>
    )
}