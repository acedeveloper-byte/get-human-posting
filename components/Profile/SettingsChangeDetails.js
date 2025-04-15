// components/EmailPasswordForm.js
const axios = require('axios');
import { HOST } from "@/utils/static";
import { useEffect } from "react";
import { useState } from "react";

const EmailPasswordForm = () => {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const  [ errortext , setErrortext] = useState("")

  const  [user, setUser] = useState(null)


useEffect(() => {
  if  ( localStorage.getItem("auth_data")){
    setUser(JSON.parse(localStorage.getItem("auth_data")))
  } 
} ,[])



  const handlePassSubmit = () => {
    let data = JSON.stringify({
      "currentpassword": currentPassword,
      "newpassword": generatedPassword
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${HOST}auth/update-password/${user._id}`,
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        if (response.data.baseResponse.status ===  1) {
          setGeneratedPassword("")
          setCurrentPassword("")
          alert("Updated Successfully")
        } else {
          setErrortext(response.data.baseResponse.message)
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className="email-password-form">
      <h2>Email & Password</h2>
      <p>Update your email and/or password.</p>

      <div className="form-group">
        <label>Current Password <span className="required">*</span></label>
        <input type="password" placeholder="Enter current password" onChange={(e) => setCurrentPassword(e.target.value)} />
        {/* <small><a href="#">Lost your password?</a></small> */}
      </div>

      <div className="form-group">
        <label>Account Username</label>
        <input type="text" value={"mayank.kumarace@gmail.com"} readOnly />
      </div>



      <div className="form-group">
        <label>Add Your New Password</label>
        <div className="password-input-group">
          <input
            type={"text"}
            value={generatedPassword}
            onChange={(e) => setGeneratedPassword(e.target.value)}
          />
    
          <button type="button" className="cancel-btn mt-2" onClick={() => handlePassSubmit()}>
            submit
          </button>

          {errortext && <p className="text-danger">{errortext === "SOMETHING_WENT_WRONG" && "Please Provide correct current password"}</p> }
        </div>
      </div>
    </div>
  );
};

export default EmailPasswordForm;
