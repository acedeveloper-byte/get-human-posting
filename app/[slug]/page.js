// /[slug]/page.js

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Postdetails from '@/components/Postdetails';
import axios from 'axios';
import { HOST, SITE_URL } from '@/utils/static';
import { notFound } from 'next/navigation';


export async function generateMetadata({ params }) {

  const res = await axios.get(`${HOST}post/fetch-all-post-by-url/${params.slug}`);
  const post = res.data.response;
const canonicalUrl = `${SITE_URL}/${params.slug}`;
  return {
    title: post.title,
    description: "Read more about " + post.title,
     alternates: {
      canonical: canonicalUrl,
    },
  };
}

const getData = async (slug) => {
  const res = await fetch(`${HOST}post/fetch-all-post-by-url/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
};

// ✅ Must be a default export
export default async function Page({ params }) {
  const { slug } = params
  const post = await getData(slug)
  // const  post =[]



  if (!post || post.length === 0) {
    notFound(); // Redirect to 404 page using Next.js built-in 404 handling
  }

  return (
    <>
      <Header />
      <div className='penci-single-wrapper'>
        <Postdetails data={post.response} />
      </div>
      <Footer />
    </>
  );
}
