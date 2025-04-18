import axios from "axios";
import { HOST } from "../static";

export const AllPost = (setData, value) => {

    const options = {
        method: 'GET',
        url: `${HOST}post/fetch-all-post-by-category/${value}`,
        headers: {  }
    };

    axios.request(options)
        .then(function (response) {

            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

}
