'use client'
import { RecentPostsApi } from '@/utils/apicall/RecentPostsApi'
import { HOST } from '@/utils/static'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

const RecentPosts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        RecentPostsApi(setData)
    }, [])

    return (
        <>
            <aside id="penci_popular_news_widget-2" className="widget penci_popular_news_widget">
                <h3 className="widget-title penci-border-arrow">

                    <span className="inner-arrow">Popular Posts</span></h3>

                <ul id="penci-popularwg-3738"
                    data-paged="1" data-action="penci_popular_news_ajax" data-mes="Sorry, No more posts" data-max="16"
                    className="side-newsfeed display-order-numbers order-numbers-1">
                    {data.slice(0, 5).map((item, index) => {
                        return (
                            <li className="penci-feed"> <span className="order-border-number"> <span className="number-post">{index + 1}</span> </span>
                                <div className="side-item">
                                    <div className="side-image"> <a
                                        
                                        className="penci-lazy penci-image-holder small-fix-size" rel="bookmark"
                                        href={`/${item.url}`}
                                        title={item.title}> 
                                      <img src={`${HOST}resources/post/${item.image}`} />   </a> </div>

                                    <div className="side-item-text">
                                        <h4 className="side-title-post"> <a
                                            href={`/${item.url}`} rel="bookmark"
                                            title={`${item.title}`}> {item.title} </a> </h4>
                                        <div className="grid-post-box-meta penci-side-item-meta pcsnmt-below"> <span
                                            className="side-item-meta side-wdate"><time className="entry-date published">{moment(item.createdAt).format("MMMM Do yy")}</time></span> <span
                                                className="side-item-meta side-wviews">{item.category}</span> </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}


                </ul>

            </aside>
        </>
    )
}

export default RecentPosts
