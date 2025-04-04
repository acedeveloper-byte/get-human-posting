import OTP from '@/components/Authentication/verifyotp'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
    return (
        <div className="">
            <Header />
            <section className="mt-5">
                <OTP />
            </section>
            <section className='mt-5'>

                <Footer />
            </section>
        </div>
    )
}

export default page
