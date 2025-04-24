// /[slug]/page.js

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Postdetails from '@/components/Postdetails';
import { AllPostBytitle } from '@/utils/apicall/post_by_title';
import axios from 'axios';
import { HOST } from '@/utils/static';


export  async function generateMetadata({ params }) {

  const res =  await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`);
  console.log(`${HOST}post/fetch-all-post-by-url/${params.slug}`)
  const post = res.data.response;
 
  return {
    title: post.title,
    description:  "Read more about " + post.title,
  };
}


// ✅ Must be a default export
export default async function  Page({ params }) {

  const res = await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`);
  const post = res.data.response;
  console.log(post.response)
  return (
    <>
      <Header />
      <div className='penci-single-wrapper'>
        <Postdetails data={post}/>
      </div>
      <Footer />
    </>
  );
}
