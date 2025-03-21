import axios from "axios";
import { HOST } from "../static";

export const handleApiCall = async (values) => {

    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");

    const options = {
        method: "POST",
        url: `${HOST}auth/login`,
        body: JSON.stringify({
            email: values.email,
            password: values.password
        }),
        redirect: "follow",
    }
    console.log("options:", options)
    const fetchapi = await axios.request(options)
    const resp = await fetchapi
    console.log("resp:::", resp)
    return resp
}