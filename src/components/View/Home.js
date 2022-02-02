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




const Home = (props) => {
    return (
        <>

            <Hero />
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
