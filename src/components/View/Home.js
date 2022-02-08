import AboutUs from "./layout/AboutUs";
import Faq from "./layout/Faq";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Instagram from "./layout/Instagram";
import MobileStickey from "./layout/MobileStickey";
import Nutrition from "./layout/Nutrition";
import Product from "./layout/Product";
import Reviews from "./layout/Reviews";
import SeeOn from "./layout/SeeOn";
import SignUp from "./layout/Signup";
import Slider from "./layout/Slider";
import WhyWe from "./layout/WhyWe";
import PopUpBtn from "./PopUpBtn";
import { useState } from "react";
import MobileMenu from "./layout/MobileMenu";




const Home = (props) => {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      }); 
      const [isopen, setIsOpen] = useState(false)
      const toggleDrawer = (anchor, open) => (event) => {
        setIsOpen(open)
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    

    return (
        <>
            <MobileMenu state={state} toggleDrawer={toggleDrawer} />
            <Hero  toggleDrawer={toggleDrawer}  isopen={isopen}/>
            <SeeOn />
            <Product product={props.product} handelOnClickBuyNow={props.handelOnClickBuyNow} quantity={props.quantity} setQuantity={props.setQuantity} varientId={props.varientId} setVarientId={props.setVarientId} />
            <Nutrition />
            <WhyWe />
            <Slider />
            <AboutUs />
            <Reviews />
            <Faq />
            <SignUp />
            <Instagram />
            <Footer />
            <MobileStickey handelOnClickBuyNow={props.handelOnClickBuyNow} quantity={props.quantity} setQuantity={props.setQuantity} varientId={props.varientId} setVarientId={props.setVarientId} />
            <PopUpBtn />
        </>

    )

}
export default Home;
