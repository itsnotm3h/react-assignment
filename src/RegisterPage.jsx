import React from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


export default function RegisterPage() {

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        salutation: '',
        marketingPreferences: [],
        country: ''
    };

    const handleSubmit = (values, formikHelpers) => {
        // Here you would typically make an API call to register the user
        console.log('Form values:', values);
        formikHelpers.setSubmitting(false);
    };

    return (
        <>
            <div className="h-100 formField m-auto">
                <div className="m-5">
                    <div className="mb-5"><h1>Registration</h1></div>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}

                    >
                        {(formik) => (
                            <Form className="row">
                                <div className="d-flex w-100">
                                    <div className="mb-3 col-2">
                                    <label for="exampleInputEmail1" class="form-label">Salutations</label>
                                    <Field  type="text" class="form-control" id="exampleInputEmail1" name="salutation" />
                                        <div id="nameHelp" class="form-text">How may we adress you.</div>
                                </div>
                                <div className="mb-3 ms-3 col-10">
                                    <label for="exampleInputEmail1" class="form-label">Name</label>
                                    <Field  type="text" class="form-control" id="exampleInputEmail1" name="name"/>
                                        <div id="nameHelp" class="form-text">A name to leave in history.</div>
                                </div>
                                </div>
                                <div className="mb-3 col-12">
                                    <label for="exampleFieldEmail1" className="form-label">Email</label>
                                    <Field type="email" className="form-control" id="exampleFieldEmail1" name="email" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 col-12 col-sm-6">
                                    <label for="exampleFieldPassword1" className="form-label">Password</label>
                                    <Field type="password" className="form-control" id="exampleFieldPassword1" name="password" />
                                </div>
                                <div className="mb-3  col-12 col-sm-6">
                                    <label for="exampleFieldPassword1" className="form-label">Confirm Password</label>
                                    <Field type="password" className="form-control" id="exampleFieldPassword1" name="confirmPassword"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <Field type="checkbox" className="form-check-Field" id="exampleCheck1" name="marketingPreferences" value="emailer"/>
                                    <label className="form-check-label" for="exampleCheck1">Emailer</label>
                                    <Field type="checkbox" className="form-check-Field" id="exampleCheck1" name="marketingPreferences" value="whatsapp"/>
                                    <label className="form-check-label" for="exampleCheck1">Whatsapp</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

        </>
    )
}