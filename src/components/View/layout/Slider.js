import helper from "../../Common/Helper";
const Slider = () =>{
    return(
        <section className="slider_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <a href="#" className="slidPrv_1">
                <img src={helper.ImagePath+"arrw_lft.svg"} alt="a" className="img-fluid"/>
              </a>
              <a href="#" className="slidNext_1">
                <img src={helper.ImagePath+"arw_rgt.svg"} alt="a" className="img-fluid"/>
              </a>
              <div className="vdo_sliders">
                <a href="#">
                  <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/>
                </a>
                <a href="#">
                  <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/>
                </a>
                <a href="#">
                  <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Slider;
