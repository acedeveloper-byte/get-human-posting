'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'


const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [user, setUser] = useState({})

    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setUser(JSON.parse(localStorage.getItem("auth_data")))
        }
    }, [])
    const handleLogout = () => {
        localStorage.clear()
        router.push('/login')
    }


    return (
        <>
            <header id="header" className="header-header-10 has-bottom-line" >
                <nav id="navigation" className="header-layout-bottom header-10 menu-style-1" role="navigation" >

                    <div className="container">
                        <div id="logo">
                            <a href="/">
                                <img className="penci-mainlogo penci-limg penci-logo"
                                    src={"/assets/images/logo/logo.png"}
                                />
                            </a>
                        </div>
                        <div className="button-menu-mobile header-10"></div>
                        <div className="penci-menu-wrap">
                            <ul id="menu-menu" className="menu">


                            </ul>


                            {/* Dropdown for Additional Items */}
                            <ul id="menu-menu-second" className="menu d-flex align-items-center list-unstyled mb-0">
                                {/* Always Visible Items */}
                                <li className="nav-item me-3">
                                    <a className="nav-link" href="/">{pathname === "/login" ? "" : "HOME"}</a>
                                </li>


                                <li>
                                    {user?.user_name ? (
                                        <a className="dropdown-item" href="/submit-article">SUBMIT ARTICLE</a>
                                    ) : (
                                        <a className="dropdown-item" href="/login">SUBMIT ARTICLE</a>
                                    )}
                                </li> {user?.user_name ? (
                                    <>
                                        <li><a className="dropdown-item" href="/your-posts">My Profile</a></li>
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a>
                                        </li>
                                    </>
                                ) : (
                                    <li>
                                        <a className="dropdown-item" href="/login">{pathname === "/login" ? "" : "LOGIN"}</a>
                                    </li>
                                )}
                                {/* More Dropdown */}
                                <li className="nav-item more-menu">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        id="moreMenuLink"
                                    >
                                        More ▾
                                    </a>

                                    <ul className="dropdown-menu category-scroll list-unstyled mb-0" aria-labelledby="moreMenuLink">

                                        <>
                                            {[

                                                { "value": "413", "label": "Lifestyle" },
                                                { "value": "413", "label": "Latest" },
                                                { "value": "413", "label": "Featured" },
                                                { "value": "413", "label": "Tech" },
                                                { "value": "413", "label": "Healthy" },
                                                { "value": "413", "label": "Fashion" },
                                                { "value": "413", "label": "Business" },
                                                { "value": "410", "label": "Design" },
                                                { "value": "7", "label": "Domain Names" },
                                                { "value": "426", "label": "Education" },
                                                { "value": "411", "label": "Entertainment" },
                                                { "value": "416", "label": "Home & Lifestyle" },
                                                { "value": "425", "label": "Marketing" },
                                                { "value": "6", "label": "Digital Marketing", "indent": true },
                                                { "value": "5", "label": "SEO", "indent": true },
                                                { "value": "4", "label": "Social Media", "indent": true },
                                                { "value": "412", "label": "Music" },
                                                { "value": "1", "label": "Other" },
                                                { "value": "437", "label": "Politics" },
                                                { "value": "436", "label": "Real Estate" },
                                                { "value": "415", "label": "Sports" },
                                                { "value": "414", "label": "Technology" },
                                                { "value": "418", "label": "Travel" },
                                                { "value": "299", "label": "Video" },
                                                { "value": "8", "label": "Web Hosting" },
                                                { "value": "9", "label": "Web Security" },
                                                { "value": "417", "label": "Wellness" },
                                                { "value": "10", "label": "Writing" }].map((item, index) => {
                                                    return (
                                                        <li><a style={item.indent ? { paddingLeft: "1.5rem" } : {}} href={`/category/${item.label}`}>{item.label}</a></li>
                                                    )
                                                })}
                                        </>



                                    </ul>
                                </li>
                            </ul>


                        </div>
                        <div className="penci-header-extra">

                            <div id="top-search" className="penci-top-search pcheader-icon top-search-classNamees"> <a href="#"
                                className="search-click" aria-label="Search"> <i className="penciicon-magnifiying-glass"></i> </a>
                                <div className="show-search pcbds-default">
                                    <form role="search" method="get" className="pc-searchform" action="https://soledaddemo.Author.net/">
                                        <div className="pc-searchform-inner"> <input type="text" className="search-input"
                                            placeholder="Type and hit enter..." name="s" /> <i className="penciicon-magnifiying-glass"></i>
                                            <button type="submit" className="searchsubmit">Search</button> </div>
                                    </form> <a href="#" aria-label="Search" className="search-click close-search"><i
                                        className="penciicon-close-button"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    )
}

export default Header
