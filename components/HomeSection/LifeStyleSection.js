import { AllPost } from '@/utils/apicall/fetchAllPost'
import { HOST } from '@/utils/static'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
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
const LifeStyleSection = () => {
    const [user, setuser] = useState({})
    const [data, setData] = useState(DATA)
    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setuser(JSON.parse(localStorage.getItem("auth_data")))
        }
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
                                                <h3 class="inner-arrow"> <span> <a href="#">Latest in
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
                                                                        href={`/${itex.url}`}
                                                                        title={`${itex.title}`} /> </div>
                                                                    <div class="magcat-detail">
                                                                        <div class="mag-header">
                                                                            <h3 class="magcat-titlte entry-title"><a
                                                                                href={`/${itex.url}`}>{itex.title}</a> </h3>
                                                                            <div class="grid-post-box-meta mag-meta"> <span
                                                                                class="featc-author author-italic author">by <a class="url fn n"
                                                                                    href="#">{user.user_name}</a></span> <span
                                                                                        class="featc-date"><time class="entry-date published"
                                                                                            datetime="2021-07-30T08:24:33+00:00">July 30, 2021</time></span> </div>
                                                                        </div>
                                                                        <div class="mag-excerpt entry-content">
                                                                            <p>{itex.title}</p>
                                                                        </div>
                                                                        <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                            class="author-url url fn n" href="#">{user.user_name}</a>
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
                                                                            class="entry-date published" datetime="2021-07-30T08:08:29+00:00">{moment(idx.createdAt).format("MMMM Do yy")}</time></span> </div>
                                                                        <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                            class="author-url url fn n" href="#">{user.user_name}</a>
                                                                        </span> </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}

                                                    </div>
                                                </div>
                                            </div>
                                        </section>
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
