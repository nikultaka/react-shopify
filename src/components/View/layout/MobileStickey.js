const MobileStickey = (props) => {
    let quantity = props.quantity
    let setQuantity = props.setQuantity
    let varientId = props.varientId
    let setVarientId = props.setVarientId
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


    return (
        <>


            <div className="mobile_sticky d-lg-none">

                <div className="row sticky_text">
                    <div className="col-4">
                        <div className="ftr_copy">
                            Limited time offer!
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="ftr_copy">
                            Save ₹699
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="ftr_copy">
                            Free Shipping
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center">
                    <div className="quantity">
                        <i className="fa fa-minus quantity__minus" style={{ cursor : 'pointer' }} onClick={() => minusValue(quantity)}></i>
                        <input name="quantity" type="text" readOnly className="quantity__input" value={quantity} />
                        <i className="fa fa-plus quantity__plus" style={{ cursor : 'pointer' }} onClick={() => plusValue(quantity)}></i>
                    </div>
                    <a href="javascript:void(0)" onClick={() => props.handelOnClickBuyNow(varientId, quantity)}>SOLD OUT</a>
                </div>

            </div>

        </>
    )

}
export default MobileStickey;
