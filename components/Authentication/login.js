'use client'
import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  // const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Function to handle API call
  const handleApiCall = async (values) => {
    try {
      const response = await fetch('https://api.acedigitalsolution.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during API call:', error);
      return { error: error.message };
    }
  };

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      const response = await handleApiCall(values);

      if (response.token) {
        console.log('Login successful:', response);
        localStorage.setItem('token', response.token); // Store token if needed
        navigate('/'); // Redirect to home page after login
      } else {
        alert('Login failed! Please check your credentials.');
      }
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <>
      <div className="split-form">
        <div className="image-side">
          <h2>Welcome Back!</h2>
          <p>Enter your details to access your account</p>
        </div>
        <div className="form-side">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
