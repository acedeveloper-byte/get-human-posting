'use client';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { handleOtpCall } from '@/utils/apicall/verify_otp';
import { Spinner } from 'react-bootstrap';

const OTP = () => {
    const [loading, setloading] = useState(false)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        onSubmit: async (values) => {
            await handleOtpCall(values, router, setloading);
        },
    });

    const { values, handleChange, handleSubmit } = formik;

    return (
        <>
            {loading && <div className='loading-overlay' />}
            <div className="split-form">
                <div className="image-side">
                    <h2>Last Step!</h2>
                    <p>Please verify otp and get access to your account</p>
                </div>
                <div className="form-side">
                    <h2>Verify OTP</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="otp"
                            placeholder="Otp"
                            required
                            onChange={handleChange}
                            value={values.otp}
                        />

                        <button type="submit">                    {loading ? <Spinner animation="border" /> : "verify"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default OTP;
