'use client'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'next/navigation'
import { HOST } from '@/utils/static';
import { truncateHTML } from '@/utils/functions/truncate';
import { FetchAllCategory } from '@/utils/apicall/fetchAllCategory';
import { AllPost } from '@/utils/apicall/fetchAllPost';

const CategoryPage = () => {
    const params = useParams()
    const [data, setData] = useState([])
    useEffect(() => {

        if (params.categoryname) {
            AllPost(setData, params.categoryname);
        }
    }, []);

    return (
        <div id="soledad_wrapper" className="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default">


            <div className="container penci_sidebar right-sidebar">
                <div className='row '>
                    <div className="col-md-8 penci-layout-grid penci-main-sticky-sidebar">
                        <div className="theiaStickySidebar">
                            <ul data-layout="grid" className="penci-wrapper-data penci-grid">
                                {data.map((item, index) => (
                                    <li className="grid-style grid-overlay-meta" key={index}>
                                        <article className="item hentry">
                                            <div className="thumbnail">
                                                <a href={`/${item.url}`} className='text-decoration-none'>
                                                    <img
                                                        src={item.itemSrc}
                                                        alt="Post Image"
                                                        loading="lazy"
                                                    />
                                                </a>
                                            </div>

                                            <div className="grid-header-box">
                                                <span className="cat">
                                                    <a className="penci-cat-name penci-cat-3" href="#" rel="category tag">
                                                        <span>{item.category}</span>
                                                    </a>
                                                </span>

                                                <h2 className="penci-entry-title entry-title grid-title penci_grid_title_df">
                                                    <a href={`/${item.url}`} className='text-decoration-none fs-5'>
                                                        {item.title}
                                                    </a>
                                                </h2>

                                            </div>

                                            <div className="item-content entry-content">
                                                <p dangerouslySetInnerHTML={{ __html: truncateHTML(item.content, 100) }} />
                                            </div>

                                            <div className="penci-readmore-btn penci-btn-make-button penci-btn-align-center">
                                                <a className="penci-btn-readmore" href={`/${item.url}`}>
                                                    Read The Article <i className="penci-faicon fa fa-angle-double-right"></i>
                                                </a>
                                            </div>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage;
