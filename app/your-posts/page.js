'use client'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '@/components/Header'
import "../globals.css";
import { GetAllPostByUserId } from '@/utils/apicall/GetAllPostByUserId';
import { HOST } from '@/utils/static';
import { truncateHTML } from '@/utils/functions/truncate';

const page = () => {
  const [data, setdata] = useState([])
  const [user, setuser] = useState({})

  useEffect(() => {
    const user_data = localStorage.getItem("auth_data");
    var parseData = JSON.parse(user_data)
    setuser(user_data)
    GetAllPostByUserId(parseData._id, setdata)
  }, [])


  return (
    <>
      <div id="soledad_wrapper" class="wrapper-boxed header-style-header-10 penci-hlogo-center header-search-style-default">
        <div class="penci-header-wrap">

          <Header />
        </div>
        {data.length > 0 ?


          <div class="container penci_sidebar right-sidebar">
            <div className='row '>
              <div class="col-md-8 penci-layout-grid penci-main-sticky-sidebar">
                <div class="theiaStickySidebar">


                  <ul data-layout="grid" class="penci-wrapper-data penci-grid">
                    {data.map((item, index) => {
                      return (

                        <li class="grid-style grid-overlay-meta">
                          <article id="post-434" class="item hentry">
                            <div class="thumbnail">
                              <a
                                href={`/${item.url}`}
                                className='text-decoration-none'>
                                <img
                                  src={`${HOST}resources/post/${item.image}`}
                                  alt="Post Image"
                                  loading="lazy" />
                              </a>
                            </div>

                            <div class="grid-header-box">
                              <span class="cat">
                                <a class="penci-cat-name penci-cat-3" href="#" rel="category tag">
                                  <span>  {item.category}</span>
                                </a>
                              </span>

                              <h2 class="penci-entry-title entry-title grid-title penci_grid_title_df">
                                <a href={`/${item.url}`} className='text-decoration-none fs-5' >
                                  {item.title}
                                </a>
                              </h2>

                              <div class="penci-hide-tagupdated">
                                <span class="author-italic author vcard">
                                  by <a class="author-url url fn n" href="">{user?.user_name ? user.user_name : ""}</a>
                                </span>
                                <p class="entry-date published" >{item.createdAt}</p>
                              </div>

                            </div>

                            <div class="item-content entry-content">
                              <p dangerouslySetInnerHTML={{ __html: truncateHTML(item.conten, 100) }} />

                            </div>

                            <div class="penci-readmore-btn penci-btn-make-button penci-btn-align-center">
                              <a class="penci-btn-readmore" href={`/${item.url}`}>
                                Read The Article <i class="penci-faicon fa fa-angle-double-right"></i>
                              </a>
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
          :
          <div style={{ padding: "10px", margin: "10px", justifyContent: "center", alignItems: "center", display: "flex" }}>
            <h3>
              No Post Updated Yet.
            </h3>
            <span></span>
          </div>}

      </div>
    </>
  )
}

export default page
