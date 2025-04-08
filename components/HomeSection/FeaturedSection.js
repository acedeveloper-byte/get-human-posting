import { AllPost } from '@/utils/apicall/fetchAllPost'
import { HOST } from '@/utils/static'
import React, { useEffect, useState } from 'react'

const FeaturedSection = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        AllPost(setData, "Featured")
    }, [])

    return (
        <>
            <section
                class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-67c6f7c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="67c6f7c" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
                    <div
                        class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-88556d2"
                        data-id="88556d2" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-24c2ef9 elementor-widget elementor-widget-penci-big-grid"
                                data-id="24c2ef9" data-element_type="widget" data-widget_type="penci-big-grid.default">
                                <div class="elementor-widget-container">
                                    <div
                                        class="penci-clearfix penci-biggrid-wrapper penci-bgrid-based-post penci-bgrid-style-4 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-on pencibg-imageh-zoom-in pencibg-texth-none pencibg-textani-movebottom pcbg-mask-subtitle pcbg-mask-title pcbg-mask-meta textop hide-mdesc">
                                        <div class="penci-clearfix penci-biggrid penci-bgstyle-4 penci-bgel">
                                            <div class="penci-biggrid-inner default">
                                                <div class="penci-big-grid-ajax-data">
                                                    <div class="penci-clearfix penci-biggrid-data penci-dblock penci-fixh">

                                                        {data.slice(0, 5).map((item, idx) => {

                                                            return (

                                                                <div class={`${idx + 1 === 5 ? `penci-bgitem bgitem-0` : `penci-bgitem bgitem-${idx + 1}`}`}>
                                                                    <div class="penci-bgitin">
                                                                        <div class="penci-bgmain">
                                                                            <div class="pcbg-thumb">

                                                                                <div class="pcbg-thumbin">
                                                                                    <a class="pcbg-bgoverlay"></a>                                                                                    <img
                                                                                        src={`${HOST}resources/post/${item.image}`}
                                                                                        class="penci-lazy penci-image-holder" />
                                                                                </div>
                                                                            </div>

                                                                            <div class="pcbg-content">

                                                                                <div class="pcbg-content-flex">
                                                                                    <a class="pcbg-bgoverlay active-overlay"
                                                                                        href={`/${item.url}`}
                                                                                        title={`${item.title}`}></a>
                                                                                    <div class="pcbg-content-inner bgcontent-block"> <a
                                                                                        href={`/${item.url}`}
                                                                                        title={`${item.title}`}
                                                                                        class="pcbg-bgoverlaytext item-hover"></a>
                                                                                        <div class="pcbg-heading item-hover">
                                                                                            <h3 class="pcbg-title"> <a
                                                                                                href={`/${item.url}`}>
                                                                                                {item.title} </a>
                                                                                            </h3>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>


                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                        )}


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
            </section >
        </>
    )
}

export default FeaturedSection
