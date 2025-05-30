'use client'
import React, { useState } from 'react'
import { HOST } from "@/utils/static";
import { useEffect } from 'react';
import axios from 'axios';


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







const FeaturedSection = ({
    travdata
}) => {
    const [data, setData] = useState(travdata)


    useEffect(() => {
        const fetchTravelData = async () => {
          try {
            const travel = await axios.get(`${HOST}post/fetch-all-post-by-category/travel`);
            const travel_data = travel.data.response;
            console.log("travel_data:", travel_data);
            setData(travel_data);
          } catch (error) {
            console.error("Error fetching travel data:", error);
          }
        };
    
        fetchTravelData();
      }, []);


    var conditionaldata = data.length !== 0 ? data : DATA
        console.log(data)

    
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
                                                        {conditionaldata.slice(0, 5).map((item, idx) => {
                                                            return (

                                                                <div class={`${idx + 1 === 5 ? `penci-bgitem bgitem-0` : `penci-bgitem bgitem-${idx + 1}`}`}>
                                                                    <div class="penci-bgitin">
                                                                        <div class="penci-bgmain">
                                                                            <div class="pcbg-thumb">

                                                                                <div class="pcbg-thumbin">
                                                                                    <img
                                                                                        src={item.type === "placeholder" ? item.image : `${HOST}resources/post/${item.image}`}
                                                                                        class="penci-lazy penci-image-holder" alt="featured" />
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


