'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { handleApiCall } from '@/utils/apicall/login';
import { useRouter } from 'next/navigation';
import { Spinner } from 'react-bootstrap';


const Login = () => {


  const router = useRouter()
  // const navigate = useNavigate(); // Initialize useNavigate for redirection
  const [loading, setloading] = useState(false)
  // Function to handle API call


  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await handleApiCall(values, router, setloading);

    },
  });

  useEffect(() => {
    if (
      localStorage.getItem("auth_data")
    ) {
      const auth_data = JSON.parse(localStorage.getItem("auth_data"))
      console.log(auth_data)

      if (auth_data?.user_name) {
        return;
      } else {
        router.push("/")
      }

    }
  }, [])


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
            <button type="submit"> {loading ? <Spinner animation="border" /> : "Login"}</button>
          </form>
          <span><strong>Don't have an account ?</strong> <a href="/register" className="text-decoration-none text-blue">Click here</a></span>
        </div>
      </div>
    </>
  );
};

export default Login;
