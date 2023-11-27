import React from 'react'
import './index.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const logo = "https://trulyfreehome.com/img/footer-logo.png";

function Footer() {
    return (
        <div className='footer'>
            <div className="container_fluid custom_gap">
                <p className='text-md-start logo'>
                    <img src={logo} alt="Footer logo" />
                </p>
                <div className="row justify-content-between footerText  text-md-start">
                    <div className="col-sm-12 col-md-12 col-lg-4 footerContent tabCenter">
                        <div>
                            <h3>Customer Support 231-944-1716 <br />Mon-Fri 9am-5pm EST</h3>
                            <p class="mb-3">Truly Free, Inc<br />
                                6261 US Highway 31 N,<br />
                                Williamsburg, MI
                                49690<br />
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 footer-menu-col">
                        <div className="d-flex footer-menu">
                            <ul>
                                <li><strong>SHOP</strong></li>
                                <li>
                                    Sign In
                                </li>
                                <li>Laundry
                                </li>
                                <li>Bathroom
                                </li>
                                <li>Kitchen
                                </li>
                                <li>Whole Home
                                </li>
                                <li>Essential Oils
                                </li>
                                <li>Gift Sets
                                </li>
                                <li>Bottles &amp; Replacement Items
                                </li>
                            </ul>
                            <ul>
                                <li><strong>ABOUT</strong></li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Support</li>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Reviews</li>
                                <li>Become An Affiliate</li>
                                <li>Brand Ambassadors</li>
                                <li>Ingredients</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 footer-menu-col2">
                        <div className="newsletterBox">
                            <div className="input-group mb-1">
                                <input type="text" id="newsletter_email" class="form-control" placeholder="Enter Your Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" value="" />
                                <button class="btn btn-lg join-now" type="submit" id="button-addon2">
                                    <ArrowForwardIosIcon />
                                </button>
                            </div>
                            <h4 class="mt-3  text-md-start">Subscribe For The Latest Deals, Offers and News From Truly Free</h4>
                            <div class="footerSocial mb-2">
                                <span class="social_icon"><FacebookIcon /></span>
                                <span class="social_icon"><TwitterIcon /></span>
                                <span class="social_icon"><InstagramIcon /></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyRight">
                <div class="container_fluid custom_gap">
                    <div class="d-flex flex-column flex-md-row justify-content-between  text-md-start">
                        <div>
                            <p>© 2023 Copyright Truly Free, Inc. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
