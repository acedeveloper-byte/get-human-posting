// "use client";
// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useRouter } from "next/navigation";
// import { FaEnvelope, FaLock, FaPhone, FaUser, FaGlobe } from "react-icons/fa";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// const Page = () => {
//   const router = useRouter();

//   const validationSchema = Yup.object({
//     user_name: Yup.string().required("user_name is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//     phone: Yup.string()
//       .matches(/^[0-9]+$/, "Phone number must be digits only")
//       .min(10, "Phone number must be at least 10 digits")
//       .required("Phone number is required"),
//   });

//   return (
//     <>
// <Header/>
//     <div className="form-login-container">
//       <div className="card">
//         <h2 className="text-2xl font-semibold text-center">Welcome Back</h2>
//         <p className="text-gray-500 text-center mb-4">
//           Please Register to your account
//         </p>

//         <Formik
//           initialValues={{
//             user_name: "",
//             email: "",
//             password: "",
//             phone: "",
//             website: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={async (values, { setSubmitting, resetForm}) => {
//             try {
//               const response = await fetch(
//                 "http://192.168.1.18:7400/auth/register",
//                 {
//                   method: "POST",
//                   headers: {
//                     Accept: "*/*",
//                     "Content-Type": "application/json",
//                   },
//                   body: JSON.stringify(values),
//                 }
//               );

//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }

//               const result = await response.json();
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
//               {/* user_name Field */}
//               <div>
//                 <label className="flex items-center border rounded-lg p-2 bg-gray-100">
//                   <FaUser e className="text-gray-500 mr-2" />
//                   <Field
//                     type="text"
//                     name="user_name"
//                     placeholder="Username"
//                     className="bg-transparent outline-none w-full"
//                   />
//                 </label>
//                 <ErrorMessage
//                   name="user_name"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

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

//               {/* Phone Field */}
//               <div>
//                 <label className="flex items-center border rounded-lg p-2 bg-gray-100">
//                   <FaPhone className="text-gray-500 mr-2" />
//                   <Field
//                     type="tel"
//                     name="phone"
//                     placeholder="Phone"
//                     className="bg-transparent outline-none w-full"
//                   />
//                 </label>
//                 <ErrorMessage
//                   name="phone"
//                   component="div"
//                   className="text-red-500 text-sm mt-1"
//                 />
//               </div>

//               {/* Phone Field */}
//               <div>
//                 <label className="flex items-center border rounded-lg p-2 bg-gray-100">
//                   <FaGlobe className="text-gray-500 mr-2" />
//                   <Field
//                     type="tel"
//                     name="website"
//                     placeholder="Website"
//                     className="bg-transparent outline-none w-full"
//                   />
//                 </label>
//                 <ErrorMessage
//                   name="website"
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
//                   Login Here
//                 </a>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="my-3 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? "Regsiter in..." : "Register"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>

//     <Footer/>
//     </>
//   );
// };

// export default Page;



'use client';
import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Register from "@/components/Authentication/register.js"

const page = () => {
  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  )
}



export default page