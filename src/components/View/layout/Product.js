import helper from "../../Common/Helper";
import react, { useState, useEffect } from "react";
import Slider from "react-slick";

const Product = (props) => {
  let product = props.product;
  // const [quantity, setQuantity] = useState(1);
  const [checkedVal, setCheckedVal] = useState(0);
  const [varientPrice, setVarientPrice] = useState(0);
  const [soldVal, setSoldVal] = useState(localStorage.getItem('soldItems') ? localStorage.getItem('soldItems') : randomNumber(50, 100));
  const [selectedSlide, setSelectedSlide] = useState(0);

  // const [varientId, setVarientId] = useState();
  let quantity = props.quantity
  let setQuantity = props.setQuantity
  let varientId = props.varientId
  let setVarientId = props.setVarientId

  //const [product, setProduct] = useState(props.product);


  const handelOnchangeVarient = (key, price, vid) => {

    setCheckedVal(key)
    setVarientPrice(Math.round(price))
    setVarientId(vid)

  }
  const sp = async (price, vid) => {
    setVarientPrice(Math.round(price))
    setVarientId(vid)
  }

  useEffect(() => {
    (async () => {
      let price = product.variants && product.variants[0].price
      if (price > 0) {
        await (sp(product.variants[0].price, product.variants[0].id))
      }

    })();

  }, [product]);


  const minusValue = (value) => {
    if (value > 1) {
      value--;
    }
    setQuantity(value)
  }
  const plusValue = (value) => {
    value++;
    setQuantity(value)
  }
  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  var now = new Date();
  var delay = 60 * 60 * 1000; // 1 hour in msec
  var start = delay - (now.getMinutes() * 60 + now.getSeconds()) * 1000 + now.getMilliseconds();

  setTimeout(function doSomething() {
    localStorage.setItem('soldItems', randomNumber(50, 100))
    setSoldVal(randomNumber(50, 100))
    setTimeout(doSomething, delay);
  }, start)

  const product_v = {
    cursor: 'pointer',
    display: 'block',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    appearance: 'none',
    width: '100%',
    'WebkitAppearance': 'none',
    '-moz-appearance': 'none',
  }
  const settings = {
    dots: true,
    arrows: true,
    speed: 500,
    slidesToShow: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent) ? 1 : 3,
    slidesToScroll: 1,
    vertical: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent) ? false:true,
    rtl: false
    // prevArrow:true,
    // nextArrow:true,
  };
  // next() {
  //   this.slider.slickNext();
  // }
  // previous() {
  //   this.slider.slickPrev();
  // }
  return (

    <section className="product_buy_sec" id="product_buy_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 pr-lg-0">
            <div className="sidebar_img">
              {
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent) ?
                <Slider {...settings}>
                {product && product.images?.length > 0 &&
                  product.images.map((img, key2) => {
                    return (
                      <div key={key2} className={key2 == 0 ? "tab-pane fade show active p-2 mr-2 ml-2" : "tab-pane fade show  p-2 mr-2 ml-2"} id={"v-pills-" + key2} role="tabpanel" aria-labelledby={"v-pills-" + key2}>
                      <img src={img.src} alt="a" className="img-fluid" />
                    </div>
                    )
                  })

                }
              </Slider>
              :
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <Slider {...settings}>
                {product && product.images?.length > 0 &&
                  product.images.map((img, key1) => {
                    return (
                      <a className={selectedSlide == key1 ? "nav-link mr-5 " : "nav-link mr-5"} key={key1} id="v-pills-home-tab" data-toggle="pill" href={"#v-pills-" + key1} role="tab" aria-controls={"v-pills-" + key1} aria-selected="true" onClick={()=>setSelectedSlide(key1)}>
                        <img src={img.src} alt="a" className="img-fluid mr-5" />
                      </a>
                    )
                  })

                }
              </Slider>
            </div>
              }
            
              
         
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_buy_imgs">
              <div className="tab-content" id="v-pills-tabContent">
                {product && product.images?.length > 0 &&
                  product.images.map((img, key2) => {
                    return (
                      <div key={key2} className={key2 == 0 ? "tab-pane fade show active" : "tab-pane fade show"} id={"v-pills-" + key2} role="tabpanel" aria-labelledby={"v-pills-" + key2}>
                        <img src={img.src} alt="a" className="img-fluid"  style={{borderRadius: '10px'}}/>
                      </div>
                    )

                  })
                }

                {/* <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </div> */}
              </div>

            </div>
            <div className="product_feat_wrap">
              <ul>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Fast Shipping</p>
                </li>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Easy Returns</p>
                </li>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Easy Returns</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Fast Shipping</p>
                </li>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Easy Returns</p>
                </li>
                <li>
                  <p> <img src={helper.ImagePath + "checkbox.png"} alt="a" className="img-fluid" /> Easy Returns</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product_buy_txt_wrap">
              <div className="review_txt_wrap">
                <p><img src={helper.ImagePath + "5star.png"} alt="a" className="img-fluid" /> from 1611 Reviews</p>
              </div>
              <div className="product_title_wrap">
                <h3>{product ? product.title : ""}</h3>
              </div>
              <div className="price_box_wrap">
                <h4>₹{varientPrice}</h4>
                <div className="price_midle_txt">
                  <p>MRP <span>₹1499</span></p>
                  <h5>You Save <span>₹699</span></h5>
                  <h6>Inclusive of all Taxes.</h6>
                </div>
                <div className="media sold_qty">
                  <img src={helper.ImagePath + "amp.png"} alt="a" className="img-fluid" />
                  <div className="media-body">
                    <h6>{soldVal} Sold</h6>
                    <p>in the last 1 hour</p>
                  </div>
                </div>
              </div>
              <div className="product_pick_wrap">
                <h5>In a dolor sed velit semper finibus. Praesent consectetur.</h5>
                <div className="row">
                  {product && product.variants?.length > 0 &&
                    product.variants.map((variant, key3) => {

                      return (
                        <div className="col-6" key={key3}>
                          <div className={checkedVal == key3 ? 'active_variant media' : "media"} style={{ position: 'relative' }}>
                            <input type='radio' className="product_v" id={key3} name="v" style={product_v} onClick={() => handelOnchangeVarient(key3, variant.price, variant.id)} checked={checkedVal === key3} />
                            <img src={helper.ImagePath + "pack_1.png"} alt="a" className="img-fluid" />
                            <img src={helper.ImagePath + "pack_2.png"} alt="a" className="img-fluid mt_3" />
                            <div className="media-body">
                              <h6>{variant.title}</h6>
                              <p>210gm x2</p>
                            </div>
                          </div>
                        </div>
                      )

                    })

                  }

                  {/* <div className="col-6">
                    <div className="media">
                      <img src={helper.ImagePath + "pack_1.png"} alt="a" className="img-fluid" />
                      <img src={helper.ImagePath + "pack_2.png"} alt="a" className="img-fluid mt_3" />
                      <div className="media-body">
                        <h6>Pack of 5</h6>
                        <p>210gm x5</p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="product_buy_count_wrap">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="quantity">
                      <i className="fa fa-minus quantity__minus" onClick={() => minusValue(quantity)}></i>
                      <input name="quantity" type="text" className="quantity__input" value={quantity} />
                      <i className="fa fa-plus quantity__plus" onClick={() => plusValue(quantity)}></i>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <a href="javascript:void(0)" onClick={() => props.handelOnClickBuyNow(varientId, quantity)} className="product_buy_btn">BUY NOW</a>
                    {/* <a href="#" className="product_buy_btn_2"><img src={helper.ImagePath + "lock_icon.svg"} alt="a" className="img-fluid" /></a> */}
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
                      <p>Glow x Grow, a power packed blend of 38 ingredients that delivers the perfect nutrition profile of vitamins, minerals, antioxidants, fiber and probiotics in just one sachet! We never use any artificial flavors, colors or preservatives.
                        <br />
                        We are on a mission to make you feel great!
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="product_descriptions">
                      <p>38 global ingredients that make Glow x Grow the most potent blend ever! <br />
                        Lemon powder (20%), Orange powder, Beet root powder (3%), Carrot powder (3%), Oats fiber, Tomato powder, Rock salt, Ashwagandha extract 2.5%, Banana powder, Barley grass powder, Black salt, Spinach Powder (2%), Wheat Grass Powder (2%), Mint Leaves Powder (2%), Bottle gourd powder (1%), Alfalfa powder, Apple powder, Celery Leaves Powder, Inulin, Moringa Powder, Sunflower Lecithin, Tamarind powder, Strawberry powder, Acerola cherry extract 17%, Almond Flour, Amchur Powder, Amla powder, Blueberry extract (1%), Coriander leaves powder, Cranberry extract, Curcumin 95%, Flaxseed Powder 50%, Ginseng extract, Goji berry extract, Green tea extract 98%, Sea Buckthorn, Spirulina Powder, Vitamin and Mineral Mix, Xanthan Gum (E415), Stevia, Probiotics (Lactobacillus acidophilus, Lactobacillus rhamnosus, Lactobacillus fermentum, Bifidobacterium longum, Bifidobacterium bifidum, Saccharomyces boulardii) 1.5 Billion CFU Per Serving (7g)
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="product_descriptions">
                      <p>
                        Step 1 : Pour one sachet of Glow x Grow into 200 ml of water or your favorite drink.<br />
                        Step 2 : Stir/ blend until fully dissolved.<br />
                        Step 3 : Keep glowing and growing.<br />
                        <b>Consume one sachet daily at any time. Best results when taken in the morning on an empty stomach. </b><br />
                        Recommended Dosage : 1 serving per day or as suggested by healthcare professionals.<br />
                        Tastes Like : Lemon and Mint. So refreshing, there’s nothing quite like it!


                      </p>
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
