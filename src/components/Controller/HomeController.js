import Home from "../View/Home";
import react,{useEffect,useState} from "react";
import productApi from "../Api/product";

function HomeController() {
    const [product, setProduct] = useState([]);


    useEffect(() => {

        (async () => {
            const productList = await productApi.listProduct();
            console.log(productList);
         

        })();

    }, []);
    
    return(
        <>
        <Home/>
        </>
    )

}
export default HomeController;
