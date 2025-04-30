
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Banner from '@/components/Profile/Banner'
// import RecentPosts from '@/components/RecentPosts'
import "bootstrap/dist/css/bootstrap.min.css";
import { HOST } from '@/utils/static'
import axios from 'axios'
import { truncateHTML } from '@/utils/functions/truncate'


const page = async ({ params }) => {

    const { authorname } = params
    const fetchapi = await axios.get(`${HOST}profile/fetch-all-post-by-author/${authorname}`)
    const author_data  = fetchapi.data.response
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col md={8}>
                        <Banner username={authorname} />
                        <div className="profile-content-container">
 {author_data.length > 0 ?


          <div class="container penci_sidebar right-sidebar">
            <div className='row '>
              <div class="col-md-8 penci-layout-grid penci-main-sticky-sidebar">
                <div class="theiaStickySidebar">


                  <ul data-layout="grid" class="penci-wrapper-data penci-grid">
                    {author_data.map((item, index) => {
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
                                  loading="lazy" 
                                  />
                              </a>
                            </div>

                            <div class="grid-header-box">
                              <span class="cat">
                                <a class="penci-cat-name penci-cat-3" href={`/category/${item.category}`} rel="category tag">
                                  <span>  {item.category}</span>
                                </a>
                              </span>

                              <h6 class="penci-entry-title entry-title grid-title penci_grid_title_df ">
                                <a href={`/${item.url}`} className='text-decoration-none text-black'>
                                  {item.title}
                                </a>
                              </h6>

                              <div class="penci-hide-tagupdated">
                                <span class="author-italic author vcard">
                                  by <a class="author-url url fn n text-decoration-none text-black" href="">{item.author_name}</a>
                                </span>
                                <p class="entry-date published" >{item.createdAt}</p>
                              </div>

                            </div>
{/* 
                            <div class="item-content entry-content">
                              <p dangerouslySetInnerHTML={{ __html: truncateHTML(item.content, 100) }} />

                            </div> */}

                            <div class="penci-readmore-btn penci-btn-make-button penci-btn-align-center">
                              <a class="penci-btn-readmore text-decoration-none text-black" href={`/${item.url}`}>
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
                    </Col>
                    {/* <Col md={4}>
                        <div id="sidebar"
                            className="penci-sidebar-right penci-sidebar-content style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right penci-sticky-sidebar">
                            <div
                                className="theiaStickySidebar">
                                <RecentPosts />
                            </div>
                        </div>

                    </Col> */}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default page
