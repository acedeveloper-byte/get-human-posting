import { AllPostBytitle } from '@/utils/apicall/post_by_title'
import { HOST } from '@/utils/static'
import moment from 'moment'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RecentPosts from './RecentPosts'

const PostDetails = () => {

    const params = useParams()
    const [data, setData] = useState([])
    const [user_data, setUser] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setUser(JSON.parse(localStorage.getItem("auth_data")))
        }

        const callapi = async () => {
            await AllPostBytitle(setData, params.title)
        }
        callapi()
    }, [])


    return (

        <Container fluid className='penci-single-block inview'>
            <Row>
                <Col md={8}>
                    <div style={{
                        backgroundImage: `url(${HOST}resources/post/${data.image})`,
                        backgroundSize: "cover", height: "300px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                    }}>

                    </div>
                    <div className="container mt-2">
                        <div className='row'>

                            <Col md={2}>
                                Author : <b>{user_data?.user_name}</b>
                            </Col>
                            <Col md={3}>
                                Published on : <b>{moment(data.createdAt).format("MMMM Do YYYY")}</b>
                            </Col>
                        </div>
                    </div>
                    <div className="container mt-4" dangerouslySetInnerHTML={{
                        __html: data.content
                    }} />
                </Col>
                <Col md={4}>
                    <div id="sidebar"
                        className="penci-sidebar-right penci-sidebar-content style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right penci-sticky-sidebar">
                        <div className="theiaStickySidebar">
                      
                            <aside id="custom_html-4" className="widget_text widget widget_custom_html">
                                <div className="textwidget custom-html-widget"><a href="https://1.envato.market/YYJ4P" target="_blank"
                                    rel="noopener"><img className=" penci-lazy penci-lazy"
                                        src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20400%20333'%3E%3C/svg%3E"
                                        data-src="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/imgsidebar.jpg"
                                        alt="" width="400" height="333" /></a></div>
                            </aside>
                            
                          <RecentPosts />

                            <aside id="categories-5" className="widget widget_categories">
                                <h3 className="widget-title penci-border-arrow"><span className="inner-arrow">Categories</span></h3>
                                <ul>
                                    <li className="cat-item cat-item-7"><a href="../category/life-style/culture/index.html">Culture <span
                                        className="category-item-count">(11)</span></a> </li>
                                    <li className="cat-item cat-item-3"><a href="../category/fashion/index.html">Fashion <span
                                        className="category-item-count">(11)</span></a> </li>
                                    <li className="cat-item cat-item-4"><a href="">Featured <span
                                        className="category-item-count">(9)</span></a> </li>
                                    <li className="cat-item cat-item-5"><a href="../category/food/index.html">Food <span
                                        className="category-item-count">(11)</span></a> </li>
                                    <li className="cat-item cat-item-8"><a href="../category/life-style/healthy-living/index.html">Healthy
                                        Living <span className="category-item-count">(11)</span></a> </li>
                                    <li className="cat-item cat-item-9"><a href="../category/life-style/style/index.html">Style <span
                                        className="category-item-count">(11)</span></a> </li>
                                    <li className="cat-item cat-item-10"><a href="../category/technology/index.html">Technology <span
                                        className="category-item-count">(12)</span></a> </li>
                                    <li className="cat-item cat-item-11"><a href="../category/travel/index.html">Travel <span
                                        className="category-item-count">(12)</span></a> </li>
                                </ul>
                            </aside>
                            <aside id="mc4wp_form_widget-2"
                                className="penci-mc4wp-widget penci-mailchimp-s1 widget widget_mc4wp_form_widget">
                                <h3 className="widget-title penci-border-arrow"><span className="inner-arrow">Subscribe Newsletter</span></h3>

                                <form id="mc4wp-form-1" className="mc4wp-form mc4wp-form-498" method="post" data-id="498"
                                    data-name="Mailchimp Form">
                                    <div className="mc4wp-form-fields">
                                        <p className="mdes">Subscribe our newsletter for latest news, service & promo. Let's stay updated!</p>
                                        <p className="mname"><input type="text" name="NAME" placeholder="Name..." /></p>
                                        <p className="memail"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Email..."
                                            required /></p>
                                        <p className="msubmit"><input type="submit" value="Subscribe" /></p>
                                    </div><label style={{ display: "none !important;" }}>Leave this field empty if you're human: <input
                                        type="text" name="_mc4wp_honeypot" tabindex="-1" autocomplete="off" /></label><input type="hidden"
                                            name="_mc4wp_timestamp" value="1743754618" /><input type="hidden" name="_mc4wp_form_id"
                                                value="498" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                    <div className="mc4wp-response"></div>
                                </form>
                            </aside>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default PostDetails

