import axios from "axios";
import { HOST } from "../static";

export const UpdatePost = async (values, router, setloading) => {
    setloading(true);

    const form = new FormData();
    form.append("title", values.title);
    form.append("status", values.status);
    form.append("content", values.content);
    form.append("category", values.category);
    form.append("user_id", values.user_id);
    form.append("file", values.file);


    const options = {
        method: 'PUT',
        url: `${HOST}post/update-post/${values.url}`,
        headers: {
            'Content-Type': 'multipart/form-data; boundary=---011000010111000001101001',
        },
        data: form
    };

    axios.request(options).then(function (response) {
        if (response.data.baseResponse?.message === "REQUEST_FULLFILLED") {
            alert("Post updated successfully!");
            router.push("/your-posts");
        } else {
            alert("Error while updating the post.");
        }
    }).catch(function (error) {
        console.error(error);
    });




};
