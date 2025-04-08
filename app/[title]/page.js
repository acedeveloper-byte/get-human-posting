'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import Postdetails from '@/components/Postdetails';


const page = () => {
  return (
    < >
      <Header />
      <div className='penci-single-wrapper'>

        <Postdetails />
      </div>
      <Footer />
    </>

  )
}

export default page
