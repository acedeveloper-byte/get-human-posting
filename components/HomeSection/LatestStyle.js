import React, { useEffect, useState } from 'react'
import { AllPost } from '@/utils/apicall/fetchAllPost'
import { HOST } from '@/utils/static'
import { truncateHTML } from '@/utils/functions/truncate'


const DATA = [
    {
        id :1 ,
        image:"placeholder.png"
    },
    {
        id :2 ,
        image:"placeholder.png"
    },
    {
        id :3 ,
        image:"placeholder.png"
    },
    {
        id :4 ,
        image:"placeholder.png"
    },
    {
        id :5,
        image:"placeholder.png"
    },
]

const LatestStyle = () => {

    const [data, setData] = useState(DATA)
    const [dataHealthy, setDataHealthy] = useState(DATA)
    const [dataFashion, setDataFashion] = useState(DATA)
    useEffect(() => {
        AllPost(setData, "Latest")
        AllPost(setDataHealthy, "Healthy")
        AllPost(setDataFashion, "Fashion")
    }, [])



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
                                                <h3 class="inner-arrow"> <span> <a href="category/life-style/index.html">Lastest in Life
                                                    Style</a> </span> </h3>
                                                <nav data-ppp="6" data-query_type="ajaxtab" data-blockid="pencifeatured_cat_8861"
                                                    data-more="" class="pcnav-lgroup">
                                                    <ul class="pcflx">
                                                        <li class="all visible"><a data-paged="1" data-maxp="2"
                                                            class="pc-ajaxfil-link current-item" data-id="default" href="#"
                                                            aria-label="Paged">All</a></li>
                                                        <li><a href="#" aria-label="Category" data-id="0f48557c63833f8dfc5265b2060a96df"
                                                            class="pc-ajaxfil-link" data-paged="1" data-cat="3">Fashion</a></li>
                                                        <li><a href="#" aria-label="Category" data-id="9d1a88ffbf40ac406eca7f030a7e32d0"
                                                            class="pc-ajaxfil-link" data-paged="1" data-cat="5">Food</a></li>
                                                        <li><a href="#" aria-label="Category" data-id="6d5d062fbe64cd9d77efef78dfebc780"
                                                            class="pc-ajaxfil-link" data-paged="1" data-cat="6">Life Style</a></li>
                                                        <li><a href="#" aria-label="Category" data-id="862e3d7ad6f211031130a708557cad3f"
                                                            class="pc-ajaxfil-link" data-paged="1" data-cat="8">Healthy Living</a></li>
                                                    </ul>
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
                                                <div class="home-featured-cat-content pwf-id-default style-10">

                                                    {data.map((itex, index) => {

                                                        return (
                                                            <div class={index + 1 > 2 ? "mag-post-box hentry" : "mag-post-box hentry first-post"}>
                                                                <div class="magcat-thumb">
                                                                    <img class="penci-image-holder penci-lazy"
                                                                        src={`${HOST}resources/post/${itex.image}`}
                                                                        href={`/${itex.title}`}
                                                                        title={`${itex.title}`} />
                                                                </div>
                                                                <div class="magcat-detail">
                                                                    <div class="mag-header">
                                                                        <h3 class="magcat-titlte entry-title"><a
                                                                            href={`/${itex.title}`}> {itex.title}</a> </h3>
                                                                        <div class="grid-post-box-meta mag-meta"> <span
                                                                            class="featc-author author-italic author vcard">by <a
                                                                                class="author-url url fn n" href={`/${itex.url}`}>Penci Design</a>
                                                                        </span> <span class="featc-date"><time class="entry-date published"
                                                                            datetime="2021-07-30T08:20:08+00:00">July 30, 2021</time></span> </div>
                                                                    </div>
                                                                    <div class="mag-excerpt entry-content">
                                                                        <p dangerouslySetInnerHTML={{ __html: truncateHTML(itex.content, 100) }} />
                                                                    </div>
                                                                    <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                        class="author-url url fn n" href={`/${itex.url}`}>Penci Design</a>
                                                                    </span> </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                </div>
                                                <div class="penci-loader-effect penci-loading-animation-9">
                                                    <div class="penci-loading-circle">
                                                        <div class="penci-loading-circle1 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle2 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle3 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle4 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle5 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle6 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle7 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle8 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle9 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle10 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle11 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle12 penci-loading-circle-inner"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <style> </style>
                                </div>
                            </div>
                            <div class="elementor-element elementor-element-51ea67b elementor-widget elementor-widget-html"
                                data-id="51ea67b" data-element_type="widget" data-widget_type="html.default">
                                <div class="elementor-widget-container">
                                    <div style={{ textAlign: "center" }}> <a style={{ display: "inline-block", maxWidth: "728px" }}

                                        href="https://1.envato.market/YYJ4P" target="_blank"><img loading="lazy" decoding="async"
                                            src="/wp-content/uploads/2021/08/banner-home.jpg" width="728" height="90" alt="banner" /></a>
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
                                                <h3 class="inner-arrow"> <span> <a href="category/life-style/index.html">Latest In
                                                    Fashion</a> </span> </h3>
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
                                                        {dataFashion.map((itm, ix) => {
                                                            return (
                                                                <li class="grid-style">
                                                                    <article id="post-434" class="item hentry">
                                                                        <div class="thumbnail">
                                                                            <img class="penci-image-holder penci-lazy"
                                                                                src={`${HOST}resources/post/${itm.image}`}
                                                                                href={`/${itm.title}`}
                                                                                title={itm.title} />
                                                                        </div>
                                                                        <div class="grid-header-box">
                                                                            <h2 class="grid-title entry-title"><a
                                                                                href={`/${itm.title}`}>
                                                                                {itm.title} </a> </h2>
                                                                            <div class="grid-post-box-meta"> <span
                                                                                class="featc-author author-italic author vcard">by <a
                                                                                    class="author-url url fn n" href="/">Penci Design</a>
                                                                            </span> <span class="featc-date"><time class="entry-date published"
                                                                                datetime="2021-07-30T08:31:58+00:00">July 30, 2021</time></span> </div>
                                                                            <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                                class="author-url url fn n" href="/">Penci Design</a>
                                                                            </span> </div>
                                                                        </div>
                                                                    </article>
                                                                </li>
                                                            )
                                                        })}
                                                       
                                                    </ul>
                                                </div>
                                                <div class="penci-loader-effect penci-loading-animation-9">
                                                    <div class="penci-loading-circle">
                                                        <div class="penci-loading-circle1 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle2 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle3 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle4 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle5 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle6 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle7 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle8 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle9 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle10 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle11 penci-loading-circle-inner"></div>
                                                        <div class="penci-loading-circle12 penci-loading-circle-inner"></div>
                                                    </div>
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
                                            <h3 class="inner-arrow"> <span> <span>Healthy Living</span> </span> </h3>
                                        </div>
                                        <div class="penci-wrapper-posts-ajax">
                                            <div class="penci-wrapper-posts-content pwid-default">
                                                <ul data-layout="list" class="penci-wrapper-data penci-grid penci-shortcode-render">
                                                    {dataHealthy.map((itx, ix) => {
                                                        return (
                                                            <li class="list-post penci-item-listp">
                                                                <article id="post-422" class="item hentry">
                                                                    <div class="thumbnail"> <img class="penci-image-holder penci-lazy"
                                                                        src={`${HOST}resources/post/${itx.image}`}
                                                                        href={`/${itx.title}`}
                                                                        // href="how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                                        title={itx.title} />
                                                                    </div>
                                                                    <div class="content-list-right content-list-center">
                                                                        <div class="header-list-style">
                                                                            <h2 class="penci-entry-title entry-title grid-title"><a
                                                                                href={`/${itx.title}`}>{itx.title}</a>
                                                                            </h2>
                                                                            <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                                class="author-url url fn n" href="/">Penci Design</a>
                                                                            </span> </div>
                                                                            <div class="grid-post-box-meta"> <span
                                                                                class="otherl-date-author author-italic author vcard">by <a
                                                                                    class="author-url url fn n" href="/">Penci Design</a>
                                                                            </span> <span class="otherl-date"><time class="entry-date published"
                                                                                datetime="2021-07-30T08:26:21+00:00">July 30, 2021</time></span> </div>
                                                                        </div>
                                                                        <div className="item-content entry-content">
                                                                            <p dangerouslySetInnerHTML={{ __html: truncateHTML(itx.content, 100) }} />
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
                                       
                                            <aside id="penci_popular_news_widget-2" class="widget penci_popular_news_widget">
                                                <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Popular Posts</span>
                                                </h3>
                                                <ul id="penci-popularwg-2797"
                                                    data-settings='{"hide_thumb":"","show_author":"","show_comment":"","show_postviews":"on","showborder":"","row_gap":"","imgwidth":"100","ptfsfe":"","ptfs":"13","pmfs":"12","image_type":"default","type":"all","title_length":"8","number":"5","offset":"","categories":"","featured":"","allfeatured":"","thumbright":"","twocolumn":"","featured2":"","ordernum":"","postdate":"","icon":"","cats_id":"all","tags_id":"all","ptype":"","taxonomy":"","tax_ids":"","sticky":"on"}'
                                                    data-paged="1" data-action="penci_popular_news_ajax" data-mes="Sorry, No more posts"
                                                    data-max="16" class="side-newsfeed display-order-numbers order-numbers-1">
                                                    <li class="penci-feed"> <span class="order-border-number"> <span
                                                        class="number-post">1</span> </span>
                                                        <div class="side-item">
                                                            <div class="side-image"> <a
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/4-1-263x175.jpeg"
                                                                class="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                                href="killing-comments-wont-cure-our-toxic-internet-culture/index.html"
                                                                title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture"> </a> </div>
                                                            <div class="side-item-text">
                                                                <h4 class="side-title-post"> <a
                                                                    href="killing-comments-wont-cure-our-toxic-internet-culture/index.html"
                                                                    rel="bookmark"
                                                                    title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture"> Killing
                                                                    Comments Won&#8217;t Cure Our Toxic Internet Culture </a> </h4>
                                                                <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                    class="side-item-meta side-wdate"><time class="entry-date published"
                                                                        datetime="2021-07-30T08:28:29+00:00">July 30, 2021</time></span> <span
                                                                            class="side-item-meta side-wviews">19.2K views</span> </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="penci-feed"> <span class="order-border-number"> <span
                                                        class="number-post">2</span> </span>
                                                        <div class="side-item">
                                                            <div class="side-image"> <a
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/5-1-263x175.jpeg"
                                                                class="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                                href="how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                                title="How To Get Your Partner On Board With A Healthy Lifestyle Change With You">
                                                            </a> </div>
                                                            <div class="side-item-text">
                                                                <h4 class="side-title-post"> <a
                                                                    href="how-to-get-your-partner-on-board-with-a-healthy-lifestyle-change-with-you/index.html"
                                                                    rel="bookmark"
                                                                    title="How To Get Your Partner On Board With A Healthy Lifestyle Change With You">
                                                                    How To Get Your Partner On Board With... </a> </h4>
                                                                <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                    class="side-item-meta side-wdate"><time class="entry-date published"
                                                                        datetime="2021-07-30T08:26:21+00:00">July 30, 2021</time></span> <span
                                                                            class="side-item-meta side-wviews">17K views</span> </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="penci-feed"> <span class="order-border-number"> <span
                                                        class="number-post">3</span> </span>
                                                        <div class="side-item">
                                                            <div class="side-image"> <a
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/6-1-263x175.jpeg"
                                                                class="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                                href="a-fairytale-brand-pretty-little-thing-joins-fashion-top-brands-worldwide/index.html"
                                                                title="&#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion Top Brands Worldwide">
                                                            </a> </div>
                                                            <div class="side-item-text">
                                                                <h4 class="side-title-post"> <a
                                                                    href="a-fairytale-brand-pretty-little-thing-joins-fashion-top-brands-worldwide/index.html"
                                                                    rel="bookmark"
                                                                    title="&#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion Top Brands Worldwide">
                                                                    &#8216;A Fairytale Brand&#8217;: Pretty Little Thing Joins Fashion... </a> </h4>
                                                                <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                    class="side-item-meta side-wdate"><time class="entry-date published"
                                                                        datetime="2021-07-30T08:24:33+00:00">July 30, 2021</time></span> <span
                                                                            class="side-item-meta side-wviews">15.4K views</span> </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="penci-feed"> <span class="order-border-number"> <span
                                                        class="number-post">4</span> </span>
                                                        <div class="side-item">
                                                            <div class="side-image"> <a
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/2-1-263x175.jpeg"
                                                                class="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                                href="gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/index.html"
                                                                title="Gemma Ward Used To Wish Fast Fashion Was Less Prevalent By Now"> </a>
                                                            </div>
                                                            <div class="side-item-text">
                                                                <h4 class="side-title-post"> <a
                                                                    href="gemma-ward-used-to-wish-fast-fashion-was-less-prevalent-by-now/index.html"
                                                                    rel="bookmark"
                                                                    title="Gemma Ward Used To Wish Fast Fashion Was Less Prevalent By Now"> Gemma
                                                                    Ward Used To Wish Fast Fashion Was... </a> </h4>
                                                                <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                    class="side-item-meta side-wdate"><time class="entry-date published"
                                                                        datetime="2021-07-30T08:31:58+00:00">July 30, 2021</time></span> <span
                                                                            class="side-item-meta side-wviews">15.2K views</span> </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="penci-feed"> <span class="order-border-number"> <span
                                                        class="number-post">5</span> </span>
                                                        <div class="side-item">
                                                            <div class="side-image"> <a
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/11-263x175.jpeg"
                                                                class="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                                                href="countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                                title="Countryside Versus Town? Don&#8217;t Turn This Into A War"> </a> </div>
                                                            <div class="side-item-text">
                                                                <h4 class="side-title-post"> <a
                                                                    href="countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                                    rel="bookmark"
                                                                    title="Countryside Versus Town? Don&#8217;t Turn This Into A War"> Countryside
                                                                    Versus Town? Don&#8217;t Turn This Into A... </a> </h4>
                                                                <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                    class="side-item-meta side-wdate"><time class="entry-date published"
                                                                        datetime="2021-07-30T08:13:20+00:00">July 30, 2021</time></span> <span
                                                                            class="side-item-meta side-wviews">14.2K views</span> </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </aside>
                                            <aside id="categories-5" class="widget widget_categories">
                                                <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Categories</span></h3>
                                                <ul>
                                                    <li class="cat-item cat-item-7"><a href="category/life-style/culture/index.html">Culture
                                                        <span class="category-item-count">(11)</span></a> </li>
                                                    <li class="cat-item cat-item-3"><a href="category/fashion/index.html">Fashion <span
                                                        class="category-item-count">(11)</span></a> </li>
                                                    <li class="cat-item cat-item-4"><a href="category/featured/index.html">Featured <span
                                                        class="category-item-count">(9)</span></a> </li>
                                                    <li class="cat-item cat-item-5"><a href="category/food/index.html">Food <span
                                                        class="category-item-count">(11)</span></a> </li>
                                                    <li class="cat-item cat-item-8"><a
                                                        href="category/life-style/healthy-living/index.html">Healthy Living <span
                                                            class="category-item-count">(11)</span></a> </li>
                                                    <li class="cat-item cat-item-9"><a href="category/life-style/style/index.html">Style <span
                                                        class="category-item-count">(11)</span></a> </li>
                                                    <li class="cat-item cat-item-10"><a href="category/technology/index.html">Technology <span
                                                        class="category-item-count">(12)</span></a> </li>
                                                    <li class="cat-item cat-item-11"><a href="category/travel/index.html">Travel <span
                                                        class="category-item-count">(12)</span></a> </li>
                                                </ul>
                                            </aside>
                                            <aside id="mc4wp_form_widget-2" class="widget widget_mc4wp_form_widget">
                                                <h3 class="widget-title penci-border-arrow"><span class="inner-arrow">Subscribe
                                                    Newsletter</span></h3>
                                                <script data-cfasync="false"
                                                    src="cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>

                                                <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-498" method="post" data-id="498"
                                                    data-name="Mailchimp Form">
                                                    <div class="mc4wp-form-fields">
                                                        <p class="mdes">Subscribe our newsletter for latest news, service & promo. Let's stay
                                                            updated!</p>
                                                        <p class="mname"><input type="text" name="NAME" placeholder="Name..." /></p>
                                                        <p class="memail"><input type="email" id="mc4wp_email" name="EMAIL"
                                                            placeholder="Email..." required /></p>
                                                        <p class="msubmit"><input type="submit" value="Subscribe" /></p>
                                                    </div><label style={{ display: "none !important" }}>Leave this field empty if you're human:
                                                        <input type="text" name="_mc4wp_honeypot" tabindex="-1"
                                                            autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp"
                                                                value="1742098741" /><input type="hidden" name="_mc4wp_form_id" value="498" /><input
                                                        type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                                                    <div class="mc4wp-response"></div>
                                                </form>
                                            </aside>
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

export default LatestStyle
