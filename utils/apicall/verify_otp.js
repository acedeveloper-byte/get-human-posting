import axios from "axios";
import { HOST } from "../static";

export const handleOtpCall = async (values, router, setloading) => {
    setloading(true)
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");
    setloading(true)
    const options = {
        method: "POST",
        url: `${HOST}auth/verify-otp/${values.otp}`,
        data: {},
        redirect: "follow",
    }
    const fetchapi = await axios.request(options)
    const resp = await fetchapi
    if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
        setloading(false)
        localStorage.setItem("message" , "Your OTP has been verified successfully." )
        router.push("/login")
    } else {
        setloading(false)

        alert("Error While Logging In")
    }

}


