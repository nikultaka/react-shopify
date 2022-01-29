const Mode = "developer"


let helper = {
    BASE_URL: "http://localhost:3001",
    ImagePath: "http://localhost:3000/assets/images/",
    APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
    APIPASSWORD: "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",
    STORENAME: "nikuls-store",
    APIVERSION: '2022-01',
    STORE_FRONT_ACCESS_TOKEN: "a21e4052455010f0bce5743cef8f3615"

}

if (Mode == "Production") {

    helper = {
        BASE_URL: "https://drsu.flamecloud.co.uk/",
        ImagePath: "https://drsu.flamecloud.co.uk/assets/images/",
        APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
        APIPASSWORD: "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",
        STORENAME: "nikuls-store",
        APIVERSION: '2022-01',
        STORE_FRONT_ACCESS_TOKEN: "a21e4052455010f0bce5743cef8f3615"

    }    
}
export default helper;
