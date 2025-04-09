import axios from "axios";
import { HOST } from "../static";

export const Guest_Posting_APi = async (values, router , setloading) => {
    setloading(true)
    try {
        setloading(true)
        const form = new FormData();
        form.append("title", values.title);
        form.append("status", values.status.toString()); // Convert boolean to string
        form.append("content", values.content);
        form.append("category", values.category);
        form.append("user_id", values.user_id); // Ensure this is correctly passed
        form.append("file", values.file);
        setloading(true)
        const response = await axios.post(`${HOST}post/create-new-post`, form, {
            headers: {
                "accept": "*/*", // Accept all responses
            },
        });

        if (response.data.baseResponse?.message === "REQUEST_FULLFILLED") {
            setloading(false)
            // localStorage.setItem("auth_data", JSON.stringify(response.data.response));
            router.push("/your-posts");
        } else {
            setloading(false)
            alert("Error While Posting Blog");
        }
    } catch (error) {
        setloading(false)
        console.error("Error:", error);
        alert("Failed to submit form. Check console for details.");
    }
    
};
