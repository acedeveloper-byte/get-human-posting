// "use client";
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import { FaGithub, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";


// const Page = () => {
//   const router = useRouter();
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   return (
//     <>
// <Header/>
//     <div className="form-login-container  ">
//       <div className="card">
//         <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
//         <p className="text-gray-500 text-center mb-4">
//           Please login to your account
//         </p>

//         <Formik
//           initialValues={{ email: "", password: "" }}
//           validationSchema={validationSchema}
//           onSubmit={async (values, { setSubmitting, resetForm }) => {
//             const myHeaders = new Headers();
//             myHeaders.append("accept", "*/*");
//             myHeaders.append("Content-Type", "application/json");

//             const raw = JSON.stringify({
//               email: "mayank.kumarace@gmail.com",
//               password: "unique",
//             });

//             const requestOptions = {
//               method: "POST",
//               headers: myHeaders,
//               body: raw,
//               redirect: "follow",
//             };
//             try {
//               const response = await fetch(
//                 "http://192.168.1.8:7400/auth/login",
//                 requestOptions
//               );

//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }

//               const result = await response.json(); // Parsing JSON response
//               if (result.baseResponse.message === "REQUEST_FULLFILLED") {
//                 router.push("/");
//               }
//               console.log("Login Success:", result);
//               resetForm();
//             } catch (error) {
//               console.error("Login Error:", error);
//               alert("Login failed!");
//             }
//             setSubmitting(false);
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form className="space-y-4">
//               {/* Email Field */}
//               <div>
//                 <label className="flex items-center border rounded-lg p-2 bg-gray-100">
//                   <FaEnvelope className="text-gray-500 mr-2" />
//                   <Field
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="bg-transparent outline-none w-full"
//                   />
//                 </label>
//                 <ErrorMessage
//                   name="email"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label className="flex items-center border rounded-lg p-2 bg-gray-100">
//                   <FaLock className="text-gray-500 mr-2" />
//                   <Field
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="bg-transparent outline-none w-full"
//                   />
//                 </label>
//                 <ErrorMessage
//                   name="password"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Remember Me & Forgot Password */}
//               <div className="flex justify-between items-center text-sm text-gray-600">
//                 <label className="flex items-center space-x-2">
//                   <Field
//                     type="checkbox"
//                     name="remember"
//                     className="accent-blue-500"
//                   />
//                   <span>Remember me</span>
//                 </label>
//                 <a href="#" className="text-blue-500 hover:underline">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className=" my-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Logging in..." : "Login"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>

// <Footer/>
//     </>
//   );
// };

// export default Page;

'use client'
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Login from "@/components/Authentication/login.js"

const page = () => {
  return (
    <>
      <Header />
        <section style ={{ height :  "50vh" , margin:"10%"}}>
        <Login />
      </section>
      <Footer />
    </>
  )
}


export default page;