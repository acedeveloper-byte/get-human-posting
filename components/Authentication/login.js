'use client'
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { handleApiCall } from '@/utils/apicall/login';
import { useRouter } from 'next/navigation';
import { Spinner } from 'react-bootstrap';

const Login = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [authData, setAuthData] = useState(null);
  const [message, setMessage] = useState(null);

  // Load localStorage data safely in useEffect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAuth = localStorage.getItem("auth_data");
      const storedMessage = localStorage.getItem("message");

      if (storedAuth) {
        const parsedAuth = JSON.parse(storedAuth);
        setAuthData(parsedAuth);

        if (!parsedAuth?.user_name) {
          router.push("/");
        }
      }

      if (storedMessage) {
        setMessage(storedMessage);
        setTimeout(() => {
          localStorage.removeItem("message");
        }, 1000);
      }
    }
  }, []);

  // Formik form handling
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      await handleApiCall(values, router, setLoading);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  return (
    <div className="split-form">
      <div className="image-side">
        <h2>Welcome Back!</h2>
        <p>Enter your details to access your account</p>
      </div>

      <div className="form-side">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          {message && (
            <div
              style={{
                borderRadius: '5px',
                width: '100%',
                background: '#D1F6D1',
                padding: '5px',
                textAlign: 'center',
                color: '#006600',
                display: 'block',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p style={{ marginBottom: 0 }}>{message}</p>
            </div>
          )}

          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
            value={values.email}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
            value={values.password}
          />

          <button type="submit">
            {loading ? <Spinner animation="border" /> : "Login"}
          </button>
        </form>

        <span>
          <strong>Don't have an account ?</strong>{" "}
          <a href="/register" className="text-decoration-none text-blue">
            Click here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Login;
