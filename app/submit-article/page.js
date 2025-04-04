"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Col, Container, Row, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

const page = () => {
  const [user_data, setUser] = useState(false);
  const editorRef = useRef(null);
  const router = useRouter()
  useEffect(() => {
    if (localStorage.getItem("auth_data")) {
      setUser(JSON.parse(localStorage.getItem("auth_data")))
    }

  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
    category: Yup.string().required("Category is required"),
    file: Yup.string().required("file is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      category: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log("Form submitted", values);
    },
  });

  return (
    <>
      <Header />
      <Card className="write-with-us">
        <Card.Header>Write With Us</Card.Header>
        <Card.Body>
          <Container fluid>
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    {...formik.getFieldProps("title")}
                    isInvalid={formik.touched.title && formik.errors.title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.title}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="4" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select {...formik.getFieldProps("category")}>
                    {[
                      { "value": "", "label": "Choose Categories" },
                      { "value": "413", "label": "Business" },
                      { "value": "410", "label": "Design" },
                      { "value": "7", "label": "Domain Names" },
                      { "value": "426", "label": "Education" },
                      { "value": "411", "label": "Entertainment" },
                      { "value": "416", "label": "Home & Lifestyle" },
                      { "value": "425", "label": "Marketing" },
                      { "value": "6", "label": "Digital Marketing", "indent": true },
                      { "value": "5", "label": "SEO", "indent": true },
                      { "value": "4", "label": "Social Media", "indent": true },
                      { "value": "412", "label": "Music" },
                      { "value": "1", "label": "Other" },
                      { "value": "437", "label": "Politics" },
                      { "value": "436", "label": "Real Estate" },
                      { "value": "415", "label": "Sports" },
                      { "value": "414", "label": "Technology" },
                      { "value": "418", "label": "Travel" },
                      { "value": "299", "label": "Video" },
                      { "value": "8", "label": "Web Hosting" },
                      { "value": "9", "label": "Web Security" },
                      { "value": "417", "label": "Wellness" },
                      { "value": "10", "label": "Writing" }
                    ].map((item, index) => {
                      return (
                        <>
                          <option value={item.label}>{item.label}</option>
                        </>
                      )
                    }

                    )}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="4" controlId="file">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(event) => formik.setFieldValue("file", event.currentTarget.files[0])}
                  />
                </Form.Group>
              </Row>



              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Editor
                  apiKey='js3uunm9tdph718l08kpjj9r8xwtv0wpuezj2nzvnjnuvpsa'
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  value={formik.values.content}
                  onEditorChange={(content) => formik.setFieldValue("content", content)}
                  init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
                {formik.touched.content && formik.errors.content && (
                  <div className="text-danger">{formik.errors.content}</div>
                )}
              </Form.Group>

              {user_data === true ?
                <Button type="submit">Submit Form</Button>
                :
                <Button type="button" onClick={() => router.push("/login")}>Please login to create a post</Button>
              }
            </Form>
          </Container>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default page;
