import helper from "../../Common/Helper";
const Slider = () =>{
    return(
        <section className="slider_section">
        <div className="container">
          
             
            {
              (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)) ?
              <div className="row justify-content-center">
                <div className="col-lg-12 lg-12">
                  <div className="vdo_sliders">
                    <a href="#">
                      {/* <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/> */}
                      <iframe width="100%" src="https://www.youtube.com/embed/CidUwgLQjo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </a>
                    {/* <a href="#">
                      <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/>
                    </a>
                    <a href="#">
                      <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/>
                    </a> */}
                  </div>
                </div>
              </div>
              :
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
                      {/* <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/> */}
                      <iframe width="100%"  height="300" src="https://www.youtube.com/embed/CidUwgLQjo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </a>
                    <a href="#">
                      {/* <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/> */}
                      <iframe width="100%"  height="300" src="https://www.youtube.com/embed/CidUwgLQjo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </a>  
                    <a href="#">
                      {/* <img src={helper.ImagePath+"slider_img.svg"} alt="a" className="img-fluid"/> */}
                      <iframe width="100%"  height="300" src="https://www.youtube.com/embed/CidUwgLQjo4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </a>
                  </div>
                </div>
              </div>
            }   
             
              
          
        </div>
      </section>
    )
}
export default Slider;
