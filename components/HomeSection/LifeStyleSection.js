import { AllPost } from '@/utils/apicall/fetchAllPost'
import { HOST } from '@/utils/static'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const LifeStyleSection = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        AllPost(setData, "Lifestyle")
    }, [])
    return (
        <>
            <section
                class="penci-section penci-disSticky penci-structure-22 elementor-section elementor-top-section elementor-element elementor-element-4e591b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="4e591b2" data-element_type="section">
                <div class="elementor-container elementor-column-gap-wide">
                    <div
                        class="penci-ercol-66 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-306763c"
                        data-id="306763c" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-c20c2f0 elementor-widget elementor-widget-penci-featured-cat"
                                data-id="c20c2f0" data-element_type="widget" data-widget_type="penci-featured-cat.default">
                                <div class="elementor-widget-container">
                                    <div id="pencifeatured_cat_4326" class="penci-featured-cat-sc">
                                        <section class="home-featured-cat mag-cat-style-6">
                                            <div
                                                class="penci-border-arrow penci-homepage-title penci-magazine-title style-13 pcalign-left pciconp-right pcicon-right">
                                                <h3 class="inner-arrow"> <span> <a href="category/life-style/style/index.html">Latest in
                                                    Style</a> </span> </h3>
                                            </div>
                                            <div class="home-featured-cat-wrapper">
                                                <div class="home-featured-cat-content pwf-id-default style-6">
                                                    <div class="cat-left">
                                                        {data.slice(0, 1).map((itex, idx) => {
                                                            return (
                                                                <div class="mag-post-box hentry first-post">
                                                                    <div class="magcat-thumb"> <img class="penci-image-holder penci-lazyimg"
                                                                        src={`${HOST}resources/post/${itex.image}`}
                                                                        href={`/${itex.title}`}
                                                                        title={`${itex.title}`} /> </div>
                                                                    <div class="magcat-detail">
                                                                        <div class="mag-header">
                                                                            <h3 class="magcat-titlte entry-title"><a
                                                                                href={`/${itex.title}`}>{itex.title}</a> </h3>
                                                                            <div class="grid-post-box-meta mag-meta"> <span
                                                                                class="featc-author author-italic author">by <a class="url fn n"
                                                                                    href="author/admin/index.html">Penci Design</a></span> <span
                                                                                        class="featc-date"><time class="entry-date published"
                                                                                            datetime="2021-07-30T08:24:33+00:00">July 30, 2021</time></span> </div>
                                                                        </div>
                                                                        <div class="mag-excerpt entry-content">
                                                                            <p>{itex.title}</p>
                                                                        </div>
                                                                        <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                            class="author-url url fn n" href="author/admin/index.html">Penci Design</a>
                                                                        </span> </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                    <div class="cat-right">
                                                        {data.slice(1, 5).map((idx, indx) => {
                                                            return (
                                                                <div class="mag-post-box hentry">
                                                                    <div class="magcat-thumb">
                                                                        <img class="penci-image-holder penci-lazy small-fix-sizeimg"
                                                                            src={`${HOST}resources/post/${idx.image}`}
                                                                            href={`/${idx.title}`}
                                                                            title={`${idx.title}`} />
                                                                    </div>
                                                                    <div class="magcat-detail">
                                                                        <h3 class="magcat-titlte entry-title"><a
                                                                            href={`/${idx.title}`}>{idx.title}</a> </h3>
                                                                        <div class="grid-post-box-meta mag-meta"> <span class="featc-date"><time
                                                                            class="entry-date published" datetime="2021-07-30T08:08:29+00:00">July 30,
                                                                            2021</time></span> </div>
                                                                        <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                            class="author-url url fn n" href="#">Penci Design</a>
                                                                        </span> </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}


                                                        {/* <div class="mag-post-box hentry">
                                                            <div class="magcat-thumb"> <img class="penci-image-holder penci-lazy small-fix-sizeimg"
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/20-585x390.jpeg"
                                                                href="meghan-markles-royal-style-a-detailed-guide-to-the-duchess/index.html"
                                                                title="Meghan Markle&#8217;s Royal Style: A Detailed Guide to the Duchess" />
                                                            </div>
                                                            <div class="magcat-detail">
                                                                <h3 class="magcat-titlte entry-title"><a
                                                                    href="meghan-markles-royal-style-a-detailed-guide-to-the-duchess/index.html">Meghan
                                                                    Markle&#8217;s Royal Style: A Detailed Guide to the Duchess</a> </h3>
                                                                <div class="grid-post-box-meta mag-meta"> <span class="featc-date"><time
                                                                    class="entry-date published" datetime="2021-07-30T07:53:47+00:00">July 30,
                                                                    2021</time></span> </div>
                                                                <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                    class="author-url url fn n" href="author/admin/index.html">Penci Design</a>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                        <div class="mag-post-box hentry">
                                                            <div class="magcat-thumb"> <img class="penci-image-holder penci-lazy small-fix-sizeimg"
                                                                src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/27-585x390.jpeg"
                                                                href="looking-for-fresh-style-inspiration-go-to-seoul-this-summer/index.html"
                                                                title="Looking For Fresh Style Inspiration? Go to Seoul This Summer" /> </div>
                                                            <div class="magcat-detail">
                                                                <h3 class="magcat-titlte entry-title"><a
                                                                    href="looking-for-fresh-style-inspiration-go-to-seoul-this-summer/index.html">Looking
                                                                    For Fresh Style Inspiration? Go to Seoul This Summer</a> </h3>
                                                                <div class="grid-post-box-meta mag-meta"> <span class="featc-date"><time
                                                                    class="entry-date published" datetime="2021-07-30T07:35:39+00:00">July 30,
                                                                    2021</time></span> </div>
                                                                <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                    class="author-url url fn n" href="author/admin/index.html">Penci Design</a>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                        <div className="mag-post-box hentry">
                                                            <div className="magcat-thumb">
                                                                <Link href="/how-to-have-clean-home-without-disturb-your-lovely-dogs">
                                                                    <img
                                                                        src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/34-585x390.jpeg"
                                                                        alt="How To Have Clean Home Without Disturb Your Lovely Dogs"
                                                                        className="small-fix-size"
                                                                    />
                                                                </Link>
                                                            </div>
                                                            <div className="magcat-detail">
                                                                <h3 className="magcat-titlte entry-title">
                                                                    <Link href="/how-to-have-clean-home-without-disturb-your-lovely-dogs">
                                                                        How To Have Clean Home Without Disturb Your Lovely Dogs
                                                                    </Link>
                                                                </h3>
                                                                <div className="grid-post-box-meta mag-meta">
                                                                    <span className="featc-date">
                                                                        <time dateTime="2021-07-30T04:25:25+00:00">July 30, 2021</time>
                                                                    </span>
                                                                </div>
                                                                <div className="penci-hide-tagupdated">
                                                                    <span className="author-italic author vcard">
                                                                        by <Link href="/author/admin">Penci Design</Link>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="penci-ercol-33 penci-ercol-order-2 penci-sticky-sb penci-sidebarSC elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-457c967"
                        data-id="457c967" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-0ab12d8 elementor-widget elementor-widget-penci-recent-posts"
                                data-id="0ab12d8" data-element_type="widget"
                                data-settings="{&quot;rp_rows_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:30,&quot;sizes&quot;:[]}}"
                                data-widget_type="penci-recent-posts.default">
                                <div class="elementor-widget-container">
                                    <div class="penci-block-vc penci_recent-posts-sc widget">
                                        <div
                                            class="penci-border-arrow penci-homepage-title penci-home-latest-posts style-15 pcalign-left pciconp-right pcicon-right block-title-icon-left">
                                            <h3 class="inner-arrow"> <span> <a href="category/life-style/culture/index.html">Culture</a>
                                            </span> </h3>
                                        </div>
                                        <div class="penci-block_content">
                                            <ul id="penci-latestwg-2082" class="side-newsfeed">
                                                <li class="penci-feed featured-news featured-news2 all-featured-news">
                                                    <div class="side-item">
                                                        <div class="side-image"> <img
                                                            src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/11-585x390.jpeg"
                                                            class="penci-lazy penci-image-holder" rel="bookmark"
                                                            href="countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                            title="Countryside Versus Town? Don&#8217;t Turn This Into A War" /> </div>
                                                        <div class="side-item-text">
                                                            <h4 class="side-title-post"> <a
                                                                href="countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html"
                                                                rel="bookmark" title="Countryside Versus Town? Don&#8217;t Turn This Into A War">
                                                                Countryside Versus Town? Don&#8217;t Turn This Into A War </a> </h4>
                                                            <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                class="side-item-meta side-wdate"><time class="entry-date published"
                                                                    datetime="2021-07-30T08:13:20+00:00">July 30, 2021</time></span> <span
                                                                        class="side-item-meta side-wcomments"><a
                                                                            href="countryside-versus-town-please-dont-turn-this-into-a-culture-war/index.html#respond ">0
                                                                        comments</a></span> </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li class="penci-feed featured-news featured-news2 all-featured-news">
                                                    <div class="side-item">
                                                        <div class="side-image"> <img
                                                            src="https://soledaddemo.Author.net/wp-content/uploads/2021/07/4-1-585x390.jpeg"
                                                            class="penci-lazy penci-image-holder" rel="bookmark"
                                                            href="killing-comments-wont-cure-our-toxic-internet-culture/index.html"
                                                            title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture" /> </div>
                                                        <div class="side-item-text">
                                                            <h4 class="side-title-post"> <a
                                                                href="killing-comments-wont-cure-our-toxic-internet-culture/index.html"
                                                                rel="bookmark"
                                                                title="Killing Comments Won&#8217;t Cure Our Toxic Internet Culture"> Killing
                                                                Comments Won&#8217;t Cure Our Toxic Internet Culture </a> </h4>
                                                            <div class="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                                                class="side-item-meta side-wdate"><time class="entry-date published"
                                                                    datetime="2021-07-30T08:28:29+00:00">July 30, 2021</time></span> <span
                                                                        class="side-item-meta side-wcomments"><a
                                                                            href="killing-comments-wont-cure-our-toxic-internet-culture/index.html#respond ">0
                                                                        comments</a></span> </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
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

export default LifeStyleSection
