import { HOST } from '@/utils/static'
import axios from 'axios'
import moment from 'moment'
import React from 'react'

const DATA = [
    { id: 1, image: "placeholder.png" },
    { id: 2, image: "placeholder.png" },
    { id: 3, image: "placeholder.png" },
    { id: 4, image: "placeholder.png" },
    { id: 5, image: "placeholder.png" },
]

const getData = async () => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-category/fashion`, {
    cache: "no-store", // ya revalidate: 60 if you want ISR
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};

const LifeStyleSection = async () => {
    const  fashiondata  = await getData()
    // useEffect(() => {
    //     const fetchTravelData = async () => {
    //         try {
    //             const travel = await axios.get(`${HOST}post/fetch-all-post-by-category/fashion`)
    //             const travel_data = travel.data.response
    //             console.log("travel_data:", travel_data)
    //             setData(travel_data)
    //         } catch (error) {
    //             console.error("Error fetching travel data:", error)
    //         }
    //     }

    //     fetchTravelData()
    // }, [])

    return (
        <section
        class="penci-section penci-disSticky penci-structure-22 elementor-section elementor-top-section elementor-element elementor-element-4e591b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="4e591b2" data-element_type="section">
        <div class="elementor-container elementor-column-gap-wide">
            <div
                class="penci-ercol-66 penci-ercol-order-1 penci-sticky-ct elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-306763c"
                data-id="306763c" data-element_type="column">
                <div class="elementor-widget-wrap elementor-element-populated">
                    <div
                        class="elementor-element elementor-element-c20c2f0 elementor-widget elementor-widget-penci-featured-cat"
                        data-id="c20c2f0" data-element_type="widget" data-widget_type="penci-featured-cat.default">
                        <div class="elementor-widget-container">
                            <div id="pencifeatured_cat_4326" class="penci-featured-cat-sc">
                                <section class="home-featured-cat mag-cat-style-6">
                                    
                                    <div class="home-featured-cat-wrapper">
                                        <div class="home-featured-cat-content pwf-id-default style-6">
                                            <div class="cat-left">
                                                {fashiondata.response.slice(0, 1).map((itex, idx) => {
                                                    return (
                                                        <div class="mag-post-box hentry first-post">
                                                            <div class="magcat-thumb"> <img class="penci-image-holder penci-lazyimg"
                                                                src={`${HOST}resources/post/${itex.image}`}
                                                                href={`/${itex.url}`}
                                                                title={`${itex.title}`} /> </div>
                                                            <div class="magcat-detail">
                                                                <div class="mag-header">
                                                                    <h3 class="magcat-titlte entry-title"><a
                                                                        href={`/${itex.url}`}>{itex.title}</a> </h3>
                                                                    <div class="grid-post-box-meta mag-meta"> <span
                                                                        class="featc-author author-italic author">by <a class="url fn n"
                                                                            href="#">{itex.author_name}</a></span>  <span class="featc-date"><time class="entry-date published">{moment(itex.createdAt).format("MMMM Do yy")}</time></span> </div>
                                                                </div>
                                                                <div class="mag-excerpt entry-content">
                                                                    <p>{itex.title}</p>
                                                                </div>
                                                                <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                    class="author-url url fn n" href="#">{itex.author_name}</a>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                            <div class="cat-right">
                                                {fashiondata.response.slice(1, 5).map((idx, indx) => {
                                                    return (
                                                        <div class="mag-post-box hentry">
                                                            <div class="magcat-thumb">
                                                                <img class="penci-image-holder penci-lazy small-fix-sizeimg"
                                                                    src={`${HOST}resources/post/${idx.image}`}
                                                                    href={`/${idx.title}`}
                                                                    title={`${idx.title}`} />
                                                            </div>
                                                            <div class="magcat-detail">
                                                                <h3 class="magcat-titlte entry-title"><a
                                                                    href={`/${idx.title}`}>{idx.title}</a> </h3>
                                                                <div class="grid-post-box-meta mag-meta"> <span class="featc-date"><time
                                                                    class="entry-date published" datetime="2021-07-30T08:08:29+00:00">{moment(idx.createdAt).format("MMMM Do yy")}</time></span> </div>
                                                                <div class="penci-hide-tagupdated"> <span class="author-italic author vcard">by <a
                                                                    class="author-url url fn n" href="#">{idx.author_name}</a>
                                                                </span> </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default LifeStyleSection
