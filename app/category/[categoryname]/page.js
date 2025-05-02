'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import CategoryDetails from '@/components/CategoryDetails';


const page = () => {
    return (
        <>
            <Header />
            <section >
            <div className='penci-single-wrapper'>
                <CategoryDetails />
            </div>
            </section>
            <Footer />
        </>

    )
}


export default page
