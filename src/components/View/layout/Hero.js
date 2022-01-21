import helper from "../../Common/Helper";
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
                                    <li><a href="#">Shop</a></li>
                                    <li><a href="#">About <i className="fa fa-angle-down"></i></a></li>
                                    <li><a href="#">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header_logo">
                                <a href="index.html">
                                    <img src={helper.ImagePath+"logo.svg"} alt="a" className="img-fluid" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="header_profiles">
                                <ul>
                                    <li><a href="#"><img src={helper.ImagePath+"user_icon.svg"} alt="a" className="img-fluid" /></a></li>
                                    <li><a href="#"><img src={helper.ImagePath+"lock_icon.svg"} alt="a" className="img-fluid" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- header section end --> */}

            {/* <!-- mobile head start --> */}
            <div className="mobile_menu_sec d-lg-none">
                <div className="row">
                    <div className="col-4 text-center">
                        <a href="#" className="iconss">
                            <img src={helper.ImagePath+"insta.png"} alt="a" className="img-fluid" />
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="#">
                            <img src={helper.ImagePath+"logo.svg"} alt="a" className="img-fluid" width="120" />
                        </a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="#" className="iconss">
                            <img src={helper.ImagePath+"lock_icon.svg"} alt="a" className="img-fluid" />
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- mobile head end --> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero_txt">
                            <h6>Introducing Dr Su’s Glow x Grow</h6>
                            <h1>Lorem Ipsum  <br /> Dolor Sit Amet</h1>
                            <p>Consectetur adipiscing elit. Maecenas et fermentum nulla. <br /> Etiam lobortis nibh nunc, sodales facilisis torto.</p>

                            <div className="hero_bttn">
                                <a href="#">BUY NOW</a>
                                <a href="#">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Hero;
