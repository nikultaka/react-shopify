import helper from "../../Common/Helper";
import react, { useState, useEffect } from "react";
const Product = (props) => {
  let product = props.product;
  // const [quantity, setQuantity] = useState(1);
  const [checkedVal, setCheckedVal] = useState(0);
  const [varientPrice, setVarientPrice] = useState(0);
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
      let price = product.variants[0].price
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
  return (

    <section className="product_buy_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-1 pr-lg-0">
            <div className="sidebar_img">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                {product && product.images?.length > 0 &&
                  product.images.map((img, key1) => {
                    return (
                      <a className="nav-link" key={key1} id="v-pills-home-tab" data-toggle="pill" href={"#v-pills-" + key1} role="tab" aria-controls={"v-pills-" + key1} aria-selected="true">
                        <img src={img.src} alt="a" className="img-fluid" />
                      </a>
                    )
                  })

                }

                {/* <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                  <img src={helper.ImagePath + "glow_main_img.png"} alt="a" className="img-fluid" />
                </a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="product_buy_imgs">
              <div className="tab-content" id="v-pills-tabContent">
                {product && product.images?.length > 0 &&
                  product.images.map((img, key2) => {
                    return (
                      <div key={key2} className={key2 == 0 ? "tab-pane fade show active" : "tab-pane fade show"} id={"v-pills-" + key2} role="tabpanel" aria-labelledby={"v-pills-" + key2}>
                        <img src={img.src} alt="a" className="img-fluid" />
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
                <h4><img src={helper.ImagePath + "rupi.png"} alt="a" className="img-fluid" /> {varientPrice}</h4>
                <div className="price_midle_txt">
                  <p>MRP <span>₹1499</span></p>
                  <h5>You Save <span>₹699</span></h5>
                  <h6>Inclusive of all Taxes.</h6>
                </div>
                <div className="media">
                  <img src={helper.ImagePath + "amp.png"} alt="a" className="img-fluid" />
                  <div className="media-body">
                    <h6>100 Sold</h6>
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
