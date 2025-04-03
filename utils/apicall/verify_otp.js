import axios from "axios";
import { HOST } from "../static";

export const handleOtpCall = async (values, router) => {

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    const options = {
        method: "POST",
        url: `${HOST}auth/verify-otp/${values.otp}`,
        data: {},
        redirect: "follow",
    }
    const fetchapi = await axios.request(options)
    const resp = await fetchapi
    if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
        router.push("/login")
    } else {
        alert("Error While Logging In")
    }

}


