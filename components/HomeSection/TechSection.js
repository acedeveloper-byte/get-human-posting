import { AllPost } from '@/utils/apicall/fetchAllPost'
import { HOST } from '@/utils/static'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
const DATA = [
    {
        id: 1,
        image: "/assets/blog.png",
        type: "placeholder"
    },
    {
        id: 2,
        image: "/assets/blog.png",
        type: "placeholder"
    },
    {
        id: 3,
        image: "/assets/blog.png",
        type: "placeholder"
    },
    {
        id: 4,
        image: "/assets/blog.png",
        type: "placeholder"
    },
    {
        id: 5,
        image: "/assets/blog.png",
        type: "placeholder"
    },
    {
        id: 6,
        image: "/assets/blog.png",
        type: "placeholder"
    },
]
const TechSection = () => {

    const [data, setData] = useState(DATA)
    const [user, setuser] = useState({})
    var conditionaldata =  data.length !==0 ? data : DATA

    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setuser(JSON.parse(localStorage.getItem("auth_data")))
        }
        AllPost(setData, "Tech")
    }, [])

    return (
        <>


            <section
                class="penci-section penci-dmcheck penci-elbg-activate penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-032edc7 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="032edc7" data-element_type="section"
                data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div class="elementor-container elementor-column-gap-no">
                    <div
                        class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-75923fe"
                        data-id="75923fe" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-d346fbc elementor-widget elementor-widget-penci-big-grid"
                                data-id="d346fbc" data-element_type="widget" data-widget_type="penci-big-grid.default">
                                <div class="elementor-widget-container">
                                    <div
                                        class="penci-clearfix penci-biggrid-wrapper penci-bgrid-based-post penci-bgrid-style-20 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-on pencibg-imageh-zoom-in pencibg-texth-none pencibg-textani-movetop penci-bgrid-monecol penci-bgrid-msameh textop hide-mdesc">
                                        <div
                                            class="penci-border-arrow penci-homepage-title penci-home-latest-posts style-18 pcalign-center pciconp-right pcicon-right block-title-icon-left">
                                            <h3 class="inner-arrow"> <span> <a>Featured Tech In This Week</a> </span> </h3>
                                        </div>
                                        <div class="penci-clearfix penci-biggrid penci-bgstyle-20 penci-bgel">
                                            <div class="penci-biggrid-inner default">
                                                <div class="penci-big-grid-ajax-data">
                                                    <div class="penci-clearfix penci-biggrid-data penci-dblock penci-fixh">
                                                        {conditionaldata.slice(0, 5).map((itx, idx) => {
                                                            return (
                                                                // <div class="penci-bgitem pcbg-big-item bgitem-1">
                                                                <div class={`${idx + 1 < 1 ? `penci-bgitem bgitem-${idx + 1}` : `penci-bgitem pcbg-big-item bgitem-${idx + 1}`}`}>
                                                                    <div class="penci-bgitin">
                                                                        <div class="penci-bgmain">
                                                                            <div class="pcbg-thumb">
                                                                                <div class="pcbg-thumbin"> <a class="pcbg-bgoverlay"
                                                                                    href={`/${itx.url}`}
                                                                                    title={`${itx.title}`}></a>

                                                                                    <img
                                                                                         src={ itx.type === "placeholder" ? itx.image :`${HOST}resources/post/${itx.image}`}
                                                                                        class="penci-lazy penci-image-holder" />
                                                                                </div>
                                                                            </div>
                                                                            <div class="pcbg-content">
                                                                                <div class="pcbg-content-flex"> <a class="pcbg-bgoverlay"
                                                                                    href={`/${itx.url}`} title={`${itx.title}`}></a>
                                                                                    <div class="pcbg-content-inner bgcontent-block"> <a
                                                                                        href={`/${itx.url}`} title={`${itx.title}`}
                                                                                        class="pcbg-bgoverlaytext active-overlay item-hover"></a>
                                                                                        <div class="pcbg-heading item-hover">
                                                                                            <h3 class="pcbg-title"> <a
                                                                                                href={`/${itx.url}`}>
                                                                                                {itx.title} </a> </h3>
                                                                                        </div>
                                                                                        <div class="grid-post-box-meta pcbg-meta item-hover">
                                                                                            <div class="pcbg-meta-desc"> <span
                                                                                                class="bg-date-author author-italic author vcard"> by <a
                                                                                                    class="author-url url fn n" href="#">
                                                                                                    {user.user_name}
                                                                                                </a> </span> <span class="bg-date"><time
                                                                                                    class="entry-date published"
                                                                                                >{moment(itx.createdAt).format("MMMM Do yy")}</time></span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}


                                                    </div>
                                                </div>
                                            </div>
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

export default TechSection

