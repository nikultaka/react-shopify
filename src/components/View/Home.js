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

const Home = () =>{
    return(
        <>
        <Hero/>
        <SeeOn/>
        <Product/>
        <Nutrition/>
        <WhyWe/>
        <Slider/>
        <AboutUs/>
        <Reviews/>
        <Faq/>
        <SignUp/>
        <Instagram/>
        <Footer/>
        <MobileStickey/>
        </>
        
    )

}
export default Home;
