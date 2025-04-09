import { AllPostBytitle } from '@/utils/apicall/post_by_title'
import { HOST } from '@/utils/static'
import moment from 'moment'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
                            <aside id="penci_popular_news_widget-2" className="widget penci_popular_news_widget">
                                <h3 className="widget-title penci-border-arrow"><span className="inner-arrow">Popular Posts</span></h3>
                                <ul id="penci-popularwg-3738"
                                    data-settings='{"hide_thumb":"","show_author":"","show_comment":"","show_postviews":"on","showborder":"","row_gap":"","imgwidth":"100","ptfsfe":"","ptfs":"13","pmfs":"12","image_type":"default","type":"all","title_length":"8","number":"5","offset":"","categories":"","featured":"","allfeatured":"","thumbright":"","twocolumn":"","featured2":"","ordernum":"","postdate":"","icon":"","cats_id":"all","tags_id":"all","ptype":"","taxonomy":"","tax_ids":"","sticky":"on"}'
                                    data-paged="1" data-action="penci_popular_news_ajax" data-mes="Sorry, No more posts" data-max="16"
                                    className="side-newsfeed display-order-numbers order-numbers-1">
                                    <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">1</span> </span>
                                        <div className="side-item">
                                            <div className="side-image"> <a
                                                data-bgset="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/4-1-263x175.jpeg"
                                                className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                href="../killing-comments-wont-cure-our-toxic-internet-culture/index.html"
                                                title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture"> </a> </div>
                                            <div className="side-item-text">
                                                <h4 className="side-title-post"> <a
                                                    href="../killing-comments-wont-cure-our-toxic-internet-culture/index.html" rel="bookmark"
                                                    title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture"> Killing Comments
                                                    Won&#8217;t Cure Our Toxic Internet Culture </a> </h4>
                                                <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                    className="side-item-meta side-wdate"><time className="entry-date published"
                                                        datetime="2021-07-30T08:28:29+00:00">July 30, 2021</time></span> <span
                                                            className="side-item-meta side-wviews">21.3K views</span> </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">2</span> </span>
                                        <div className="side-item">
                                            <div className="side-image"> <a
                                                data-bgset="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/5-1-263x175.jpeg"
                                                className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                href="../how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                title="How To Get Your Partner On Board With A Healthy Lifestyle Change With You"> </a> </div>
                                            <div className="side-item-text">
                                                <h4 className="side-title-post"> <a
                                                    href="../how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                    rel="bookmark"
                                                    title="How To Get Your Partner On Board With A Healthy Lifestyle Change With You"> How To
                                                    Get Your Partner On Board With... </a> </h4>
                                                <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                    className="side-item-meta side-wdate"><time className="entry-date published"
                                                        datetime="2021-07-30T08:26:21+00:00">July 30, 2021</time></span> <span
                                                            className="side-item-meta side-wviews">18.8K views</span> </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">3</span> </span>
                                        <div className="side-item">
                                            <div className="side-image"> <a
                                                data-bgset="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/6-1-263x175.jpeg"
                                                className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                href="../a-fairytale-brand-pretty-little-thing-joins-fashion-top-brands-worldwide/index.html"
                                                title="&#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion Top Brands Worldwide">
                                            </a> </div>
                                            <div className="side-item-text">
                                                <h4 className="side-title-post"> <a
                                                    href="../a-fairytale-brand-pretty-little-thing-joins-fashion-top-brands-worldwide/index.html"
                                                    rel="bookmark"
                                                    title="&#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion Top Brands Worldwide">
                                                    &#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion... </a> </h4>
                                                <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                    className="side-item-meta side-wdate"><time className="entry-date published"
                                                        datetime="2021-07-30T08:24:33+00:00">July 30, 2021</time></span> <span
                                                            className="side-item-meta side-wviews">17.1K views</span> </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">4</span> </span>
                                        <div className="side-item">
                                            <div className="side-image"> <a
                                                data-bgset="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/2-1-263x175.jpeg"
                                                className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                href="../gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/index.html"
                                                title="Gemma Ward Used To Wish Fast Fashion Was Less Prevalent By Now"> </a> </div>
                                            <div className="side-item-text">
                                                <h4 className="side-title-post"> <a
                                                    href="../gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/index.html"
                                                    rel="bookmark" title="Gemma Ward Used To Wish Fast Fashion Was Less Prevalent By Now"> Gemma
                                                    Ward Used To Wish Fast Fashion Was... </a> </h4>
                                                <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                    className="side-item-meta side-wdate"><time className="entry-date published"
                                                        datetime="2021-07-30T08:31:58+00:00">July 30, 2021</time></span> <span
                                                            className="side-item-meta side-wviews">16.5K views</span> </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">5</span> </span>
                                        <div className="side-item">
                                            <div className="side-image"> <a
                                                data-bgset="https://soledaddemo.pencidesign.net/wp-content/uploads/2021/07/11-263x175.jpeg"
                                                className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                href="../countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                title="Countryside Versus Town? Don&#8217;t Turn This Into A War"> </a> </div>
                                            <div className="side-item-text">
                                                <h4 className="side-title-post"> <a
                                                    href="../countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                    rel="bookmark" title="Countryside Versus Town? Don&#8217;t Turn This Into A War">
                                                    Countryside Versus Town? Don&#8217;t Turn This Into A... </a> </h4>
                                                <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                    className="side-item-meta side-wdate"><time className="entry-date published"
                                                        datetime="2021-07-30T08:13:20+00:00">July 30, 2021</time></span> <span
                                                            className="side-item-meta side-wviews">15.7K views</span> </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

                            </aside>
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

