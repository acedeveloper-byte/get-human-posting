"use client";
import React, { useState, useEffect } from "react";
import { Card, Form, Col, Container, Row, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Dynamically import CKEditor (Disabling SSR)
const CKEditor = dynamic(() => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor), {
  ssr: false,
});

let ClassicEditor; // Declare ClassicEditor globally

const Page = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorValue, setEditorValue] = useState("");
  const [user_data, setUser_data] = useState(false)
  // Load ClassicEditor only on the client side
  useEffect(() => {
    import("@ckeditor/ckeditor5-build-classic").then((mod) => {
      ClassicEditor = mod.default;
      setEditorLoaded(true);
    });

    if (localStorage.getItem("auth_user") === null) {
      setUser_data(true)
    } else {
      setUser_data(false)

    }
  }, []);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Call your API function here
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
                  <Form.Control
                    type="text"
                    placeholder="Enter Category"
                    {...formik.getFieldProps("category")}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                {editorLoaded ? (
                  <CKEditor
                    editor={ClassicEditor}
                    data={editorValue}
                    onChange={(event, editor) => {
                      const content = editor.getData();
                      setEditorValue(content);
                      formik.setFieldValue("content", content);
                    }}
                  />
                ) : (
                  <p>Loading editor...</p>
                )}
                {formik.touched.content && formik.errors.content && (
                  <div className="text-danger">{formik.errors.content}</div>
                )}
              </Form.Group>

              {user_data === true ?
                <Button type="submit">Submit Form</Button>
                :
                <Button type="">Please login to create a post</Button>
              }
            </Form>
          </Container>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default Page;
