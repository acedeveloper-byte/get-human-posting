import axios from "axios";
import { HOST } from "../static";

export const Guest_Posting_APi = async (values, router) => {
    var auth_data = localStorage.getItem("auth_data")


    var id = parseInt(auth_data)
    // const myHeaders = new Headers();
    // myHeaders.append("accept", "*/*");
    // myHeaders.append("Content-Type", "application/json");

    // /* user_id: { type: String, required: true },
    //     title: { type: String, required: true },
    //     category: { type: String },
    //     status: { type: Boolean, required: true },
    //     content: { type: String, required: true } */

    // const options = {
    //     method: "POST",
    //     url: `${HOST}auth/login`,
    //     data: {
    //         title: values.title,
    //         content: values.content,
    //         status: true,
    //         user_id: id._id,
    //         category: values.category
    //     },
    //     redirect: "follow",
    // }
    // console.log("options:", options)
    // const fetchapi = await axios.request(options)
    // const resp = await fetchapi
    // console.log(resp.data.baseResponse.message)
    // if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
    //     localStorage.setItem("auth_data", JSON.stringify(resp.data.response))
    //     router.push("/")
    // } else {
    //     alert("Error While Logging In")
    // }

}


