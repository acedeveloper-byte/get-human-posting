import axios from "axios";
import { HOST } from "../static";

export const RecentPostsApi = (setData, value) => {

    const options = {
        method: 'GET',
        url: `${HOST}post/fetch-all-post`,
        headers: { }
    };

    axios.request(options)
        .then(function (response) {

            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

}
