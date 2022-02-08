const Mode = "d"


let helper = {
    BASE_URL: "http://localhost:3001",
    ImagePath: "http://localhost:3000/assets/images/",
    APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
    APIPASSWORD: "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",
    STORENAME: "nikuls-store",
    APIVERSION: '2022-01',
    STORE_FRONT_ACCESS_TOKEN: "a21e4052455010f0bce5743cef8f3615",

    FACEBOOK_APP_ID : "359346392696399",
    FACEBOOK_SECRET_ID : "125bebb8d650a650567936d324a9e0e5",

    INSTAGRAM_APP_ID : "278783311023775",
    INSTAGRAM_SECRET_ID : "5f51fc7e4caaacc7d087c3ef55e3ef1f",

    INSTAGRAM_ACCESS_TOKEN : "IGQVJYRU1pTnJqenBpSnFBNnREdlVtQlU3QWpFLXI3UXdtem5xTU5uQzc3V1JuZA05nMGZA6YW52MmZAaNUI2anJwdHNObGlPMUNrRzJWbnFoSEI4T3FxcmV3NWJWa0g0bGxrSXZAHbUl1cXpHS3hUd3NzQQZDZD",

    INSTAGRAM_API_VERSIONS : "v11.0",

    INSTAGRAM_USER_ID : "6852832128121334",
    INSTAGRAM_USER_NAME : "mohit__patel__007",
    INSTAGRAM_USER_URL : "https://www.instagram.com/mohit__patel__007/"




}

if (Mode == "Production") {

    helper = {
        BASE_URL: "https://drsu.flamecloud.co.uk/",
        ImagePath: "https://drsu.flamecloud.co.uk/assets/images/",
        APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
        APIPASSWORD: "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",
        STORENAME: "nikuls-store",
        APIVERSION: '2022-01',
        STORE_FRONT_ACCESS_TOKEN: "a21e4052455010f0bce5743cef8f3615",
        
        FACEBOOK_APP_ID : "359346392696399",
        FACEBOOK_SECRET_ID : "125bebb8d650a650567936d324a9e0e5",
    
        INSTAGRAM_APP_ID : "278783311023775",
        INSTAGRAM_SECRET_ID : "5f51fc7e4caaacc7d087c3ef55e3ef1f",
    
        INSTAGRAM_ACCESS_TOKEN : "IGQVJXMkdXTmEtOWRwd2JvSENWLXdIUVV0ZAlljNF9FTUpXSGc0X2Q0UmNkVmZArTTlLcjJGM1ljTG1JcVBicUxLeHo0NWl2M3E2TU5zUXRQbE1OX0VJdFNENVdpRkRqd3RnMG81ZAzZAPQlZAnZAllPV0V1NQZDZD",
    
        INSTAGRAM_API_VERSIONS : "v11.0",
        
        INSTAGRAM_USER_ID : "6852832128121334",
        INSTAGRAM_USER_NAME : "mohit__patel__007",
        INSTAGRAM_USER_URL : "https://www.instagram.com/mohit__patel__007/"

    }    
}
export default helper;
