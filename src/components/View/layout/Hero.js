import helper from "../../Common/Helper";
import { Link } from "react-router-dom";
import Product from "./Product";
// import banner1 from "../../../assets/images/banner1.jpg"
const Hero = () => {
    return (
        <section className="hero_section">
            {/* <!-- header section start --> */}
            <header className="header_section d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="header_menu">
                                <ul>
                                    <li><a href={"#product_buy_sec"}>Shop</a></li>
                                    <li><a href="#aboutus_section">About</a></li>
                                    <li><a href="#reviews_section">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header_logo">
                                <a href="index.html">
                                    <img src={helper.ImagePath + "logo.svg"} alt="a" className="img-fluid hlogo" />
                                </a>
                            </div>
                        </div>
                        {/* <div className="col-lg-4">
                            <div className="header_profiles">
                                <ul>
                                    <li><a href="#"><img src={helper.ImagePath+"user_icon.svg"} alt="a" className="img-fluid" /></a></li>
                                    <li><a href="#"><img src={helper.ImagePath+"lock_icon.svg"} alt="a" className="img-fluid" /></a></li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>
            {/* <!-- header section end --> */}

            {/* <!-- mobile head start --> */}
            <div className="mobile_menu_sec d-lg-none">
                <div className="row">
                    <div className="col-4 text-center">
                        <a href="#" className="iconss">
                            {/* <img src={helper.ImagePath + "insta.png"} alt="a" className="img-fluid" /> */}
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="#">
                            <img src={helper.ImagePath + "logo.svg"} alt="a" className="img-fluid hlogo" width="120" />
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="#" className="iconss">
                            <i class="fa fa-bars fa-1" aria-hidden="true" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                            {/* <img src={helper.ImagePath + "lock_icon.svg"} alt="a" className="img-fluid" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" /> */}
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                {/* <button class="dropdown-item" type="button">Action</button>
                                <button class="dropdown-item" type="button">Another action</button>
                                <button class="dropdown-item" type="button">Something else here</button> */}
                                <li><a class="dropdown-item" href={"#product_buy_sec"}>Shop</a></li>
                                <li><a class="dropdown-item" href="#aboutus_section">About</a></li>
                                <li><a class="dropdown-item" href="#reviews_section">Reviews</a></li>
                            </div>
                        </a>
                        {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <!-- mobile head end --> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero_txt">
                            <h6>Introducing Dr Su’s Glow x Grow</h6>
                            <h1>The highest <br /> standards of <br />Nutrition.</h1>
                            <p>Backed with Science,Powered by our Community.</p>

                            <div className="hero_bttn">
                                <a href="#">BUY NOW</a>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero;
