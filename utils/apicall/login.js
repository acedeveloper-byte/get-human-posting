import axios from "axios";
import { HOST } from "../static";

export const handleApiCall = async (values, router, setloading) => {
    setloading(true)
    const myHeaders = new Headers();
    myHeaders.append("accept", "*/*");
    myHeaders.append("Content-Type", "application/json");
    setloading(true)

    const options = {
        method: "POST",
        url: `${HOST}auth/login`,
        data: {
            email: values.email,
            password: values.password
        },
        redirect: "follow",
    }
    const fetchapi = await axios.request(options)
    const resp = await fetchapi

    setloading(true)

    if (resp.data.baseResponse.message === "REQUEST_FULLFILLED") {
        setloading(false)

        localStorage.setItem("auth_data", JSON.stringify(resp.data.response))
        router.push("/")
    } else {
        setloading(false)
        alert(resp.data.baseResponse.message)
    }

}


