'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [user, setUser] = useState({})

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (localStorage.getItem("auth_data")) {
            setUser(JSON.parse(localStorage.getItem("auth_data")))
        }
    }, [])
    const handleLogout = () => {
        localStorage.clear()
    }

    const categories = [

        { value: "tech", label: "Technology" },
        { value: "healthy", label: "Healthy Lifestyle" },
        { value: "fashion", label: "Fashion" },
        { value: "business", label: "Business" },
        { value: "design", label: "Design" },
        { value: "education", label: "Education" },
        { value: "entertainment", label: "Entertainment" },
        { value: "home-&-lifestyle", label: "Home & Lifestyle" },
        { value: "digital-Marketing", label: "Digital Marketing" },
        { value: "social-media", label: "Social Media" },
        { value: "music", label: "Music" },
        { value: "other", label: "Other" },
        { value: "politics", label: "Politics" },
        { value: "real-estate", label: "Real Estate" },
        { value: "sports", label: "Sports" },
        { value: "technology", label: "Technology" },
        { value: "travel", label: "Travel" },
        { value: "wellness", label: "Wellness" },
    ];


    return (
        <>
            <header id="header" className="header-header-10 has-bottom-line" >

                <nav id="navigation" className="header-layout-bottom header-10 menu-style-1" role="navigation" >

                    <div className="container">
                        <div className="mobile-hamburger" ><RiMenu2Line onClick={() => handleShow()} size={30} /></div>

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
                                    null
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
                                        More
                                    </a>

                                    <ul className="dropdown-menu category-scroll list-unstyled mb-0" aria-labelledby="moreMenuLink">

                                        <>
                                            {[

                                                {
                                                    "value": "413",
                                                    "label": "Technology",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/tech.jpg",
                                                    "slug": "tech"
                                                },
                                                {
                                                    "value": "413",
                                                    "label": "Healthy Lifesyle",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/healthy.jpg",
                                                    "slug": "healthy"
                                                },
                                                {
                                                    "value": "413",
                                                    "label": "Fashion",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/fashion.jpg",
                                                    "slug": "fashion"
                                                },
                                                {
                                                    "value": "413",
                                                    "label": "Business",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/business.jpg",
                                                    "slug": "business"
                                                },
                                                {
                                                    "value": "410",
                                                    "label": "Design",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/design.jpg",
                                                    "slug": "design"
                                                },
                                                {
                                                    "value": "426",
                                                    "label": "Education",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/education.jpg",
                                                    "slug": "education"
                                                },
                                                {
                                                    "value": "411",
                                                    "label": "Entertainment",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/entertainment.jpg",
                                                    "slug": "entertainment"
                                                },
                                                {
                                                    "value": "416",
                                                    "label": "Home & Lifestyle",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/home-lifestyle.jpg",
                                                    "slug": "home-lifestyle"
                                                },
                                                {
                                                    "value": "6",
                                                    "label": "Digital Marketing",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/digital-marketing.jpg",
                                                    "slug": "digital-marketing"
                                                },
                                                {
                                                    "value": "4",
                                                    "label": "Social Media",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/social-media.jpg",
                                                    "slug": "social-media"
                                                },
                                                {
                                                    "value": "412",
                                                    "label": "Music",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/music.jpg",
                                                    "slug": "music"
                                                },
                                                {
                                                    "value": "437",
                                                    "label": "Politics",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/politics.jpg",
                                                    "slug": "politics"
                                                },
                                                {
                                                    "value": "436",
                                                    "label": "Real Estate",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/real-estate.jpg",
                                                    "slug": "real-estate"
                                                },
                                                {
                                                    "value": "415",
                                                    "label": "Sports",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/sports.jpg",
                                                    "slug": "sports"
                                                },
                                                {
                                                    "value": "418",
                                                    "label": "Travel",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/travel.jpg",
                                                    "slug": "travel"
                                                },
                                                {
                                                    "value": "417",
                                                    "label": "Wellness",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/wellness.jpg",
                                                    "slug": "wellness"
                                                },
                                                {
                                                    "value": "417",
                                                    "label": "Sales",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/sales.jpg",
                                                    "slug": "sales"
                                                },
                                                {
                                                    "value": "1",
                                                    "label": "Other",
                                                    "imgSrc": "https://api.acedigitalsolution.com/resources/category/other.jpg",
                                                    "slug": "other"
                                                }
                                            ]
                                                .map((item, index) => {
                                                    return (
                                                        <li key={index} ><a href={`/category/${item.slug}`}>{item.label}</a></li>
                                                    )
                                                })}
                                        </>
                                    </ul>
                                </li>
                                {user?.user_name &&
                                    <li className="nav-item profile-menu">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            id="profileMenuLink"
                                        >
                                            Profile
                                        </a>

                                        <ul className="dropdown-menu category-scroll list-unstyled mb-0" aria-labelledby="profileMenuLink">
                                            {[
                                                { value: `members/${user.user_name}`, label: "View Profile" },
                                                { value: `members/${user.user_name}`, label: "Settings" },
                                                { value: "login", label: "Logout" },
                                            ].map((item, index) => (
                                                <li key={index}>
                                                    {item.label === "Logout" ? (

                                                        <a href={`/${item.value}`} onClick={() => handleLogout()} >{item.label}</a>
                                                    ) : (


                                                        <a href={`/${item.value}`} >{item.label}</a>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                }

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
            </header>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header>
                    <div>
                        <img src="/assets/images/logo/logo.png" />
                    </div>
                    <div className='button'>
                        <RiCloseLargeLine size={20} onClick={handleClose} />
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                    <ul className="list-unstyled">
                        <li className="mb-2">
                            <a className="nav-link" href="/">{pathname === "/login" ? "" : "HOME"}</a>
                        </li>
                        <li className="mb-2">
                            {user?.user_name ? (
                                <a className="nav-link" href="/submit-article">SUBMIT ARTICLE</a>
                            ) : (
                                <a className="nav-link" href="/login">SUBMIT ARTICLE</a>
                            )}
                        </li>
                        {!user?.user_name && pathname !== "/login" && (
                            <li className="mb-2">
                                <a className="nav-link" href="/login">LOGIN</a>
                            </li>
                        )}

                        {/* More Dropdown */}
                        <li className="mb-2 fw-bold mt-3">More Categories:</li>
                        {categories.map((item, index) => (
                            <li key={index}>
                                <a className="nav-link ps-3" href={`/category/${item.value}`}>{item.label}</a>
                            </li>
                        ))}

                        {/* Profile Dropdown */}
                        {user?.user_name && (
                            <>
                                <li className="mb-2 fw-bold mt-3">Profile:</li>
                                {[
                                    { value: `members/${user.user_name}`, label: "View Profile" },
                                    { value: `members/${user.user_name}`, label: "Settings" },
                                    { value: "login", label: "Logout" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        {item.label === "Logout" ? (
                                            <a className="nav-link ps-3" href={`/${item.value}`} onClick={handleLogout}>
                                                {item.label}
                                            </a>
                                        ) : (
                                            <a className="nav-link ps-3" href={`/${item.value}`}>{item.label}</a>
                                        )}
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Header
