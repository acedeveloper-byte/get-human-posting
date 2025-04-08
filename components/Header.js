'use client'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


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
                        <div className="button-menu-mobile header-10"></div>
                        <div className="penci-mobile-hlogo"> <a href="/"><img fetchPriority="high"
                            className="penci-mainlogo penci-mainlogo-mb penci-limg"
                            src="/assets/images/logo/logo.png"
                            alt="Guest Posting" width="600" height="151" /></a>
                        </div>
                        <div className="penci-menu-wrap">
                            <ul id="menu-menu" className="menu">

                                <li id="menu-item-50"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-has-label ajax-mega-menu menu-item-50">
                                    <a href="/">{pathname === "/login" ? "" : "HOME"}</a>
                                </li>

                                <li id="menu-item-52"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-has-children menu-item-52">
                                    <a href="/">Life Style</a>
                                </li>
                                <li id="menu-item-53"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-53">
                                    <a href="/">Fashion</a>
                                </li>
                            </ul>
                            <div id="logo" >
                                <a href="/">
                                    <img className="penci-mainlogo penci-limg penci-logo"
                                        src={"/assets/images/logo/logo.png"}
                                    />
                                </a>
                            </div>
                            <ul id="menu-menu-second" className="menu">
                                <li id="menu-item-54"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-54">
                                    <a href="#">Food</a>
                                </li>
                                <li id="menu-item-55"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-55">
                                    <a href="#">Travel</a>
                                </li>
                                <li id="menu-item-1567"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                        href="#">Tech</a></li>

                                <li id="menu-item-167"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                        href="/submit-article">SUBMIT ARTICLE</a></li>
                                {user?.user_name ?
                                    <>

                                        <li id="menu-item-167"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                                href="/your-posts">My Profile </a></li>


                                        <li id="menu-item-167"
                                            class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                                href="#" onClick={() => handleLogout()}>Logout</a></li> </> : <li id="menu-item-167"
                                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                                        href="/login">{pathname === "/login" ? "" : "LOGIN"}</a></li>
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
        </>
    )
}

export default Header
