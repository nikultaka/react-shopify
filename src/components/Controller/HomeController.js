import Home from "../View/Home";
import react, { useEffect, useState } from "react";
import productApi from "../Api/product";
import Loader from "../Common/Loader";

function HomeController() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [varientId, setVarientId] = useState();



    useEffect(() => {

        (async () => {
            setLoading(true)
            const productList = await productApi.getProduct();
            if (productList && productList[0]) {
                setProduct(productList[0])

            }
            setLoading(false)



        })();

    }, []);

    const handelOnClickBuyNow = async (variantId, quantity) => {
        setLoading(true)
        const buyProduct = await productApi.buyProduct(variantId, quantity)
        if (buyProduct) {
            if (buyProduct[0].webUrl) {
                window.location = buyProduct[0].webUrl
                setLoading(false)
            }


        }
        setLoading(false)

    }



    return (

        <>
            <Loader loading={loading} />
            <Home product={product} handelOnClickBuyNow={handelOnClickBuyNow} quantity={quantity} setQuantity={setQuantity} varientId={varientId} setVarientId={setVarientId} />
        </>
    )

}
export default HomeController;
