const AboutUs = () => {
  return (
    <section className="aboutus_section" id="aboutus_section">
      <div className="container">
        <div className="row">
          <div class="col-lg-12 text-center">
            <h2>About Us</h2>
          </div>              
        </div>&nbsp;
        <div className="row">
          <div className="col-lg-6">
            <div className="youtube_vdo_embaded">
              {/* <!-- enter your youtube video link here --> */}
              {/* 
              <video width="500" height="250" controls>
                <source src="https://www.youtube.com/watch?v=TOl1_W4cpc8" type="video/mp4"/>
                  </video> */}

              <iframe width="100%"  height="300" src="https://www.youtube.com/embed/MkwPQsaE86c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="youtube_vdo_embaded_txt">
              {/* <h3>About Us</h3> */}
              <p>Dr. Su today is a brand synonymous for building ‘acne warriors’ across the globe, with a community of over half a million people. A page on instagram that started through the first lockdown to help people suffering from acne & other skin/hair related concerns has grown into a
                PEOPLE’S BRAND that everyone trusts, adores and relies on for beautiful skin & hair.<br /><br />
                Founded by the world’s first acneologist, we at Dr. Su firmly believe in the mission - “You gotta be glowing and growing inside & outside”.<br /><br />
                Dr. Su aims to inspire by delivering pure nutrition, happiness and a long lasting positive impact with Glow x Grow.<br /><br />
                Built with Dr. Su’s 5-a-day philosophy, powered with nutrients, vitamins, minerals, probiotics & fiber, Glow x Grow is your skin & hair’s best friend. We make sure that all the ingredients are sourced directly from the best of farms and served right to your table. Science, research & YOU are what makes Dr. Su what it is. We are and will always be super proud of being a People’s Brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;
