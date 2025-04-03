
import React from 'react'

const Header = () => {
    return (
        <>
            <header id="header" class="header-header-10 has-bottom-line" itemscope="itemscope"
                itemtype="https://schema.org/WPHeader">
                <nav id="navigation" class="header-layout-bottom header-10 menu-style-1" role="navigation" itemscope
                    itemtype="https://schema.org/SiteNavigationElement">
                    <div class="container">
                        <div class="button-menu-mobile header-10"></div>
                        <div class="penci-mobile-hlogo"> <a href="index.html"><img fetchPriority="high"
                            class="penci-mainlogo penci-mainlogo-mb penci-limg"
                            src="/assets/images/logo/gh-one.png"
                            alt="Guest Posting" width="600" height="151" /></a>
                        </div>
                        <div class="penci-menu-wrap">
                            <ul id="menu-menu" class="menu">
                                <li id="menu-item-50"
                                    class="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-has-children menu-item-has-label ajax-mega-menu menu-item-50">
                                    <a href="index.html">Home</a>
                                </li>
                                <li id="menu-item-52"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-has-children menu-item-52">
                                    <a href="category/life-style/index.html">Life Style</a>

                                </li>
                                <li id="menu-item-53"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-53">
                                    <a href="category/fashion/index.html">Fashion</a>
                                </li>
                            </ul>
                            <div id="logo" >
                                <a href="index.html">
                                    <img class="penci-mainlogo penci-limg penci-logo"
                                        src={"/assets/images/logo/gh-one.png"}
                                    />
                                </a>
                            </div>
                            <ul id="menu-menu-second" class="menu">
                                <li id="menu-item-54"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-54">
                                    <a href="category/food/index.html">Food</a>
                                </li>
                                <li id="menu-item-55"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu penci-megapos-flexible penci-mega-menu pcmn-ajxd menu-item-55">
                                    <a href="category/travel/index.html">Travel</a>
                                </li>
                                <li id="menu-item-1567"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                        href="category/technology/index.html">Tech</a></li>
                                <li id="menu-item-167"
                                    class="menu-item menu-item-type-taxonomy menu-item-object-category ajax-mega-menu menu-item-1567"><a
                                        href="/write-with-us">Write With Us</a></li>
                            </ul>
                        </div>
                        <div class="penci-header-extra">

                            <div id="top-search" class="penci-top-search pcheader-icon top-search-classes"> <a href="#"
                                class="search-click" aria-label="Search"> <i class="penciicon-magnifiying-glass"></i> </a>
                                <div class="show-search pcbds-default">
                                    <form role="search" method="get" class="pc-searchform" action="https://soledaddemo.pencidesign.net/">
                                        <div class="pc-searchform-inner"> <input type="text" class="search-input"
                                            placeholder="Type and hit enter..." name="s" /> <i class="penciicon-magnifiying-glass"></i>
                                            <button type="submit" class="searchsubmit">Search</button> </div>
                                    </form> <a href="#" aria-label="Search" class="search-click close-search"><i
                                        class="penciicon-close-button"></i></a>
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
