'use client';
import React from 'react';
import { useFormik } from 'formik';
// import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Register = () => {
//   const navigate = useNavigate();  // Initialize useNavigate

  // Function to handle API call
  const handleApiCall = async (values) => {
    try {
      const response = await fetch('https://api.acedigitalsolution.com/auth/register', {
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
      return { error: error.message };  // Ensure error structure matches API expectations
    }
  };

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      user_name: '',
      email: '',
      phone: '',
      password: '',
      website: '',
    },
    onSubmit: async (values) => {
      const response = await handleApiCall(values);

      // Adjust this according to the API response format
      if (response && response.success) {
        console.log('Registration successful:', response);
        alert('Registration successful! Please login.');
        navigate('/login'); // Redirect to login page after successful registration
      } else {
        alert(`Registration failed! Error: ${response.error || 'Unknown error'}`);
      }
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
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            value={values.phone}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={values.password}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            required
            onChange={handleChange}
            value={values.website}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
