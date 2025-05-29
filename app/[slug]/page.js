// /[slug]/page.js

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Postdetails from '@/components/Postdetails';
import axios from 'axios';
import { HOST } from '@/utils/static';
import { notFound } from 'next/navigation';


export  async function generateMetadata({ params }) {

  const res =  await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`);
  console.log(`${HOST}post/fetch-all-post-by-url/${params.slug}`)
  const post = res.data.response;
 
  return {
    title: post.title,
    description:  "Read more about " + post.title,
  };
}

const getData = async () => {
  const res =  await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`, {
    cache: "no-store", // ya revalidate: 60 if you want ISR
  });
    const post = res.data.response;
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};



// ✅ Must be a default export
export default async function  Page({ params }) {
  
const  post = await getData(params)


  if (!post || post.length === 0) {
    notFound(); // Redirect to 404 page using Next.js built-in 404 handling
  }
  
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
