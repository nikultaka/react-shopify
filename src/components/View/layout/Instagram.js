import helper from "../../Common/Helper";
const Instagram = () => {
    let instagramPostArray = Array();
    if (localStorage.getItem('instagramRecentPostData') != null && typeof localStorage.getItem('instagramRecentPostData') != 'undefined') {
        instagramPostArray = JSON.parse(localStorage.getItem('instagramRecentPostData'));
    }
    
    const instagram_posts2 = {
        height: "70%",
        width: "80%",
        // overflow: "hidden",
        overflow: "scroll",
    }
    //  const instagramPostArray = [

    //     {
    //         "data": {
    //             "id": "17938359778671962",
    //             "media_type": "CAROUSEL_ALBUM",
    //             "media_url": "https://scontent.cdninstagram.com/v/t51.29350-15/252979491_433411695098421_2785151833389598667_n.webp.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=LeTXzBYPBOgAX-L0XSu&_nc_ht=scontent.cdninstagram.com&edm=ANQ71j8EAAAA&oh=00_AT_kRyKjpVvgluYw6tsiMFHFJtiduURZikr5cb9Ul1QV4A&oe=61FABD3D",
    //             "username": "mohit__patel__007",
    //             "timestamp": "2021-11-05T10:00:41+0000"
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
                    {/* <div className="col-lg-4">
                        <div className="instagram_btn">
                            <h5>Follow us On Instagram</h5>
                            <a href={helper.INSTAGRAM_USER_URL} target={'_blank'}><i className="fa fa-instagram"></i>  {helper.INSTAGRAM_USER_NAME}</a>
                        </div>
                    </div> */}
                    {
                        // /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent) ?

                            <div className="col-lg-12">
                                <div className="instagram_posts">
                                    <div data-mc-src="7eaf1ed7-3ad7-402d-933a-a1821ca45af3#instagram"></div>
                                    {/* {instagramPostArray.slice(0, 4).map((postData, i) => {
                                        return (
                                            <>
                                                <a href="#" key={i}>
                                                    <img src={postData.data.media_url} alt="a" style={{ borderRadius: '20px', height: "200px" }} className="img-fluid instaPostImg" />
                                                </a>
                                            </>
                                        )
                                    })} */}
                                </div>
                                {/* <div className="instagram_posts mt-2">
                                    {instagramPostArray.slice(4, 8).map((postData, i) => {
                                        return (
                                            <>
                                                <a href="#" key={i}>
                                                    <img src={postData.data.media_url} alt="a" style={{ borderRadius: '20px' }} className="img-fluid instaPostImg" />
                                                </a>
                                            </>
                                        )
                                    })}
                                </div> */}
                            </div>
                            // :
                            // <div className="col-lg-8">
                            //     {/* <div className="instagram_posts1" style={instagram_posts1}> */}
                            //     <div className="instagram_posts" style={instagram_posts2}>
                            //         {instagramPostArray.map((postData, i) => {
                            //             return (
                            //                 <>
                            //                     <a href="#" key={i}>
                            //                         <img src={postData.data.media_url} alt="a" style={{ borderRadius: '20px', height: "200px", margin: "10px" }} className="img-fluid instaPostImg" />
                            //                     </a>
                            //                 </>
                            //             )
                            //         })}
                            //     </div>
                            //     {/* </div> */}
                            // </div>
                    }


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
