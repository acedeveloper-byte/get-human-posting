
'use client'
import { HOST } from '@/utils/static'
import React, { useEffect, useState } from 'react'
import RecentPosts from '../RecentPosts'
import moment from 'moment'
import axios from 'axios'

const DATA = [
    {
        id: 1,
        image: "placeholder.png"
    },
    {
        id: 2,
        image: "placeholder.png"
    },
    {
        id: 3,
        image: "placeholder.png"
    },
    {
        id: 4,
        image: "placeholder.png"
    },
    {
        id: 5,
        image: "placeholder.png"
    },
]

const MultiCategory = () => {




    const [healthyData, setHealthyData] = useState([]);
    const [salesData, setSalesData] = useState([]);
    const [businessData, setBusinessData] = useState([]);
  
    useEffect(() => {
      const fetchAllData = async () => {
        try {
          const [ healthy, sales, business] = await Promise.all([
            axios.get(`${HOST}post/fetch-all-post-by-category/healthy`),
            axios.get(`${HOST}post/fetch-all-post-by-category/sales`),
            axios.get(`${HOST}post/fetch-all-post-by-category/business`)
          ]);
  
          setHealthyData(healthy.data.response);
          setSalesData(sales.data.response);
          setBusinessData(business.data.response);
  
          console.log('All categories fetched');
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
  
      fetchAllData();
    }, []);

    var conditionaldata =  salesData.length !==0 ? salesData : DATA
        var conditionaldatahealty =  healthyData.length !==0 ? healthyData : DATA
        var conditionaldataBusiness =  businessData.length !==0 ? businessData : DATA
    
    
  return (
    <>
         <section
                class="penci-section penci-enSticky penci-structure-22 elementor-section elementor-top-section elementor-element elementor-element-666868b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="666868b" data-element_type="section">
                <div class="elementor-container elementor-column-gap-wide">
                    <div
                        class="penci-ercol-66 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-3e53796"
                        data-id="3e53796" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-7f4bb96 elementor-widget elementor-widget-penci-featured-cat"
                                data-id="7f4bb96" data-element_type="widget" data-widget_type="penci-featured-cat.default">
                                <div class="elementor-widget-container">
                                    <div id="pencifeatured_cat_8861" class="penci-featured-cat-sc">
                                        <section class="home-featured-cat mag-cat-style-10">
                                            <div
                                                class="penci-border-arrow penci-homepage-title penci-magazine-title style-13 pcalign-left pciconp-right pcicon-right">
                                                <h3 class="inner-arrow"> <span> <a href="#">Lastest in Sales</a> </span> </h3>
                                      

                                            </div>
                                            <div class="home-featured-cat-wrapper">
                                                <div class="home-featured-cat-content pwf-id-default style-10">

                                                    {conditionaldata.map((itex, index) => {

                                                        return (
                                                            <div class={index + 1 > 2 ? "mag-post-box hentry" : "mag-post-box hentry first-post"}>
                                                                <div class="magcat-thumb">
                                                                    <img class="penci-image-holder penci-lazy"
                                                                     src={ itex.type === "placeholder" ? itex.image :`${HOST}resources/post/${itex.image}`}
                                                                        href={`/${itex.url}`}
                                                                        title={`${itex.title}`} alt="travel" />
                                                                </div>
                                                                <div class="magcat-detail">
                                                                    <div class="mag-header">
                                                                        <h3 class="magcat-titlte entry-title"><a
                                                                            href={`/${itex.url}`}> {itex.title}</a> </h3>
                                                                        <div class="grid-post-box-meta mag-meta"> 
                                                                            <span
                                                                            class="featc-author author-italic author vcard"> <a
                                                                                class="author-url url fn n" href={`/${itex.url}`}></a>
                                                                        </span> <span class="featc-date"><time class="entry-date published">{moment(itex.createdAt).format("MMMM Do yy")}</time></span> </div>
                                                                    </div>
                                                                    <div class="mag-excerpt entry-content">
                                                                        {/* <p dangerouslySetInnerHTML={{ __html: truncateHTML(itex.content, 100) }} /> */}
                                                                    </div>
                                                                    <div class="penci-hide-tagupdated"> <span class="author-italic author vcard"> <a
                                                                        class="author-url url fn n" href={`/${itex.url}`}></a>
                                                                    </span> </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                              
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                   
                            <div
                                class="elementor-element elementor-element-5105468 elementor-widget elementor-widget-penci-featured-cat"
                                data-id="5105468" data-element_type="widget" data-widget_type="penci-featured-cat.default">
                                <div class="elementor-widget-container">
                                    <div id="pencifeatured_cat_86443" class="penci-featured-cat-sc">
                                        <section class="home-featured-cat mag-cat-style-13">
                                            <div
                                                class="penci-border-arrow penci-homepage-title penci-magazine-title style-13 pcalign-left pciconp-right pcicon-right">
                                                <h3 class="inner-arrow"> <span> <a href="#">Latest In
                                                    Health Lifesyle</a> </span> </h3>
                                                <nav data-ppp="6" data-query_type="ajaxtab" data-blockid="pencifeatured_cat_86443"
                                                    data-more="" class="pcnav-lgroup">

                                                    <ul class="pcflx-nav">
                                                        <li class="pcaj-nav-item pcaj-prev"><a
                                                            class="disable pc-ajaxfil-link pcaj-nav-link prev" data-id="" href="#"
                                                            aria-label="Previous"><i class="penciicon-left-chevron"></i></a></li>
                                                        <li class="pcaj-nav-item pcaj-next"><a class="pc-ajaxfil-link pcaj-nav-link next"
                                                            data-id="" href="#" aria-label="Next"><i class="penciicon-right-chevron"></i></a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div class="home-featured-cat-wrapper">
                                                <div class="home-featured-cat-content pwf-id-default style-13">
                                                    <ul class="penci-grid penci-grid-maglayout penci-fea-cat-style-13">
                                                        {conditionaldatahealty.map((itm, ix) => {
                                                            return (
                                                                <li class="grid-style">
                                                                    <article id="post-434" class="item hentry">
                                                                        <div class="thumbnail">
                                                                            <img class="penci-image-holder penci-lazy"
                                                                                                                                                     src={ itm.type === "placeholder" ? itm.image :`${HOST}resources/post/${itm.image}`}

                                                                                href={`/${itm.url}`}
                                                                                title={itm.title} alt="travel" />
                                                                        </div>
                                                                        <div class="grid-header-box">
                                                                            <h2 class="grid-title entry-title"><a
                                                                                href={`/${itm.url}`}>
                                                                                {itm.title} </a> </h2>
                                                                            <div class="grid-post-box-meta"> <span
                                                                                class="featc-author author-italic author vcard"> <a
                                                                                    class="author-url url fn n" href="/"></a>
                                                                            </span> <span class="featc-date"><time class="entry-date published"
                                                                                datetime="2021-07-30T08:31:58+00:00"> <span class="featc-date"><time class="entry-date published">{moment(itm.createdAt).format("MMMM Do yy")}</time></span></time></span> </div>
                                                                            <div class="penci-hide-tagupdated"> <span class="author-italic author vcard"> <a
                                                                                class="author-url url fn n" href="/"></a>
                                                                            </span> </div>
                                                                        </div>
                                                                    </article>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                        
                                            </div>
                                        </section>
                                    </div>

                                </div>
                            </div>
                            <div
                                class="elementor-element elementor-element-3cabe56 elementor-widget elementor-widget-penci-latest-posts"
                                data-id="3cabe56" data-element_type="widget" data-widget_type="penci-latest-posts.default">
                                <div class="elementor-widget-container">
                                    <div id="pencilatest_posts_81485"
                                        class="penci-latest-posts-sc penci-latest-posts-list penci-latest-posts-el penci-el-mixed-s1 penci-std-continue-center penci-std-excerpt-center penci-grid-excerpt-left">
                                        <div
                                            class="penci-border-arrow penci-homepage-title penci-home-latest-posts style-13 pcalign-left pciconp-right pcicon-right">
                                            <h3 class="inner-arrow"> <span> <span>Business News</span> </span> </h3>
                                        </div>
                                        <div class="penci-wrapper-posts-ajax">
                                            <div class="penci-wrapper-posts-content pwid-default">
                                                <ul data-layout="list" class="penci-wrapper-data penci-grid penci-shortcode-render">
                                                    {conditionaldataBusiness.map((itx, ix) => {
                                                        return (
                                                            <li class="list-post penci-item-listp">
                                                                <article id="post-422" class="item hentry">
                                                                    <div class="thumbnail"> <img class="penci-image-holder penci-lazy"
                                                                        src={ itx.type === "placeholder" ? itx.image :`${HOST}resources/post/${itx.image}`}

                                                                         href={`/${itx.url}`}
                                                                        // href="how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                                        title={itx.title} alt="travel" />
                                                                    </div>
                                                  
                                                                    <div class="content-list-right content-list-center">
                                                                        <div class="header-list-style">
                                                                            <h2 class="penci-entry-title entry-title grid-title"><a
                                                                                 href={`/${itx.url}`}>{itx.title}</a>
                                                                            </h2>
                                                                            <div class="penci-hide-tagupdated"> <span class="author-italic author vcard"> <a
                                                                                class="author-url url fn n" href="/"></a>
                                                                            </span> </div>
                                                                            <div class="grid-post-box-meta"> <span
                                                                                class="otherl-date-author author-italic author vcard"> <a
                                                                                    class="author-url url fn n" href="/"></a>
                                                                            </span>  <span class="featc-date"><time class="entry-date published">{moment(itx.createdAt).format("MMMM Do yy")}</time></span> </div>
                                                                        </div>
                                                                        <div className="item-content entry-content">
                                                                            {/* <p dangerouslySetInnerHTML={{ __html: truncateHTML(itx.content, 100) }} /> */}
                                                                        </div>
                                                                    </div>
                                                                </article>
                                                            </li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="penci-ercol-33 penci-ercol-order-2 penci-sticky-sb penci-sidebarSC elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-078a7b4"
                        data-id="078a7b4" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-52056ca elementor-widget elementor-widget-penci-sidebar"
                                data-id="52056ca" data-element_type="widget" data-widget_type="penci-sidebar.default">
                                <div class="elementor-widget-container">
                                    <div id="sidebar"
                                        class="penci-sidebar-content penci-sidebar-content-vc style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right">
                                        <div class="theiaStickySidebar">
                                            <RecentPosts />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default MultiCategory
