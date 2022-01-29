import axios from "axios";
import helper from "../Common/Helper";
import Client from 'shopify-buy';

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


        await  client.checkout.create().then(async(checkout) => {

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


    return {
        buyProduct,
        getProduct

    }
}
const productApi = product();
export default productApi;