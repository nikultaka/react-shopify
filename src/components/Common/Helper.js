const Mode = "Devlopement"


let helper = {
    BASE_URL: "http://localhost:3000",
    ImagePath: "http://localhost:3000/assets/images/",
    APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
    APIPASSWORD: "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",
    STORENAME: "nikuls-store",
    APIVERSION: '2022-01'

}

if (Mode == "Production") {

    helper = {
        BASE_URL: "http://localhost:3000",
        ImagePath: "http://localhost:3000/assets/images/",
        APIKEY: "cd4134a5fa27fad34663d5e1bf65df0b",
        APIPASSWORD: "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",
        STORENAME: "nikuls-store",
        APIVERSION: '2022-01'
    }
}
export default helper;
