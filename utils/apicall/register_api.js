import axios from "axios";
import { HOST } from "../static";

export const handleRegisterApiCall = async (values, router, setloading) => {
  try {

    setloading(true)
    const response = await fetch(`${HOST}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    setloading(true)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    if (data.baseResponse.message === "REQUEST_FULLFILLED") {
      setloading(false)
      router.push("/verify-otp")
    } else {
      setloading(false)
      alert("Error While Logging In")
    }
    return data;
  } catch (error) {
    return { error: error.message };  // Ensure error structure matches API expectations
  }
};