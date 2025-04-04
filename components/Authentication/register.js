'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { handleRegisterApiCall } from '@/utils/apicall/register_api';
import { Spinner } from 'react-bootstrap';

const Register = () => {
  const [loading, setloading] = useState(false)
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      user_name: '',
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await handleRegisterApiCall(values, router, setloading);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <div className="split-form">
      <div className="image-side">
        <h2>Join Us!</h2>
        <p>Create an account to get started</p>
      </div>
      <div className="form-side">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            placeholder="User Name"
            required
            onChange={handleChange}
            value={values.user_name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={values.email}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={values.password}
          />

          <button type="submit">{loading ? <Spinner animation="border" /> : "Register"}</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
