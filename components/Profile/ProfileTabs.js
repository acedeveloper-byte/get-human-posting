import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


const tabs = ["Profile", "Settings"]
const ProfileTabs = ({ setActiveTabs, contentActiveTabs, setContentActiveTabs }) => {


    const [activeTabs, setActiveNavTabs] = useState("Profile")

    const handleActiveTabs = (tabs) => {

        setActiveNavTabs(tabs)
        setActiveTabs(tabs)
    }


    const handleActiveContentTabs = (active) => {
        setContentActiveTabs(active)
    }
    return (
        <Container>
            <div className="profile-tabs-container">
                {/* Top Tabs */}
                <ul className="profile-tabs primary-tabs">
                    <li onClick={() => handleActiveTabs("Profile")} >
                        <a href="#" className={activeTabs === "Profile" ? "active" : ""}>
                            Profile
                        </a>

                    </li>

                    <li onClick={() => handleActiveTabs("Settings")}>
                        <a href="#" className={activeTabs === "Settings" ? "active" : ""}>
                            Settings
                        </a>
                    </li>
                </ul>

                {activeTabs === "Profile" && (
                    <ul className="profile-tabs secondary-tabs">
                        <li onClick={() => handleActiveContentTabs("View")}>
                            <a href="#" className={contentActiveTabs === "View" ? "active" : ""}>
                                View
                            </a>
                        </li>

                        <li onClick={() => handleActiveContentTabs("Edit")}>
                            <a href="#" className={contentActiveTabs === "Edit" ? "active" : ""}>
                                Edit
                            </a>
                        </li>
                    </ul>
                )}


                {activeTabs === "Settings" && (
                    <ul className="profile-tabs secondary-tabs">
                        {["General"].map((tab, idx) => (
                            <li key={idx} onClick={() => handleActiveContentTabs(tab)}>
                                <a href="#" className={tab === "General" ? "active" : ""}>
                                    {tab}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}


            </div>
        </Container>
    )
}

export default ProfileTabs
