import React from 'react'
import { useFormik } from 'formik'
import { HOST } from '@/utils/static';
import axios from 'axios';
import { handleApiCall } from '@/utils/apicall/login';
const Login = () => {



  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => { // ✅ Make onSubmit async

      const response = await handleApiCall(values); // ✅ Wait for response
      console.log("DAta check", response); // ✅ Now logs actual API data
    }
  });

  const { values, handleChange, handleSubmit, onFocus, onBlur } = formik;


  return (
    <>
      <div class="split-form ">
        <div class="image-side">
          <h2>Welcome Back!</h2>
          <p>Enter your details to access your account</p>
        </div>
        <div class="form-side">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} value={values.email} />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} value={values.password} />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
