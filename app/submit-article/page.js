"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Guest_Posting_APi } from "@/utils/apicall/create_post";

const page = () => {
  const [user_data, setUser] = useState(false);
  const [loading, setloading] = useState(false)
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
    file: Yup.mixed()
      .required("File is required")
      .test("fileExists", "Please upload a file", value => value instanceof File)
      .test("fileType", "Only JPG and PNG files are allowed", value => {
        if (!value) return false;
        const allowedTypes = ['image/jpeg', 'image/png'];
        return allowedTypes.includes(value.type);
      })
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
      const valuess = { title: values.title, file: values.file, status: true, content: values.content, category: values.category, user_id: user_data._id }

      await Guest_Posting_APi(valuess, router, setloading)

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
                <Form.Group as={Col} md="8" controlId="title">
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

                <Form.Group as={Col} md="8" controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select {...formik.getFieldProps("category")}>
                    <option selected value={""}>Select Category</option>

                    {[

                      {
                        "value": "413",
                        "label": "Technology",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/tech.jpg",
                        "slug": "tech"
                      },
                      {
                        "value": "413",
                        "label": "Healthy Lifesyle",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/healthy.jpg",
                        "slug": "healthy"
                      },
                      {
                        "value": "413",
                        "label": "Fashion",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/fashion.jpg",
                        "slug": "fashion"
                      },
                      {
                        "value": "413",
                        "label": "Business",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/business.jpg",
                        "slug": "business"
                      },
                      {
                        "value": "410",
                        "label": "Design",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/design.jpg",
                        "slug": "design"
                      },
                      {
                        "value": "426",
                        "label": "Education",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/education.jpg",
                        "slug": "education"
                      },
                      {
                        "value": "411",
                        "label": "Entertainment",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/entertainment.jpg",
                        "slug": "entertainment"
                      },
                      {
                        "value": "416",
                        "label": "Home & Lifestyle",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/home-lifestyle.jpg",
                        "slug": "home-lifestyle"
                      },
                      {
                        "value": "6",
                        "label": "Digital Marketing",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/digital-marketing.jpg",
                        "slug": "digital-marketing"
                      },
                      {
                        "value": "4",
                        "label": "Social Media",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/social-media.jpg",
                        "slug": "social-media"
                      },
                      {
                        "value": "412",
                        "label": "Music",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/music.jpg",
                        "slug": "music"
                      },
                      {
                        "value": "437",
                        "label": "Politics",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/politics.jpg",
                        "slug": "politics"
                      },
                      {
                        "value": "436",
                        "label": "Real Estate",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/real-estate.jpg",
                        "slug": "real-estate"
                      },
                      {
                        "value": "415",
                        "label": "Sports",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/sports.jpg",
                        "slug": "sports"
                      },
                      {
                        "value": "418",
                        "label": "Travel",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/travel.jpg",
                        "slug": "travel"
                      },
                      {
                        "value": "417",
                        "label": "Wellness",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/wellness.jpg",
                        "slug": "wellness"
                      },
                      {
                        "value": "417",
                        "label": "Sales",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/sales.jpg",
                        "slug": "sales"
                      },
                      {
                        "value": "1",
                        "label": "Other",
                        "imgSrc": "https://api.acedigitalsolution.com/resources/category/other.jpg",
                        "slug": "other"
                      }
                    ]
                      .map((item, index) => {
                        return (
                          <>
                            <option value={item.slug !== "" && item.slug }>{item.label}</option>
                          </>
                        )
                      }

                      )}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" as={Col} md="8" controlId="file">
                  <Form.Label>Upload File</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(event) => formik.setFieldValue("file", event.currentTarget.files[0])}
                    isInvalid={formik.touched.file && !!formik.errors.file}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.file}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>



              <Form.Group className="mb-3" as={Col} md="8">
                <Form.Label>Content</Form.Label>
                <Editor
                  apiKey="js3uunm9tdph718l08kpjj9r8xwtv0wpuezj2nzvnjnuvpsa"
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  value={formik.values.content}
                  
                  onEditorChange={(content) => formik.setFieldValue("content", content)}
                  init={{
                    height: 500,
                    paste_as_text: false,  // Ensure it's not pasting as plain text
                    paste_data_images: true, // Optional: supports image pasting
                    paste_webkit_styles: 'all',
                    menubar: false,
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'link image | removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />
                {formik.touched.content && formik.errors.content && (
                  <div className="text-danger">{formik.errors.content}</div>
                )}
              </Form.Group>

              {/* <Button type="submit">Submit Form</Button> */}

              <Form.Group as={Col} md={8}>

                {user_data.user_name ?
                  <Button type="submit">{loading ? <Spinner /> : "Submit article"}</Button>
                  :
                  <Button type="button" onClick={() => router.push("/login")}>Please login to submit article</Button>
                }
              </Form.Group>
            </Form>
          </Container>
        </Card.Body>
      </Card>
      <Footer />
    </>
  );
};

export default page;
