const MobileStickey = () => {
    return (
        <div className="mobile_sticky d-lg-none">
            <div className="d-flex align-items-center">
                <div className="quantity">
                    <i className="fa fa-minus quantity__minus"></i>
                    <input name="quantity" type="text" className="quantity__input" value="1" />
                    <i className="fa fa-plus quantity__plus"></i>
                </div>
                <a href="#">BUY NOW</a>
            </div>
        </div>
    )

}
export default MobileStickey;
