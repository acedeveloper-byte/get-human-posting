import React from "react"

const Banner = ({ username }) => {
    return (
        <div className="profile-container">
            <h1 className="profile-title">{username}</h1>

            <div className="profile-social-icons">
                <a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/></a>
                <a href="#"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/></a>
                <a href="#"><img width="48" height="48" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/></a>
                <a href="#"><img width="40" height="40" src="https://img.icons8.com/office/40/tumblr.png" alt="tumblr"/></a>
            </div>

            <div className="profile-banner">
                <div className="profile-avatar-container">
                    <img
                        src="/assets/images/logo/gh-one.png"
                        alt="Avatar"
                        className="profile-avatar"
                    />
                </div>
                <div className="profile-username">@{username}</div>
                {/* <div className="profile-active">Active 4 seconds ago</div> */}
            </div>
        </div>
    )
}


export default Banner;