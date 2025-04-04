import axios from "axios";
import { HOST } from "../static";

export const Guest_Posting_APi = async (values, router) => {


    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    /* user_id: { type: String, required: true },
        title: { type: String, required: true },
        category: { type: String },
        status: { type: Boolean, required: true },
        content: { type: String, required: true } */

    const options = {
        method: "POST",
        url: `${HOST}post/create-new-post`,
        data: values,
        redirect: "follow",
    }
    console.log("options:", options)
    const fetchapi = await axios.request(options)
    const resp = await fetchapi
    console.log(resp.data)
    if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
        localStorage.setItem("auth_data", JSON.stringify(resp.data.response))
        router.push("/")
    } else {
        alert("Error While Posting blog")
    }

}


