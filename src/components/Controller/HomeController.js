import Home from "../View/Home";
import react, { useEffect, useState } from "react";
import productApi from "../Api/product";

function HomeController() {
    const [product, setProduct] = useState([]);


    useEffect(() => {

        (async () => {
            const productList = await productApi.getProduct();
            if (productList && productList[0]) {
                setProduct(productList[0])

            }


        })();

    }, []);

    const handelOnClickBuyNow = async (variantId, quantity) => {
        const buyProduct = await productApi.buyProduct(variantId, quantity)
        if (buyProduct) {
            if (buyProduct[0].webUrl) {
                window.location = buyProduct[0].webUrl
            }


        }


    }



    return (

        <>
            <Home product={product} handelOnClickBuyNow={handelOnClickBuyNow} />
        </>
    )

}
export default HomeController;
