import axios from "axios";
import helper from "../Common/Helper";
import Client from 'shopify-buy';

function product() {

    const client = Client.buildClient({
        domain: 'nikuls-store.myshopify.com',
        storefrontAccessToken: 'a21e4052455010f0bce5743cef8f3615'
    });

    client.collection.fetchAllWithProducts().then((collections) => {
        // Do something with the collections
        console.log(collections);
        console.log(collections[0].products);
      });

    const listProduct = async () => {
        return false;
        let res = {};
        var cors_api_host = 'cors-anywhere.herokuapp.com';
        var cors_api_url = 'https://' + cors_api_host + '/';
        await axios({
            method: 'GET',
            url: 'https://'+helper.APIKEY+':'+helper.APIPASSWORD+'@'+helper.STORENAME+'.myshopify.com/admin/api/'+helper.APIVERSION+'/products.json',
            // ContentType: 'application/json',
            headers: {
                "X-Shopify-Access-Token": "a21e4052455010f0bce5743cef8f3615",
                "Content-type": "application/json",
              },
            mode: 'no-cors',
            //crossDomain: true,
            //credentials: 'same-origin',
            //withCredentials: true,

            // header('Access-Control-Allow-Origin: *');
            // headers : {
            //     'Access-Control-Allow-Origin': '*',
            //     'Content-Type': 'application/json',
            // }

        }).then(function (response) {
            res = response
        });

        return res;

    }

    return {
        listProduct

    }
}
const productApi = product();
export default productApi;