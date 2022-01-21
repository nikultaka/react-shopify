import helper from "../../Common/Helper";
const Product = () =>{
    return(
        <section className="product_buy_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-1 pr-lg-0">
                <div className="sidebar_img">
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                      <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                    </a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                      <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                    </a>
                    <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                      <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                    </a>
                    <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                      <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                    </a>
                  </div>
                </div>
            </div>
            <div className="col-lg-5">
              <div className="product_buy_imgs">
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <img src={helper.ImagePath+"glow_main_img.png"} alt="a" className="img-fluid"/>
                  </div>
                </div>
                
              </div>
              <div className="product_feat_wrap">
                <ul>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Fast Shipping</p>
                  </li>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Easy Returns</p>
                  </li>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Easy Returns</p>
                  </li>
                </ul>
                <ul>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Fast Shipping</p>
                  </li>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Easy Returns</p>
                  </li>
                  <li>
                    <p> <img src={helper.ImagePath+"checkbox.png"} alt="a" className="img-fluid"/> Easy Returns</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product_buy_txt_wrap">
                <div className="review_txt_wrap">
                  <p><img src={helper.ImagePath+"5star.png"} alt="a" className="img-fluid"/> from 1611 Reviews</p>
                </div>
                <div className="product_title_wrap">
                  <h3>Glow x Grow</h3>
                </div>
                <div className="price_box_wrap">
                  <h4><img src={helper.ImagePath+"rupi.png"} alt="a" className="img-fluid"/> 1299</h4>
                  <div className="price_midle_txt">
                    <p>MRP <span>₹1499</span></p>
                    <h5>You Save <span>₹699</span></h5>
                    <h6>Inclusive of all Taxes.</h6>
                  </div>
                  <div className="media">
                    <img src={helper.ImagePath+"amp.png"} alt="a" className="img-fluid"/>
                    <div className="media-body">
                      <h6>100 Sold</h6>
                      <p>in the last 1 hour</p>
                    </div>
                  </div>
                </div>
                <div className="product_pick_wrap">
                  <h5>In a dolor sed velit semper finibus. Praesent consectetur.</h5>
                  <div className="row">
                    <div className="col-6">
                      <div className="media">
                        <img src={helper.ImagePath+"pack_1.png"} alt="a" className="img-fluid"/>
                        <img src={helper.ImagePath+"pack_2.png"} alt="a" className="img-fluid mt_3"/>
                        <div className="media-body">
                          <h6>Pack of 2</h6>
                          <p>210gm x2</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-6">
                      <div className="media">
                        <img src={helper.ImagePath+"pack_1.png"} alt="a" className="img-fluid"/>
                        <img src={helper.ImagePath+"pack_2.png"} alt="a" className="img-fluid mt_3"/>
                        <div className="media-body">
                          <h6>Pack of 5</h6>
                          <p>210gm x5</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="product_buy_count_wrap">
                 <div className="row">
                   <div className="col-lg-4">
                      <div className="quantity">
                        <i className="fa fa-minus quantity__minus"></i>
                        <input name="quantity" type="text" className="quantity__input" value="1"/>
                        <i className="fa fa-plus quantity__plus"></i>
                      </div>
                   </div>
                   <div className="col-lg-8">
                    <a href="#" className="product_buy_btn">BUY NOW</a>
                    <a href="#" className="product_buy_btn_2"><img src={helper.ImagePath+"lock_icon.svg"} alt="a" className="img-fluid"/></a>
                   </div>
                 </div>
                </div>
                <div className="product_details_wrap">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Details</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Ingredients</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">How to Use</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                      <div className="product_descriptions">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim in lacus consectetur pulvinar a id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                      <div className="product_descriptions">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim in lacus consectetur pulvinar a id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                      <div className="product_descriptions">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at enim in lacus consectetur pulvinar a id ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed dignissim mi et ligula porttitor, vitae aliquam mauris sagittis. Integer egestas mi dolor, eu bibendum ipsum maximus vitae. Nulla quam enim, lacinia eu dictum ut, imperdiet non urna. Nulla porta aliquet ex, scelerisque interdum eros ultrices et. Suspendisse sagittis magna euismod sollicitudin pretium.</p>
                      </div>
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
export default Product;
