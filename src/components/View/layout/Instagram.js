import helper from "../../Common/Helper";
const Instagram = () => {
    return (
        <section className="instagram_post_sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="instagram_btn">
                            <h5>Follow us On Instagram</h5>
                            <a href="#"><i className="fa fa-instagram"></i> @DrSuGlowxGrow</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="instagram_posts">
                            <a href="#">
                                <img src={helper.ImagePath+"post_1.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_2.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_3.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_4.png"} alt="a" className="img-fluid" />
                            </a>
                        </div>
                        <div className="instagram_posts mt-2">
                            <a href="#">
                                <img src={helper.ImagePath+"post_4.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_5.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_6.png"} alt="a" className="img-fluid" />
                            </a>
                            <a href="#">
                                <img src={helper.ImagePath+"post_2.png"} alt="a" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-10">
                        <div className="get_start_wrap">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="get_lft">
                                        <img src={helper.ImagePath+"logo.svg"} alt="a" className="img-fluid" />
                                        <p>Get Newsletters from Dr. Su</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="get_rgt">
                                        <input type="text" placeholder="Your Email" className="form-control" />
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Instagram;
