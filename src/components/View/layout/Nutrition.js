import helper from "../../Common/Helper";
const Nutrition = () => {
  const imgStyle = {
    width: "100px"
  }
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
          {/* <div className="col-lg-12">
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
                    <div className="placed_img margin_btm ">
                      <img src={helper.ImagePath+"placed_img.png"} alt="a" className="img-fluid" />
                    </div>
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
          </div> */}
          <div class="col-lg-12">
            <div class="nutrition_txt_wrap">
              <div class="row">
                <div class="col-lg-6">
                  <div class="nutrition_lft_wrap">
                    <div class="nutrition_feat_box margin_btm margin_left">
                      <div class="media">
                        <img src={helper.ImagePath + "VITAMINS.png"} alt="a" className="img-fluid" style={imgStyle} />
                        <div class="media-body">
                          <h6>Vitamins</h6>
                          <p>More than 75% Indians suffer from vitamin deficiency, leading to poor overall health. GxG is packed with essential vitamins to superboost your skin, hair & body.</p>
                        </div>
                      </div>
                    </div>
                    <div class="nutrition_feat_box margin_btm margin_btm_2 mb_5">
                      <div class="media">
                        <img src={helper.ImagePath + "MINERALS.png"} alt="a" className="img-fluid" style={imgStyle} />
                        <div class="media-body">
                          <h6>Minerals</h6>
                          <p>Lack of minerals is a major cause of weak hair roots and skin concerns. GxG gives you your daily dose of minerals in one single sachet.</p>
                        </div>
                      </div>
                    </div>
                    {/* <div class="placed_img margin_btm">
                      <img src={helper.ImagePath + "RedefineNutrition.png"} alt="a" className="img-fluid" style={{ backgroundColor: "#41a0e1", borderRadius: "12px" }} />
                    </div> */}
                    <div class="nutrition_feat_box margin_left_2">
                      <div class="media">
                        <img src={helper.ImagePath + "HighFiber.png"} alt="a" className="img-fluid" style={imgStyle} />
                        <div class="media-body">
                          <h6>Fiber</h6>
                          <p>Poor fiber intake plays a large role in acne breakouts, poor gut health & lack of sleep. GxG helps you begin your day the right way with its fiber-rich formulation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="nutrition_lft_wrap left_padding">
                    <div class="nutrition_feat_box margin_btm margin_left margin_btm_3 " style={{ display : 'block' }}>
                      <div class="media">
                        <img src={helper.ImagePath + "Antioxidants-27.png"} alt="a" className="img-fluid" style={imgStyle} />
                        <div class="media-body">
                          <h6>Anti-oxidants</h6>
                          <p>Always wanted young, glowing & radiant skin? Let GxG,  with its supercharged antioxidant rich ingredients work its magic.</p>
                        </div>
                      </div>
                    </div>
                    <div class="placed_img margin_btm text-center ">
                      <img src={helper.ImagePath + "red_nut.png"} alt="a" className="img-fluid" style={{ backgroundColor: "#41a0e1", borderRadius: "12px" }} />
                    </div>
                    <div class="nutrition_feat_box margin_left_2 margin_btm_2">
                      <div class="media">
                        <img src={helper.ImagePath + "PROBIOTICS.png"} alt="a" className="img-fluid" style={imgStyle} />
                        <div class="media-body">
                          <h6>Probiotics</h6>
                          <p>Healthy Gut → Healthy Brain → Healthy Skin → Healthy Hair → Happy You.
                            Power packed with probiotics, GxG is the first step to a happier you.</p>
                        </div>
                      </div>
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
