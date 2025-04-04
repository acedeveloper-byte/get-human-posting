'use client'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/components/Header'
import "../globals.css";
import { GetAllPostByUserId } from '@/utils/apicall/GetAllPostByUserId';
import { HOST } from '@/utils/static';

const page = () => {
  const [data, setdata] = useState([])
  const [user, setuser] = useState({})
  useEffect(() => {
    const user_data = localStorage.getItem("auth_data");
    var parseData = JSON.parse(user_data)
    setuser(user_data)
    GetAllPostByUserId(parseData._id, setdata)
  }, [])


  console.log("data:", data)
  return (
    <>
      <div id="soledad_wrapper" class="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default">
        <div class="penci-header-wrap">

          <Header />
        </div>

        <div class="container penci_sidebar right-sidebar">
          <div className='row'>
            <div class="col-md-8 penci-layout-grid penci-main-sticky-sidebar">
              <div class="theiaStickySidebar">

               
                <ul data-layout="grid" class="penci-wrapper-data penci-grid">
                  {data.map((item, index) => {
                    return (

                      <li class="grid-style grid-overlay-meta">
                        <article id="post-434" class="item hentry">
                          <div class="thumbnail">
                            <a
                              href="../../gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/"
                              title={item.title} className='text-decoration-none'>
                              <img
                                src={`${HOST}resources/post/${item.image}`}
                                alt="Post Image"
                                loading="lazy" />
                            </a>
                          </div>

                          <div class="grid-header-box">
                            <span class="cat">
                              <a class="penci-cat-name penci-cat-3" href="#" rel="category tag">
                                <span>Fashion</span>
                              </a>
                            </span>

                            <h2 class="penci-entry-title entry-title grid-title penci_grid_title_df">
                              <a href="../../gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/" className='text-decoration-none fs-5' >
                                {item.title}
                              </a>
                            </h2>

                            <div class="penci-hide-tagupdated">
                              <span class="author-italic author vcard">
                                by <a class="author-url url fn n" href="">{user?.user_name ? user.user_name : ""}</a>
                              </span>
                              <p class="entry-date published" >{item.createdAt}</p>
                            </div>

                          </div>

                          {/* <div class="item-content entry-content">
                            <div dangerouslySetInnerHTML={{ __html: item.content }} />
                          </div> */}

                          <div class="penci-readmore-btn penci-btn-make-button penci-btn-align-center">
                            <a class="penci-btn-readmore" href="../../gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/">
                              Read The Article <i class="penci-faicon fa fa-angle-double-right"></i>
                            </a>
                          </div>
                        </article>
                      </li>
                    )
                  })}


                </ul>

              </div>
            </div>
            <div
              class="col-md-4 penci-sidebar-right penci-sidebar-content style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right penci-sticky-sidebar">
              <div class="theiaStickySidebar">
                <aside id="penci_social_widget-2" class="widget penci_social_widget">
                  <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Keep in touch</span></h3>
                  <div class="widget-social pc_aligncenter show-text remove-border-radius penci-social-colored "> <a
                    href="" aria-label="Facebook" rel="noreferrer" target="_blank"><i
                      class="penci-faicon fa fa-facebook" style={{ fontSize: "14px" }}></i> <span
                        style={{ fontSize: "13px" }}>Facebook</span></a> <a href="" aria-label="Twitter"
                          rel="noreferrer" target="_blank"><i class="penci-faicon penciicon-x-twitter"
                            style={{ fontSize: "14px" }}></i> <span style={{ fontSize: "13px" }}>Twitter</span></a> <a
                              href="https:" aria-label="Instagram" rel="noreferrer" target="_blank"><i
                                class="penci-faicon fa fa-instagram" style={{ fontSize: "14px" }}></i> <span
                                  style={{ fontSize: "13px" }}>Instagram</span></a> <a href=""
                                    aria-label="Pinterest" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-pinterest"
                                      style={{ fontSize: "14px" }}></i> <span style={{ fontSize: "13px" }}>Pinterest</span></a> <a
                                        href="" aria-label="Youtube" rel="noreferrer" target="_blank"><i
                                          class="penci-faicon fa fa-youtube-play" style={{ fontSize: "14px" }}></i> <span
                                            style={{ fontSize: "13px" }}>Youtube</span></a> <a
                                              href=""
                                              aria-label="Email" rel="noreferrer" target="_blank"><i class="penci-faicon fa fa-envelope"
                                                style={{ fontSize: "14px" }}></i> <span style={{ fontSize: "13px" }}>Email</span></a> </div>
                </aside>
                <aside id="c-4" class="widget_text widget widget_c">
                  <div class="textwidget c-widget"><a href="https://1.envato.market/YYJ4P" target="_blank"
                    rel="noopener"><img class=" penci-lazy penci-lazy"
                      src="/assets/wp-content/uploads/2021/07/imgsidebar.jpg"
                      alt="Top Selling Multipurpose WP Theme" width="400" height="333" /></a></div>
                </aside>
                <aside id="penci_popular_news_widget-2" class="widget penci_popular_news_widget">
                  <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Popular Posts</span></h3>
                  <ul id="penci-popularwg-2281"
                    data-settings='{"hide_thumb":"","show_author":"","show_comment":"","show_postviews":"on","showborder":"","row_gap":"","imgwidth":"100","ptfsfe":"","ptfs":"13","pmfs":"12","image_type":"default","type":"all","title_length":"8","number":"5","offset":"","categories":"","featured":"","allfeatured":"","thumbright":"","twocolumn":"","featured2":"","ordernum":"","postdate":"","icon":"","cats_id":"all","tags_id":"all","ptype":"","taxonomy":"","tax_ids":"","sticky":"on"}'
                    data-paged="1" data-action="penci_popular_news_ajax" data-mes="Sorry, No more posts" data-max="16"
                    class="side-newsfeed display-order-numbers order-numbers-1">
                    <li class="penci-feed">
                      <span class="order-border-number">
                        <span class="number-post">1</span>
                      </span>
                      <div class="side-item">
                        <div class="side-image">
                          <a
                            href="../../killing-comments-wont-cure-our-toxic-internet-culture/"
                            rel="bookmark"
                            title="Killing Comments Won’t Cure Our Toxic Internet Culture">
                            <img
                              src="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg"
                              alt="Killing Comments Won’t Cure Our Toxic Internet Culture"
                              class="small-fix-size"
                              loading="lazy" />
                          </a>
                        </div>
                        <div class="side-item-text">
                          <h4 class="side-title-post">
                            <a
                              href="../../killing-comments-wont-cure-our-toxic-internet-culture/"
                              rel="bookmark"
                              title="Killing Comments Won’t Cure Our Toxic Internet Culture">
                              Killing Comments Won’t Cure Our Toxic Internet Culture
                            </a>
                          </h4>
                          <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below">
                            <span class="side-item-meta side-wdate">
                              <time class="entry-date published" datetime="2021-07-30T08:28:29+00:00">July 30, 2021</time>
                            </span>
                            <span class="side-item-meta side-wviews">21.3K views</span>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="penci-feed">
                      <span class="order-border-number">
                        <span class="number-post">1</span>
                      </span>
                      <div class="side-item">
                        <div class="side-image">
                          <a
                            href="../../killing-comments-wont-cure-our-toxic-internet-culture/"
                            rel="bookmark"
                            title="Killing Comments Won’t Cure Our Toxic Internet Culture">
                            <img
                              src="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688876_1280.jpg"
                              alt="Killing Comments Won’t Cure Our Toxic Internet Culture"
                              class="small-fix-size"
                              loading="lazy" />
                          </a>
                        </div>
                        <div class="side-item-text">
                          <h4 class="side-title-post">
                            <a
                              href="../../killing-comments-wont-cure-our-toxic-internet-culture/"
                              rel="bookmark"
                              title="Killing Comments Won’t Cure Our Toxic Internet Culture">
                              Killing Comments Won’t Cure Our Toxic Internet Culture
                            </a>
                          </h4>
                          <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below">
                            <span class="side-item-meta side-wdate">
                              <time class="entry-date published" datetime="2021-07-30T08:28:29+00:00">July 30, 2021</time>
                            </span>
                            <span class="side-item-meta side-wviews">21.3K views</span>
                          </div>
                        </div>
                      </div>
                    </li>


                  </ul>

                </aside>
                <aside id="categories-5" class="widget widget_categories">
                  <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Categories</span></h3>
                  <ul>
                    <li class="cat-item cat-item-7"><a href="../../category/life-style/culture/">Culture <span
                      class="category-item-count">(11)</span></a> </li>
                    <li class="cat-item cat-item-3"><a href="../../category/fashion/">Fashion <span
                      class="category-item-count">(11)</span></a> </li>
                    <li class="cat-item cat-item-4"><a href="../../category/featured/">Featured <span
                      class="category-item-count">(9)</span></a> </li>
                    <li class="cat-item cat-item-5"><a href="../../category/food/">Food <span
                      class="category-item-count">(11)</span></a> </li>
                    <li class="cat-item cat-item-8"><a href="../../category/life-style/healthy-living/">Healthy
                      Living <span class="category-item-count">(11)</span></a> </li>
                    <li class="cat-item cat-item-9"><a href="../../category/life-style/style/">Style <span
                      class="category-item-count">(11)</span></a> </li>
                    <li class="cat-item cat-item-10"><a href="../../category/technology/">Technology <span
                      class="category-item-count">(12)</span></a> </li>
                    <li class="cat-item cat-item-11"><a href="../../category/travel/">Travel <span
                      class="category-item-count">(12)</span></a> </li>
                  </ul>
                </aside>
                <aside id="mc4wp_form_widget-2" class="penci-mc4wp-widget penci-mailchimp-s1 widget widget_mc4wp_form_widget">
                  <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Subscribe Newsletter</span></h3>

                  <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-498" method="post" data-id="498"
                    data-name="Mailchimp Form">
                    <div class="mc4wp-form-fields">
                      <p class="mdes">Subscribe our newsletter for latest news, service & promo. Let's stay updated!</p>
                      <p class="mname"><input type="text" name="NAME" placeholder="Name..." /></p>
                      <p class="memail"><input type="email" id="mc4wp_email" name="EMAIL" placeholder="Email..." required />
                      </p>
                      <p class="msubmit"><input type="submit" value="Subscribe" /></p>
                    </div><label style={{ display: "none !important" }}>Leave this field empty if you're human: <input type="text"
                      name="_mc4wp_honeypot" tabindex="-1" autocomplete="off" /></label><input type="hidden"
                        name="_mc4wp_timestamp" value="1743747014" /><input type="hidden" name="_mc4wp_form_id"
                          value="498" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                    <div class="mc4wp-response"></div>
                  </form>
                </aside>
              </div>
            </div>
          </div>

        </div>
        <div class="clear-footer"></div>
        <div id="widget-area">
          <div class="container">
            <div class="footer-widget-wrapper footer-widget-style-1">
              <aside id="penci_about_widget-2" class="widget penci_about_widget">
                <h4 class="widget-title penci-border-arrow"><span class="inner-arrow">About Us</span></h4>
                <div id="penci-aboutmewg-9581" class="about-widget pc_alignleft">
                  <img loading="lazy"
                    class=" penci-lazy penci-widget-about-image nopin penci-lazy" nopin="nopin" width="500" height="280"
                    src="/assets/wp-content/uploads/2021/07/about-22.jpg" alt="About Us" />
                  <div class="about-me-desc">
                    <p>Soledad is one of the best WordPress themes for multipurpose, include: news, magazine, blog,
                      corporate, creative, eCommerce...etc It helps you build any professional website in a very short time.
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            <div class="footer-widget-wrapper footer-widget-style-1 last">
              <aside id="categories-4" class="widget widget_categories">
                <h4 class="widget-title penci-border-arrow"><span class="inner-arrow">Categories</span></h4>
                <ul>
                  <li class="cat-item cat-item-7"><a href="../../category/life-style/culture/">Culture <span
                    class="category-item-count">(11)</span></a> </li>
                  <li class="cat-item cat-item-3"><a href="../../category/fashion/">Fashion <span
                    class="category-item-count">(11)</span></a> </li>
                  <li class="cat-item cat-item-4"><a href="../../category/featured/">Featured <span
                    class="category-item-count">(9)</span></a> </li>
                  <li class="cat-item cat-item-5"><a href="../../category/food/">Food <span
                    class="category-item-count">(11)</span></a> </li>
                  <li class="cat-item cat-item-8"><a href="../../category/life-style/healthy-living/">Healthy
                    Living <span class="category-item-count">(11)</span></a> </li>
                  <li class="cat-item cat-item-9"><a href="../../category/life-style/style/">Style <span
                    class="category-item-count">(11)</span></a> </li>
                  <li class="cat-item cat-item-10"><a href="../../category/technology/">Technology <span
                    class="category-item-count">(12)</span></a> </li>
                  <li class="cat-item cat-item-11"><a href="../../category/travel/">Travel <span
                    class="category-item-count">(12)</span></a> </li>
                </ul>
              </aside>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default page
