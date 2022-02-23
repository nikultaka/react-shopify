import helper from "../../Common/Helper";
const Footer = () => {
    return (
        <footer className="footer_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-12">
                        <div className="ftr_logo">
                            <img src={helper.ImagePath+"ftr_logo.svg"} alt="Logo Footer" className="img-fluid" />

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at feugiat felis. Sed dapibus tincidunt ipsum vitae rhoncus. Pellentesque maximus, velit sed volutpat hendrerit, purus ipsum dignissim quam.</p>

                        </div>
                        <div className="ftr_social">
                            <ul>
                                <li><span>Find us on :</span></li>
                                <li><a href="#"><img src={helper.ImagePath+"fb.png"} alt="a" className="img-fluid" /></a></li>
                                {/* <li><a href="#"><img src={helper.ImagePath+"twtr.png"} alt="a" className="img-fluid" /></a></li> */}
                                <li><a href="#"><img src={helper.ImagePath+"instagram.png"} alt="a" className="img-fluid" /></a></li>
                                {/* <li><a href="#"><img src={helper.ImagePath+"linkedin.png"} alt="a" className="img-fluid" /></a></li> */}
                            </ul>    
                        </div>

                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="ftr_links">
                            <h6>Home</h6>

                            <ul>
                                <li><a href="#product_buy_sec">Shop</a></li>
                                <li><a href="#aboutus_section">About</a></li>
                                <li><a href="#reviews_section">Reviews</a></li>
                                {/* <li><a href="#">FAQs</a></li>
                                <li><a href="#">User Reviews</a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="ftr_links">
                            <h6>Legal</h6>

                            <ul>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Refund Policy</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-6">
                        <div className="ftr_links">
                            <h6>Contact</h6>

                            <ul>
                                <li><a href="#">Your Address here <br/>Second Address Line</a></li>
                                <li><a href="#"><strong>Mobile Number</strong></a></li>
                                <li><a href="#"><strong>Support Email (If Any)</strong></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="row brdr_top">
                    <div className="col-lg-4">
                        <div className="ftr_country">
                            <p><img src={helper.ImagePath+"india.png"} alt="a" className="img-fluid" /> INDIA</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ftr_copy">
                            <p>Copyright &copy; 2021 Dr. Su. </p>
                            <p><i className="fa fa-circle"></i></p>
                            <p>All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="paoyment_method">
                            <ul>
                                <li><a href="#"><img src={helper.ImagePath+"visa.png"} alt="a" className="img-fluid" /></a></li>
                                <li><a href="#"><img src={helper.ImagePath+"g_pay.png"} alt="a" className="img-fluid" /></a></li>
                                <li><a href="#"><img src={helper.ImagePath+"discover.png"} alt="a" className="img-fluid" /></a></li>
                                <li><a href="#"><img src={helper.ImagePath+"master.png"} alt="a" className="img-fluid" /></a></li>
                                <li><a href="#"><img src={helper.ImagePath+"paypal.png"} alt="a" className="img-fluid" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            
        </footer>
    )

}
export default Footer;
