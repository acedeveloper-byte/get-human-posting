"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, Form, Col, Container, Row, Button, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Editor } from '@tinymce/tinymce-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, useRouter } from "next/navigation";
import { Guest_Posting_APi } from "@/utils/apicall/create_post";
import { UpdatePost } from "@/utils/apicall/UpdatePost";
import { HOST } from "@/utils/static";
import { AllPostBytitle } from "@/utils/apicall/post_by_title";

const page = () => {
    const params = useParams()
    const [user_data, setUser] = useState(false);
    const [data_blog, setData_blog] = useState({});

    const [loading, setloading] = useState(false)
    const editorRef = useRef(null);
    const router = useRouter()

    const [preview, setPreview] = useState({});
    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setUser(JSON.parse(localStorage.getItem("auth_data")))
        }
        const callapi = async () => {
            await AllPostBytitle(setData_blog, params.updatepost)
        }
        callapi()
    }, []);


    //  useEffect(() => {
    //         if (localStorage.getItem("auth_data")) {
    //             setUser(JSON.parse(localStorage.getItem("auth_data")))
    //         }
    //         const callapi = async () => {
    //             await AllPostBytitle(setData, params.title)
    //         }
    //         callapi()
    //     }, [])

    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        content: Yup.string().required("Content is required"),
        category: Yup.string().required("Category is required"),

    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: data_blog.title,
            content: data_blog.content,
            category: data_blog.category,
            file: null,
        },
        validationSchema,
        onSubmit: async (values) => {
            const valuess = { title: values.title, file: values.file ? values.file : JSON.stringify(data_blog.imageObject), status: true, url: params.updatepost, content: values.content, category: values.category, user_id: user_data._id }
            await UpdatePost(valuess, router, setloading)
        },
    });

    console.log("preview:", preview?.name)
    return (
        <>
            <Header />
            <Card className="write-with-us">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Container fluid>
                        <Form noValidate onSubmit={formik.handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="8" controlId="title">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"

                                        placeholder={data_blog.title}
                                        {...formik.getFieldProps("title")}
                                        isInvalid={formik.touched.title && formik.errors.title}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {formik.errors.title}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="8" controlId="category">
                                    <Form.Label>Current Category {data_blog.category}</Form.Label>
                                    <Form.Select {...formik.getFieldProps("category")}>
                                        {[
                                            { "value": "Lifestyle", "label": "Lifestyle" },
                                            { "value": "Latest", "label": "Latest Blog" },
                                            { "value": "Featured", "label": "Featured Blog" },
                                            { "value": "Tech", "label": "Technology" },
                                            { "value": "Healthy", "label": "Healthy Lifestyle" },
                                            { "value": "Fashion", "label": "Fashion" },
                                            { "value": "Business", "label": "Business" },
                                            { "value": "Design", "label": "Design" },
                                            { "value": "Domain Names", "label": "Domain Names" },
                                            { "value": "Education", "label": "Education" },
                                            { "value": "Entertainment", "label": "Entertainment" },
                                            { "value": "Home & Lifestyle", "label": "Home & Lifestyle" },
                                            { "value": "Marketing", "label": "Marketing" },
                                            { "value": "Digital Marketing", "label": "Digital Marketing" },
                                            { "value": "SEO", "label": "SEO" },
                                            { "value": "Social Media", "label": "Social Media" },
                                            { "value": "Music", "label": "Music" },
                                            { "value": "Other", "label": "Other" },
                                            { "value": "Politics", "label": "Politics" },
                                            { "value": "Real Estate", "label": "Real Estate" },
                                            { "value": "Sports", "label": "Sports" },
                                            { "value": "Technology", "label": "Technology" },
                                            { "value": "Travel", "label": "Travel" },
                                            { "value": "Video", "label": "Video" },
                                            { "value": "Web Hosting", "label": "Web Hosting" },
                                            { "value": "Web Security", "label": "Web Security" },
                                            { "value": "Wellness", "label": "Wellness" },
                                            { "value": "Writing", "label": "Writing" }
                                        ].map((item, index) => {
                                            return (
                                                <>
                                                    <option selected value={""}>Select Category</option>
                                                    <option value={item.value}>{item.label}</option>
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
                                        onChange={(event) => {
                                            formik.setFieldValue("file", event.currentTarget.files[0])
                                            setPreview(event.currentTarget.files[0]);
                                        }}
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
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px  } '
                                    }}
                                />
                                {formik.touched.content && formik.errors.content && (
                                    <div className="text-danger">{formik.errors.content}</div>
                                )}
                            </Form.Group>

                            {/* <Button type="submit">Submit Form</Button> */}

                            <Form.Group as={Col} md={8}>

                                {user_data.user_name ?
                                    <Button type="submit">{loading ? <Spinner /> : "Submit Form"}</Button>
                                    :
                                    <Button type="button" onClick={() => router.push("/login")}>Please login to create a post</Button>
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
