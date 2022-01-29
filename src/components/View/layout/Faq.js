const Faq = () => {
    return (
        <section className="faq_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="nutriniotn_head">
                            <h2>Frequently Asked Questions</h2>

                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <div className="faq_txt_wrap">
                            <div className="bs-example">
                                <div className="accordion" id="accordionExample">
                                    <div className="card" id="headingOne">
                                        <div className="card-header p-0" id="headingOne">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn" data-toggle="collapse" data-target="#collapseOne">
                                                    <span> <h6>When should I take Glow x Grow?</h6>
                                                        <i className="fa fa-plus"></i>
                                                    </span>
                                                </button>
                                            </h2>

                                        </div>
                                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>We would love you to have it before breakfast on an empty stomach for best results. If not, you can sneak in whenever it is convenient for you during the day!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn" data-toggle="collapse" data-target="#collapseTwo"> <span> <h6>Should Glow x Grow be added only to water?</h6>
                                                    <i className="fa fa-plus"></i>
                                                </span></button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>Absolutely not! Glow x Grow can be a great addition to your favorite smoothie/drink/meal/snack.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn collapsed" data-toggle="collapse" data-target="#collapseThree"><span> <h6>For how long should I take Glow x Grow?</h6>
                                                    <i className="fa fa-plus"></i>
                                                </span></button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>Glow x Grow is not a quick fix. For good lasting results, have it daily for at least 6 months. But good health is a lifelong commitment, so why stop?</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFour">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn collapsed" data-toggle="collapse" data-target="#collapseFour"><span> <h6> Do I need to consult a doctor before using Glow x Grow?</h6>
                                                    <i className="fa fa-plus"></i>
                                                </span></button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>Glow x Grow is made out of real ingredients that are safe to consume. So a doctor consultation is not required</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingFive">
                                            <h2 className="mb-0">
                                                <button type="button" className="btn collapsed" data-toggle="collapse" data-target="#collapseFive"><span> <h6>I am facing a payment issue or some other issue, how do I contact you?</h6>
                                                    <i className="fa fa-plus"></i>
                                                </span></button>
                                            </h2>
                                        </div>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <p>Claims List:<br/>

                                                   1.  Ayush<br/>
                                                   2.  Doctor developed<br/>
                                                   3.  USFDA<br/>
                                                   4.  No Sugar Added<br/>
                                                   5.  High Fiber<br/>
                                                   6.  No Artificial Flavors<br/>
                                                   7.  No Artificial Colors/Preservatives<br/>
                                                   8.  111 proven benefits<br/>
                                                   9.  Complete nutrition<br/>
                                                   10. Non GMO<br/>
                                                   11. 100% Veg/Vegetarian<br/>
                                                   12. Clinically proven<br/>
                                                </p>
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
export default Faq;
