import axios from "axios";
import { HOST } from "../static";

export const GetAllPostByUserId = async (id, setData) => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    const options = {
        method: "GET",
        url: `${HOST}post/fetch-all-post-by-user-id/${id}`,
        redirect: "follow",
    }
    const fetchapi = await axios.request(options)
    const resp = await fetchapi


    if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
        setData(resp.data.response)
    } else {
        resp.data.length === 0 && alert("no post found")

    }

}


