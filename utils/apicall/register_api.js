import axios from "axios";
import { HOST } from "../static";

export const handleRegisterApiCall = async (values, router) => {
  try {
    const response = await fetch(`${HOST}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.baseResponse.message === "REQUEST_FULLFILLED") {
      router.push("/verify-otp")
    } else {
      alert("Error While Logging In")
    }
    return data;
  } catch (error) {
    return { error: error.message };  // Ensure error structure matches API expectations
  }
};