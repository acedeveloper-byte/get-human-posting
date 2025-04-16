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
        { value: "Lifestyle", label: "Lifestyle" },
        { value: "Latest", label: "Latest Blog" },
        { value: "Featured", label: "Featured Blog" },
        { value: "Tech", label: "Technology" },
        { value: "Healthy", label: "Healthy Lifestyle" },
        { value: "Fashion", label: "Fashion" },
        { value: "Business", label: "Business" },
        { value: "Design", label: "Design" },
        { value: "Domain Names", label: "Domain Names" },
        { value: "Education", label: "Education" },
        { value: "Entertainment", label: "Entertainment" },
        { value: "Home & Lifestyle", label: "Home & Lifestyle" },
        { value: "Marketing", label: "Marketing" },
        { value: "Digital Marketing", label: "Digital Marketing" },
        { value: "SEO", label: "SEO" },
        { value: "Social Media", label: "Social Media" },
        { value: "Music", label: "Music" },
        { value: "Other", label: "Other" },
        { value: "Politics", label: "Politics" },
        { value: "Real Estate", label: "Real Estate" },
        { value: "Sports", label: "Sports" },
        { value: "Technology", label: "Technology" },
        { value: "Travel", label: "Travel" },
        { value: "Video", label: "Video" },
        { value: "Web Hosting", label: "Web Hosting" },
        { value: "Web Security", label: "Web Security" },
        { value: "Wellness", label: "Wellness" },
        { value: "Writing", label: "Writing" }
      ];


    return (
        <>
            <header id="header" className="header-header-10 has-bottom-line" >
          
                <nav id="navigation" className="header-layout-bottom header-10 menu-style-1" role="navigation" >

                    <div className="container">
                    <div  className="mobile-hamburger" ><RiMenu2Line onClick={() => handleShow()} size={30} /></div>

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
                                                { "value": "Lifestyle", "label": "Lifestyle" },
                                                { "value": "Latest", "label": "Latest Blog" },
                                                { "value": "Featured", "label": "Featured Blog" },
                                                { "value": "Tech", "label": "Technology" },
                                                { "value": "Healthy", "label": "Healthy Lifestyle" },
                                                { "value": "Fashion", "label": "Fashion" },
                                                { "value": "Business", "label": "Business" },
                                                { "value": "Design", "label": "Design" },
                                                { "value": "Domain Names", "label": "Domain Names" },
                                                { "value": "Education", "label": "Education" },
                                                { "value": "Entertainment", "label": "Entertainment" },
                                                { "value": "Home & Lifestyle", "label": "Home & Lifestyle" },
                                                { "value": "Marketing", "label": "Marketing" },
                                                { "value": "Digital Marketing", "label": "Digital Marketing" },
                                                { "value": "SEO", "label": "SEO" },
                                                { "value": "Social Media", "label": "Social Media" },
                                                { "value": "Music", "label": "Music" },
                                                { "value": "Other", "label": "Other" },
                                                { "value": "Politics", "label": "Politics" },
                                                { "value": "Real Estate", "label": "Real Estate" },
                                                { "value": "Sports", "label": "Sports" },
                                                { "value": "Technology", "label": "Technology" },
                                                { "value": "Travel", "label": "Travel" },
                                                { "value": "Video", "label": "Video" },
                                                { "value": "Web Hosting", "label": "Web Hosting" },
                                                { "value": "Web Security", "label": "Web Security" },
                                                { "value": "Wellness", "label": "Wellness" },
                                                { "value": "Writing", "label": "Writing" }
                                            ].map((item, index) => {
                                                return (
                                                    <li key={index} ><a href={`/category/${item.value}`}>{item.label}</a></li>
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
                    {item.label === "Logout" ?(

                        <a href={`/${item.value}`} onClick={() =>  handleLogout()} >{item.label}</a>
                    ) :(

                    
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
            <img src="/assets/images/logo/logo.png"  />
            </div>
            <div className='button'>
<RiCloseLargeLine  size={20} onClick={handleClose}/>
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
