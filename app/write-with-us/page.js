"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Page = () => {
  // Validation Schema using Yup
  const validationSchema = Yup.object({
    file: Yup.mixed().required("File is required"),
    categoryName: Yup.string().required("Category name is required"),
    categoryStatus: Yup.boolean().required("Category status is required"),
  });

  return (
    <div className="form-login-container my-5 py-5">
      <div className="card">
        <h2 className="text-center">Create Category</h2>
        <Formik
          initialValues={{
            file: null,
            categoryName: "",
            categoryStatus: true,
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const formData = new FormData();
            formData.append("file", values.file);
            formData.append("categoryName", values.categoryName);
            formData.append("categoryStatus", values.categoryStatus);

            try {
              const response = await axios.post(
                "http://192.168.1.8:7400/category/create-new-category",
                formData,
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );

              console.log("API Response:", response.data);
              alert("Category created successfully!");
              resetForm(); // Reset form after successful submission
            } catch (error) {
              console.error("API Error:", error);
              alert("Error creating category!");
            }

            setSubmitting(false);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="space-y-4">
              {/* File Upload Field */}
              <div>
                <label>File</label>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => {
                    setFieldValue("file", event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage name="file" component="div" className="error" />
              </div>

              {/* Category Name Field */}
              <div>
                <label>Category Name</label>
                <Field type="text" name="categoryName" />
                <ErrorMessage
                  name="categoryName"
                  component="div"
                  className="error"
                />
              </div>

              {/* Category Status Field */}
              <div>
                <label>Category Status</label>
                <Field as="select" name="categoryStatus">
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </Field>
                <ErrorMessage
                  name="categoryStatus"
                  component="div"
                  className="error"
                />
              </div>

              {/* Submit Button */}
              <button className="my-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page;
