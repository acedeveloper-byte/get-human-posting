import OTP from '@/components/Authentication/verifyotp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <OTP />
            <Footer />
        </>
    )
}

export default page
