"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactQuill from "react-quill";


const Page = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    file: Yup.mixed().required("File is required"),
    categoryName: Yup.string().required("Category name is required"),
    status: Yup.boolean().required("Category status is required"),
  });

const toolbar  = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ align: [] }],
  ["link", "image"],
  ["clean"], // Clear formatting option
]

  const handleSubmit = (values) => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");

    const formdata = new FormData();
    formdata.append("file", values.file);
    formdata.append("user_id", values.user_id);
    formdata.append("title", values.title);
    formdata.append("category", values.category);
    formdata.append("status", values.status);
    formdata.append("content", values.content);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch("http://192.168.1.8:7400/post/create-new-post", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };



  return (
    <>
      <Header />
      <div className="">
        <div className="">
          <h2 className="text-center">Create New Post</h2>
          <Formik
            initialValues={{
              file: null,
              categoryName: "",
              status: false,
              user_id: "",
              title: "",
              content: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                handleSubmit(values);
                resetForm(); // Reset form after successful submission
              } catch (error) {
                console.error("API Error:", error);
                alert("Error creating category!");
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="space-y-4">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <label>File</label>
                      <input
                        classname="cards-input"
                        type="file"
                        name="file"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                      />
                      <ErrorMessage
                        name="file"
                        component="div"
                        className="error"
                      />
                    </div>
                    {/* <div className="col-md-3">
                      <label>User Id</label>
                      <Field type="number" name="user_id" />
                      <ErrorMessage
                        name="user_id"
                        component="div"
                        className="error input-fleilds-border"
                      />
                    </div> */}

                    {/* title  Name Field */}
                    <div className="col-md-3">
                      <label>Title</label>
                      <Field type="text" name="title" />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="error"
                      />
                    </div>

                    {/* Category Name Field */}
                    <div className="col-md-3">
                      <label>Category Name</label>
                      <Field type="text" name="category" />
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="error"
                      />
                    </div>

                    {/* Category Status Field */}
                    <div className="col-md-3">
                      <label>Status</label>
                      <Field as="select" name="status">
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="error"
                      />
                    </div>

                    {/* Category Name Field */}
                    <div className="col-md-10">
                      <label>Content</label>
                      <Field type="text" name="content" />
                      <ErrorMessage
                        name="content"
                        component="div"
                        className="error"
                      />
                    </div>

                    <ReactQuill
    theme="snow"
    value={values.content}
    onChange={(value) => setFieldValue("content", value)}
    modules={toolbar}
  />

                    {/* Submit Button */}
                    <button
                      className="my-4 col-md-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
