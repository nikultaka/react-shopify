import helper from "../../Common/Helper";
const Instagram = () => {
    let instagramPostArray = Array();
    if(localStorage.getItem('instagramRecentPostData') != null && typeof localStorage.getItem('instagramRecentPostData') != 'undefined') {
        instagramPostArray = JSON.parse(localStorage.getItem('instagramRecentPostData'));
    }
    console.log(instagramPostArray)
    // const instagramPostArray = [
    //     {
    //         "data": {
    //             "id": "18200343619140333",
    //             "media_type": "CAROUSEL_ALBUM",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/252771491_4857872047580034_4004271948455966265_n.webp.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ki7PUxtdyRAAX_YeL_k&_nc_oc=AQkqo2-vnX2KMxr2rGbTIWqfzfuuvevY29U04-e4_T9hv65Iu_9I-6QpO-UvCtQ2zBU&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_m1dtOLMzLBIzPcb6sxpz7fTwoDHMOQqhjjHnkLROowA&oe=61FACFB7",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2021-11-06T15:03:48+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17887345814369372",
    //             "media_type": "CAROUSEL_ALBUM",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/233175678_893483774571626_9100684360964716932_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=AZSUkfraKicAX_oCsH4&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT9y4dV9FOvcZnEqQqWWbqiF1-uX6nTOD5dtOWgoIIlGhA&oe=61F93818",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2021-08-06T12:45:18+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17873003876052714",
    //             "media_type": "CAROUSEL_ALBUM",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/125537022_735161827356025_2472249514487692183_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=oKXRhwG2gvQAX9o9mVu&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-b690Y9wULOU1_lI_jBu9oG9g7tCIDrncxOFVZjWqqWQ&oe=61FA76C2",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2020-11-17T04:34:38+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17867727403852739",
    //             "media_type": "IMAGE",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/106477474_685762511969905_8531210500513678602_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ltlx9GFNWR4AX85rAMZ&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-Q-HJ9Rti2EUJDh2rpP6_I4hQMqW7_4tPYjIobWJMISQ&oe=61FA2F73",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2020-07-05T17:52:02+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17973102550305486",
    //             "media_type": "IMAGE",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/100732819_689681791833050_8487969267002864797_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=ypjy2XFDP7sAX-93vnA&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT8EhYbQwGnjgWcMy8bsWwnsvQk1_p106tGk8tVcGGw_eQ&oe=61FAD317",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2020-05-23T04:14:48+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17886338308492667",
    //             "media_type": "IMAGE",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/85066278_607094879838156_6813789250864463329_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=PljMbccy_usAX8JWjuT&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT-Rwe0Wfi5WR0sXfKc4bv5oAC-bsWjmN0mwlm1AgKgQ-g&oe=61FA7383",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2020-02-20T15:29:06+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17852398460020854",
    //             "media_type": "IMAGE",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.2885-15/96225438_154623232742454_973649221027714195_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=oKgJK7zDpVEAX8g1kcl&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT95LrjRKzaDsZfcZBy2y1nk86atVt81SEWdUt6J4cFgjg&oe=61FA5538",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2020-05-06T14:05:34+0000"
    //         },
    //         "error": null
    //     },
    //     {
    //         "data": {
    //             "id": "17938359778671962",
    //             "media_type": "CAROUSEL_ALBUM",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/252979491_433411695098421_2785151833389598667_n.webp.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=LeTXzBYPBOgAX-L0XSu&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_kRyKjpVvgluYw6tsiMFHFJtiduURZikr5cb9Ul1QV4A&oe=61FABD3D",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2021-11-05T10:00:41+0000"
    //         },
    //         "error": null
    //     }
    // ];

    return (
        <section className="instagram_post_sec">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="instagram_btn">
                            <h5>Follow us On Instagram</h5>
                            <a href={helper.INSTAGRAM_USER_URL} target={'_blank'}><i className="fa fa-instagram"></i>  {helper.INSTAGRAM_USER_NAME}</a>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="instagram_posts">
                            {instagramPostArray.slice(0, 4).map((postData,i) => {
                                return(
                                <>
                                    <a href="#" key={i}>
                                        <img src={postData.data.media_url} alt="a" style={{borderRadius : '20px'}} className="img-fluid" />
                                    </a>
                                </>
                                )
                            })}
                        </div>
                        <div className="instagram_posts mt-2">
                        {instagramPostArray.slice(4, 8).map((postData,i) => {
                                console.log(postData.data.media_url);
                                return(
                                <>
                                    <a href="#" key={i}>
                                        <img src={postData.data.media_url} alt="a" style={{borderRadius : '20px'}} className="img-fluid" />
                                    </a>
                                </>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-10">
                        <div className="get_start_wrap">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="get_lft">
                                        <img src={helper.ImagePath + "logo.svg"} alt="a" className="img-fluid" />
                                        <p>Get Newsletters from Dr. Su</p>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="get_rgt">
                                        <input type="text" placeholder="Your Email" className="form-control" />
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )

}
export default Instagram;
