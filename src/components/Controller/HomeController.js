import Home from "../View/Home";
import react, { useEffect, useState } from "react";
import productApi from "../Api/product";
import Loader from "../Common/Loader";
import ToastAlert from "../Common/ToastAlert";
import helper from "../Common/Helper";

function HomeController() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [varientId, setVarientId] = useState();
    const [instagramPost, setInstagramPost] = useState([]);

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        (async () => {
            setLoading(true)
            const productList = await productApi.getProduct();
            if (productList && productList[0]) {
                setProduct(productList[0])
            }

            // const instagramRecentPostId = {}
            // const instagramRecentPostId = await productApi.getInstagramRecentPostId();
            // if (instagramRecentPostId && instagramRecentPostId.status == 200) {
            //     var data = instagramRecentPostId.data.data.slice(0, 8)
            //     if (data.length > 0) {
            //         await Promise.all(data.map( async (postId) => {
            //         const instagramRecentPostData = await productApi.getInstagramRecentPostData(postId.id);
            //         // console.log(instagramRecentPostData);
            //             if((instagramRecentPostData) && instagramRecentPostData != ''){
            //                 instagramPost.push(instagramRecentPostData)
            //             }
            //         }))
            //     }
            // } else {
            //     setLoading(false)
            //     ToastAlert({ msg: instagramRecentPostId.error.error_user_msg, msgType: 'error' });
            // }
            var getCookieVal = getCookie('count'); 
            if (getCookieVal == '' && getCookieVal != 1) {
                var expire = new Date();
                expire.setFullYear(now.getFullYear());
                expire.setMonth(now.getMonth());
                expire.setDate(now.getDate() + 1);
                expire.setHours(0);
                expire.setMinutes(0);
                document.cookie = "count=" + 1 + ";expires=" + expire.toString() + "";
                await getInstagramRecentPost()
            }

            setLoading(false)

        })();
    }, []);


    async function getInstagramRecentPost() {
        setLoading(true)
        var instagramPost2 = [];
        const instagramRecentPostId = await productApi.getInstagramRecentPostId();
        if (instagramRecentPostId && instagramRecentPostId.status == 200) {
            var data = instagramRecentPostId.data.data.slice(0, 8)
            if (data.length > 0) {
                await Promise.all(data.map(async (postId) => {
                    const instagramRecentPostData = await productApi.getInstagramRecentPostData(postId.id);
                    if ((instagramRecentPostData) && instagramRecentPostData != '') {
                        instagramPost2.push(instagramRecentPostData)
                        var array = JSON.stringify(instagramPost2);
                        localStorage.removeItem('instagramRecentPostData')
                        localStorage.setItem('instagramRecentPostData', array)
                    }
                }))
            }
        } else {
            setLoading(false)
            ToastAlert({ msg: instagramRecentPostId.error.error_user_msg, msgType: 'error' });
        }
        setLoading(false)
    }

    var now = new Date();
    var delay = 60 * 60 * 1000; // 1 hour in msec
    var start = delay - (now.getMinutes() * 60 + now.getSeconds()) * 1000 + now.getMilliseconds();
    setTimeout(function doSomething() {
        setInstagramPost(getInstagramRecentPost())
        setTimeout(doSomething, delay);
    }, start)


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
            {/* {console.log(instagramPost)} */}
            <Loader loading={loading} />
            <Home product={product} handelOnClickBuyNow={handelOnClickBuyNow} quantity={quantity} setQuantity={setQuantity} varientId={varientId} setVarientId={setVarientId} instagramPost={instagramPost} />
        </>
    )

}
export default HomeController;
