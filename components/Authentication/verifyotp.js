'use client';
import React from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { handleOtpCall } from '@/utils/apicall/verify_otp';

const OTP = () => {
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        onSubmit: async (values) => {
            await handleOtpCall(values, router);
        },
    });

    const { values, handleChange, handleSubmit } = formik;

    return (
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

                    <button type="submit">OTP</button>
                </form>
            </div>
        </div>
    );
};

export default OTP;
