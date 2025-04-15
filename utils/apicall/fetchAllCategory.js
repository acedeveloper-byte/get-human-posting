import axios from "axios";
import { HOST } from "../static";

export const FetchAllCategory = (setData, value) => {

    const options = {
        method: 'GET',
        url: `${HOST}category/fetch-all-category`,
        headers: {  }
    };

    axios.request(options)
        .then(function (response) {

            setData(response.data.response)
        }).catch(function (error) {
            console.error(error);
        });

}
