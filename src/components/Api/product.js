import axios from "axios";
import helper from "../Common/Helper";

function product() {

    const listProduct = async () => {
        let res = {};
        var cors_api_host = 'cors-anywhere.herokuapp.com';
        var cors_api_url = 'https://' + cors_api_host + '/';
        await axios({
            method: 'GET',
            url: 'https://'+helper.APIKEY+':'+helper.APIPASSWORD+'@'+helper.STORENAME+'.myshopify.com/admin/api/'+helper.APIVERSION+'/products.json',
            // ContentType: 'application/json',
            // mode: 'no-cors',
            // crossDomain: true,
            // credentials: 'same-origin',
            // withCredentials: true,
            // crossorigin:true,
            // headers: {"Access-Control-Allow-Origin": "*"}

            headers : {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data',
            }

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