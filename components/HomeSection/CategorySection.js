import { FetchAllCategory } from '@/utils/apicall/fetchAllCategory'
import React, { useEffect, useState } from 'react'

const CategorySection = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        FetchAllCategory(setData)
    }, [])

    console.log("data::", data)

    return (
        <>
            <section
                class="penci-section penci-disSticky penci-structure-10 elementor-section elementor-top-section elementor-element elementor-element-feb202f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="feb202f" data-element_type="section">
                <div class="elementor-container elementor-column-gap-no">
                    <div
                        class="penci-ercol-100 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7be2aa2"
                        data-id="7be2aa2" data-element_type="column">
                        <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                                class="elementor-element elementor-element-8e06cc1 elementor-widget elementor-widget-penci-big-grid"
                                data-id="8e06cc1" data-element_type="widget" data-widget_type="penci-big-grid.default">
                                <div class="elementor-widget-container">
                                    <div
                                        class="penci-clearfix penci-biggrid-wrapper penci-grid-col-6 penci-grid-mcol-2 penci-bgrid-based-custom penci-bgrid-style-1 pcbg-ficonpo-top-right pcbg-reiconpo-top-left penci-bgrid-content-on pencibg-imageh-zoom-in pencibg-texth-none pencibg-textani-movetop textop">
                                        <div class="penci-clearfix penci-biggrid penci-bgstyle-1 penci-bgel">
                                            <div class="penci-biggrid-inner default">
                                                <div class="penci-clearfix penci-biggrid-data penci-dflex">
                                                    {data.map((item, index) => {
                                                        return (
                                                            <div class="penci-bgitem elementor-repeater-item-17beedc">
                                                                <div class="penci-bgitin">
                                                                    <div class="penci-bgmain">
                                                                        <div class="pcbg-thumb">
                                                                            <div class="pcbg-thumbin"> <a class="pcbg-bgoverlay"
                                                                                href={`/category/${item.label}`} title={item.label}></a>
                                                                                <img
                                                                                    src="https://soledaddemo.Author.net/wp-content/uploads/2021/08/fashion-300x300.jpg"
                                                                                    class="penci-lazy penci-image-holder" />
                                                                            </div>
                                                                        </div>
                                                                        <div class="pcbg-content">
                                                                            <div class="pcbg-content-flex pcbg-overlap-hover"> <a class="pcbg-cbgoverlap"
                                                                                href={`/category/${item.label}`} title={item.title}></a> <a
                                                                                    class="pcbg-bgoverlay active-overlay" href={`/category/${item.label}`}
                                                                                    title={item.title}></a>
                                                                                <div class="pcbg-content-inner bgcontent-block"> <a
                                                                                    href={`/category/${item.label}`} title={item.title}
                                                                                    class="pcbg-bgoverlaytext item-hover"></a>
                                                                                    <div class="pcbg-heading item-hover">
                                                                                        <h3 class="pcbg-title"><a href={`/category/${item.label}`} >{item.title}</a>
                                                                                        </h3>
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
            </section>
        </>
    )
}

export default CategorySection
