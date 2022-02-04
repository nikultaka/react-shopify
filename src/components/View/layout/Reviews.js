import helper from "../../Common/Helper";
const Reviews = () =>{
    return(
        <section className="reviews_section" id="reviews_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="nutriniotn_head our_reviews">
                <h2>Our Reviews</h2>
                <p>Know why people love us!</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-6">
              <div className="overall_rating_wrap">
                <div className="media">
                  <span>
                    4.9/5 <i className="fa fa-star"></i>
                  </span>
                  <div className="media-body">
                    <h6>Overall Ratings</h6>
                    <p>From 1611 Reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="overall_rating_img">
                <ul>
                  <li><span>Photos <br/>
                    from our <br/>
                    Customers</span></li>
                    <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                    <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                    <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                    <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                    <li><img src={helper.ImagePath+"view_2.png"} alt="a" className="img-fluid"/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="review_box_wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="review_box_lft">
                        <div className="media">
                          <img src={helper.ImagePath+"circle.png"} alt="a" className="img-fluid"/>
                          <div className="media-body">
                            <h6>Reviewer’s Name</h6>
                            <p>16/11/2021</p>
                          </div>
                        </div>
                        <div className="verified_rev">
                            <p><img src={helper.ImagePath+"tik.svg"} alt="a" className="img-fluid"/> Verified Purchase</p>
    
                            <ul>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_2.png"} alt="a" className="img-fluid"/></li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="review_box_rgt">
    
                      <h4>5.0 <i className="fa fa-star"></i></h4>
    
                        <h6>Title for the Review Comes here</h6>
    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate est dui, et tempor massa tempus eget. Nullam blandit quis justo venenatis ornare. Nunc euismod nisl nibh, eget consectetur mauris blandit vel. Vivamus leo neque, ultrices a felis ac, hendrerit ultrices lacus.</p>
    
                        <h5><img src={helper.ImagePath+"like.svg"} alt="a" className="img-fluid"/> I recommend this product</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review_box_wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="review_box_lft">
                        <div className="media">
                          <img src={helper.ImagePath+"circle.png"} alt="a" className="img-fluid"/>
                          <div className="media-body">
                            <h6>Reviewer’s Name</h6>
                            <p>16/11/2021</p>
                          </div>
                        </div>
                        <div className="verified_rev">
                            <p><img src={helper.ImagePath+"tik.svg"} alt="a" className="img-fluid"/> Verified Purchase</p>
    
                            <ul>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_2.png"} alt="a" className="img-fluid"/></li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="review_box_rgt">
    
                      <h4>5.0 <i className="fa fa-star"></i></h4>
    
                        <h6>Title for the Review Comes here</h6>
    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate est dui, et tempor massa tempus eget. Nullam blandit quis justo venenatis ornare. Nunc euismod nisl nibh, eget consectetur mauris blandit vel. Vivamus leo neque, ultrices a felis ac, hendrerit ultrices lacus.</p>
    
                        <h5><img src={helper.ImagePath+"like.svg"} alt="a" className="img-fluid"/> I recommend this product</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review_box_wrap">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="review_box_lft">
                        <div className="media">
                          <img src={helper.ImagePath+"circle.png"} alt="a" className="img-fluid"/>
                          <div className="media-body">
                            <h6>Reviewer’s Name</h6>
                            <p>16/11/2021</p>
                          </div>
                        </div>
                        <div className="verified_rev">
                            <p><img src={helper.ImagePath+"tik.svg"} alt="a" className="img-fluid"/> Verified Purchase</p>
    
                            <ul>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_1.png"} alt="a" className="img-fluid"/></li>
                              <li><img src={helper.ImagePath+"view_2.png"} alt="a" className="img-fluid"/></li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="review_box_rgt">
    
                      <h4>5.0 <i className="fa fa-star"></i></h4>
    
                        <h6>Title for the Review Comes here</h6>
    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate est dui, et tempor massa tempus eget. Nullam blandit quis justo venenatis ornare. Nunc euismod nisl nibh, eget consectetur mauris blandit vel. Vivamus leo neque, ultrices a felis ac, hendrerit ultrices lacus.</p>
    
                        <h5><img src={helper.ImagePath+"like.svg"} alt="a" className="img-fluid"/> I recommend this product</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="read_more_reviews">
                <a href="#">Read More Reviews</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="write_review">
                <h6>Write your Review about Dr. Su Glow x Grow</h6>
                <a href="#"><i className="fa fa-plus"></i> ADD REVIEW</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Reviews;
