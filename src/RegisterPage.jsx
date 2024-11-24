import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useLocation } from 'wouter';
import { useNotification } from "./useNotification";


export default function RegisterPage() {

    const [location, setLocation] = useLocation();

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        dob: '',
        marketingPreferences: []
    };


    const validationSchema = Yup.object({
        name: Yup.string().required('Name is missing.'),
        email: Yup.string().email("Invalid address").required("Email is required."),
        password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters")
            .matches(/[a-z]/, "Password must contain lowercase")
            .matches(/[A-Z]/, "Password must contain uppercase.")
            .matches(/\d/, "Password must contain a number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol."),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Password is required"),
        dob: Yup.date().required("Date is required").max(new Date(), "Date is invalid"),
    })

    //declare the atom.
    const { showNotification } = useNotification();

    const handleSubmit = async (values, formikHelpers) => {
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/users/register`, values);
            showNotification("Registered successfully", "success");
            formikHelpers.setSubmitting(false);
        }
        catch (error) {
            console.error("Registration", error.response?.data || error.message);

            showNotification("Error while registering: " + error, "danger");
        }
        finally {
            setLocation("/");
        }
    };





    return (
        <>
            <div className="h-100 formField m-auto container">
                <div className="m-5 h-100">
                    <div className="mb-5"><h1>Registration</h1></div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}


                    >
                        {(formik) => (
                            <Form className="row">
                                <div className="mb-3 col-10">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <Field type="text" className="form-control" id="exampleInputEmail1" name="name" />
                                    {formik.errors.name && formik.touched.name ? <div id="nameHelp" className="form-text text-danger"><small>{formik.errors.name}</small></div> : null}
                                </div>
                                <div className="mb-3 col-2">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Birthday</label>
                                    <Field type="date" className="form-control" name="dob" />
                                    {formik.errors.dob && formik.touched.dob ? <div id="nameHelp" className="form-text text-danger"><small>{formik.errors.dob}</small></div> : null}
                                </div>
                                <div className="mb-3 col-12">
                                    <label htmlFor="exampleFieldEmail1" className="form-label">Email</label>
                                    <Field type="email" className="form-control" id="exampleFieldEmail1" name="email" />
                                    {formik.errors.email && formik.touched.email ? <div id="nameHelp" className="form-text text-danger"><small>{formik.errors.email}</small></div> : null}
                                </div>
                                <div className="mb-3 col-12 col-sm-6">
                                    <label htmlFor="exampleFieldPassword1" className="form-label">Password</label>
                                    <Field type="password" className="form-control" name="password" />
                                    {formik.errors.password && formik.touched.password ? <div id="passwordHelp" className="form-text text-danger"><small>{formik.errors.password}</small></div> : null}
                                </div>
                                <div className="mb-3  col-12 col-sm-6">
                                    <label htmlFor="exampleFieldPassword1" className="form-label">Confirm Password</label>
                                    <Field type="password" className="form-control" name="confirmPassword" />
                                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div id="passwordHelp" className="form-text text-danger"><small>{formik.errors.confirmPassword}</small></div> : null}

                                </div>
                                <div className="mb-3 form-check">
                                    <Field type="checkbox" className="form-check-Field" name="marketingPreferences" value="emailer" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Emailer</label>
                                    <Field type="checkbox" className="form-check-Field" name="marketingPreferences" value="whatsapp" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Whatsapp</label>
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </>
    )
}