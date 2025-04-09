'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
      {/* <Header /> */}

      <div className="container penci_sidebar right-sidebar" style={{ transform: 'none' }}>
        <div id="main" className="penci-layout-grid penci-main-sticky-sidebar">
          <div className="theiaStickySidebar">
            <div className="archive-box">
              <div className="title-bar pcatitle-default">
                <span>Author </span>
                <h1 className="page-title">Penci Design</h1>
              </div>
            </div>

            <div className="post-author abio-style-4 bioimg-square">
              <div className="author-img">
                <img
                  alt="Author Avatar"
                  src="https://secure.gravatar.com/avatar/8612232278edda9fe1d495399d2a552d?s=100&d=mm&r=g"
                  className="penci-lazy avatar avatar-100 photo lazyloaded pcloaded"
                  height="100"
                  width="100"
                  decoding="async"
                  srcSet="https://secure.gravatar.com/avatar/8612232278edda9fe1d495399d2a552d?s=200&d=mm&r=g 2x"
                />
              </div>
              <div className="author-content">
                <h5>
                  <a
                    href="https://soledaddemo.pencidesign.net/author/admin/"
                    title="Author Penci Design"
                    rel="author"
                  >
                    Penci Design
                  </a>
                </h5>
                <p>
                  I’m originally from sleepy California in the US. I’m a crazy dreamer and with an insatiable desire for travel and adventure who could never settle.
                </p>
                <div className="bio-social">
                  <a rel="noreferrer" target="_blank" className="author-social" href="https://pencidesign.net/">
                    <i className="penci-faicon fa fa-globe"></i>
                  </a>
                  <a rel="noreferrer" target="_blank" className="author-social" href="https://facebook.com/envato">
                    <i className="penci-faicon fa fa-facebook"></i>
                  </a>
                  <a rel="noreferrer" target="_blank" className="author-social" href="https://x.com/Envato">
                    <i className="penci-faicon penciicon-x-twitter"></i>
                  </a>
                  <a rel="noreferrer" target="_blank" className="author-social" href="#">
                    <i className="penci-faicon fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Additional content (posts, sidebar, widgets, etc.) goes here — already in JSX-friendly format */}
          </div>
        </div>

        <div
          id="sidebar"
          className="penci-sidebar-right penci-sidebar-content style-15 pcalign-left pcsb-boxed-widget pciconp-right pcicon-right penci-sticky-sidebar"
        >
          <div className="theiaStickySidebar">
       
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Page
