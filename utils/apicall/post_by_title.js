import axios from "axios";
import { HOST } from "../static";

export const AllPostBytitle = (setData, value) => {

    const options = {
        method: 'GET',
        url: `${HOST}post/fetch-all-post-by-url/${value}`,
        headers: {  }
    };

    axios.request(options)
        .then(function (response) {

            // setData
            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

}
