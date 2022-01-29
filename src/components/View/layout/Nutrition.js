import helper from "../../Common/Helper";
const Nutrition = () => {
  return (
    <section className="nutrition_section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="nutriniotn_head">
              <h2>Redefine Nutrition</h2>

              <p>With Dr Su’s 5-A-Day</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="nutrition_txt_wrap">
              <div className="row">
                <div className="col-lg-6">
                  <div className="nutrition_lft_wrap">
                    <div className="nutrition_feat_box margin_btm margin_left">
                      <div className="media">
                        <img src={helper.ImagePath+"avatar.svg"} alt="a" className="img-fluid" />
                        <div className="media-body">
                          <h6>Vitamins</h6>
                          <p>Our bodies cannot produce their own vitamins. Glow x Grow is bursting with vitamins which act as defenders, maintenance workers and healers for your skin and hair. They are also building blocks that keep your hardworking body running!</p>
                        </div>
                      </div>
                    </div>
                    <div className="nutrition_feat_box margin_btm">
                      <div className="media">
                        <img src={helper.ImagePath+"avatar_2.svg"} alt="a" className="img-fluid" />
                        <div className="media-body">
                          <h6>Minerals</h6>
                          <p>Our body cannot create a single mineral. So we created a mineral jackpot that helps you get healthy youthful skin and long lustrous hair from the inside.  </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="placed_img margin_btm ">
                      <img src={helper.ImagePath+"placed_img.png"} alt="a" className="img-fluid" />
                    </div> */}
                    <div className="nutrition_feat_box margin_left_2">
                      <div className="media">
                        <img src={helper.ImagePath+"avatar_3.svg"} alt="a" className="img-fluid" />
                        <div className="media-body">
                          <h6>Fiber</h6>
                          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Integer ac diam vulputate, <br /> fermentum eros in, finibus erat. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="nutrition_lft_wrap">
                    <div className="nutrition_feat_box margin_btm margin_left">
                      <div className="media">
                        <img src={helper.ImagePath+"avatar_4.svg"} alt="a" className="img-fluid" />
                        <div className="media-body">
                          <h6>Antioxidants</h6>
                          <p>Antioxidants deserve all the hype indeed! Glow x Grow being a powerhouse of antioxidants helps with free radical damage, aging and skin repair. They also maintain scalp health & stimulate hair growth! </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="nutrition_feat_box margin_left_2">
                      <div className="media">
                        <img src={helper.ImagePath+"avatar_5.svg"} alt="a" className="img-fluid" />
                        <div className="media-body">
                          <h6>Probiotics</h6>
                          <p>Your gut is the most important organ to keep your body smoooooth. We packed in 1.5 billion probiotics to strengthen your roots and control your breakouts. </p>
                        </div>
                      </div>
                    </div>
                    <div className="placed_img margin_btm text-center">
                      <img src={helper.ImagePath+"placed_img.png"} alt="a" className="img-fluid" />
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
export default Nutrition;
