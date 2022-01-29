import axios from "axios";
import helper from "../Common/Helper";
import Client from 'shopify-buy';
import { resolve } from "../Common/Resolve";

function product() {
    const getProduct = async () => {
        const Res = [];
        const client = Client.buildClient({
            domain: helper.STORENAME + '.myshopify.com',
            storefrontAccessToken: helper.STORE_FRONT_ACCESS_TOKEN
        });
        await client.collection.fetchAllWithProducts().then((collections) => {
            Res.push(collections[0].products[0])
        });
        return Res;
    }
    const buyProduct = async (variantId, quantity) => {
        const Res = [];
        const client = Client.buildClient({
            domain: helper.STORENAME + '.myshopify.com',
            storefrontAccessToken: helper.STORE_FRONT_ACCESS_TOKEN
        });


        await client.checkout.create().then(async (checkout) => {

            const checkoutId = checkout.id;
            const lineItemsToAdd = [
                {
                    // variantId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjExNjUxMDU0ODEzNA==',
                    // quantity: 5
                    variantId: variantId,
                    quantity: quantity
                }
            ];

            // Add an item to the checkout
            await client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
                Res.push(checkout)
            });
        });
        return Res;
    }

    // const getProduct = async () => {
    //     const Res = [];
    //     const client = Client.buildClient({
    //         domain: helper.STORENAME + '.myshopify.com',
    //         storefrontAccessToken: helper.STORE_FRONT_ACCESS_TOKEN
    //     });
    //     await client.collection.fetchAllWithProducts().then((collections) => {
    //         Res.push(collections[0].products[0])
    //     });
    //     return Res;
    // }



    const getInstagramRecentPostId = async () => {
        let res = {};
        await axios({
            method: "get",
            url: 'https://graph.instagram.com/v11.0/' + helper.INSTAGRAM_USER_ID + '/media?access_token=' + helper.INSTAGRAM_ACCESS_TOKEN,
            ContentType: 'application/json',
        }).then(function (response) {

            res = response;
            // console.log(res);
        }).catch(function (response) {
            console.log(response);
            res = response;
            // console.log(res);
        });
        return res;
    }

    const getInstagramRecentPostData = async (postId) => {
        let res = {};
        return await resolve(
            // await axios({
            //     method: "get",
            //     url: 'https://graph.instagram.com/' + postId + '?fields=id,media_type,media_url,username,timestamp&access_token=' + helper.INSTAGRAM_ACCESS_TOKEN,
            //     ContentType: 'application/json',
            // }).then(function (response) {
            //     res = response;
            // })
            await axios({
                method: "get",
                url: 'https://graph.instagram.com/' + postId + '?fields=id,media_type,media_url,username,timestamp&access_token=' + helper.INSTAGRAM_ACCESS_TOKEN,
                ContentType: 'application/json',
            }).then(response => response.data)
        )
        // return res;
    }

    return {
        buyProduct,
        getProduct,
        getInstagramRecentPostId,
        getInstagramRecentPostData
    }

}
const productApi = product();
export default productApi;