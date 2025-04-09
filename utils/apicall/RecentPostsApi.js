import axios from "axios";
import { HOST } from "../static";

export const RecentPostsApi = (setData, value) => {

    const options = {
        method: 'GET',
        url: `${HOST}post/fetch-all-post`,
        headers: { 'User-Agent': 'insomnia/10.3.1' }
    };

    axios.request(options)
        .then(function (response) {

            // setData
            console.log("setData", response.data);
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

}
