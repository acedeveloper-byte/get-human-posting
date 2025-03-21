import React from 'react'
import { useFormik } from 'formik'
import HOST from "@/utils/static.js"
const Login = () => {


    const handleApiCall = async(values) => {
        const myHeaders = new Headers();
            myHeaders.append("accept", "*/*");
            myHeaders.append("Content-Type", "application/json");

        const options = { 
            method :"POST",
            url :`${HOST}auth/login`,
            body :JSON.stringify({ 
                email : values.email,
                password:values.password
            }),
            redirect: "follow",
        }

        const fetchapi  = await axios.post(options)
        const resp =  await fetchapi

        console.log("resp:" , resp)
      }  
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: values => {
            handleApiCall(values)
        },
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
                <input type="email" placeholder="Email" required   onChange={handleChange} value={values.email} />
                <input type="password" placeholder="Password" required onChange={handleChange} value= {values.password}   />
                <button type="submit">Login</button>
            </form>
        </div>
    </div> 
    </>
  )
}

export default Login
