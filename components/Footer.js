import React from 'react'

const Footer = () => {
    return (
        <>
            <footer id="footer-section" className="penci-footer-social-media footer-social-remove-radius " itemScope
                itemType="https://schema.org/WPFooter">
                <div className="container">
                    <div className="footer-socials-section penci-social-colored ">
                        <ul className="footer-socials">
                            <li><a href="#" aria-label="Facebook" rel="noreferrer" ><i
                                className="penci-faicon fa fa-facebook"></i> <span>Facebook</span></a> </li>
                            <li><a href="#" aria-label="Twitter" rel="noreferrer" ><i
                                className="penci-faicon penciicon-x-twitter"></i> <span>Twitter</span></a> </li>
                            <li><a href="#" aria-label="Instagram" rel="noreferrer" ><i
                                className="penci-faicon fa fa-instagram"></i> <span>Instagram</span></a> </li>
                            <li><a href="#" aria-label="Pinterest" rel="noreferrer" ><i
                                className="penci-faicon fa fa-pinterest"></i> <span>Pinterest</span></a> </li>
                            <li><a href="#" aria-label="Youtube" rel="noreferrer" ><i
                                className="penci-faicon fa fa-youtube-play"></i> <span>Youtube</span></a> </li>
                            <li><a href="#"
                                aria-label="Email" rel="noreferrer" ><i className="penci-faicon fa fa-envelope"></i>
                                <span>Email</span></a> </li>
                        </ul>
                    </div>
                    <div className="penci-flag-rlt-popup"></div>
                    <div className="footer-logo-copyright footer-not-logo footer-not-gotop">
                        <div id="footer-copyright">
                            <p>@2025 - All Right Reserved. Designed and Developed by <a rel="nofollow"
                                href="/" >The Blog Guest</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
