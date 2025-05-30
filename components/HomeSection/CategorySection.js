'use client';
import { IoChevronForward } from "react-icons/io5";
import { IoChevronBack } from "react-icons/io5";
import React, { useEffect, useRef, useState } from 'react'
import axios from "axios";
import { HOST } from "@/utils/static";

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
]


const CategorySection = ({ catdata }) => {

    const [data, setData] = useState(catdata)

  


    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
    };
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
                                                <div className="scroll-btn-container">

                                                    <div className="scroll-btn">

                                                        <button className="right" onClick={() => scrollRight()}>
                                                            <IoChevronForward />

                                                        </button>
                                                    </div>
                                                    <div className="scroll-btn">

                                                        <button className="left" onClick={() => scrollLeft()}>
                                                            <IoChevronBack />
                                                        </button>
                                                    </div>

                                                </div>

                                                <div ref={scrollRef} id="scrollable-grid" class="penci-clearfix penci-biggrid-data penci-dflex horizontal-scroll">
                                                    {data.map((item, index) => {

                                                        return (
                                                            <div class="penci-bgitem elementor-repeater-item-17beedc">
                                                                <div class="penci-bgitin">
                                                                    <div class="penci-bgmain">
                                                                        <div class="pcbg-thumb">
                                                                            <div class="pcbg-thumbin"> <a class="pcbg-bgoverlay"
                                                                                href={`/category/${item.slug}`} title={item.label}></a>
                                                                                <img
                                                                                    src={item.type === "placeholder" ? item.image : item.imgSrc}
                                                                                    class="penci-lazy penci-image-holder" alt={item.imgSrc} />
                                                                            </div>
                                                                        </div>
                                                                        <div class="pcbg-content">
                                                                            <div class="pcbg-content-flex pcbg-overlap-hover"> <a class="pcbg-cbgoverlap"
                                                                                href={`/category/${item.slug}`} title={item.label}></a> <a
                                                                                    class="pcbg-bgoverlay active-overlay" href={`/category/${item.slug}`}
                                                                                    title={item.label}></a>
                                                                                <div class="pcbg-content-inner bgcontent-block"> <a
                                                                                    href={`/category/${item.slug}`} title={item.label}
                                                                                    class="pcbg-bgoverlaytext item-hover"></a>
                                                                                    <div class="pcbg-heading item-hover">
                                                                                        <h3 class="pcbg-title"><a href={`/category/${item.slug}`} >{item.label}</a>
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
