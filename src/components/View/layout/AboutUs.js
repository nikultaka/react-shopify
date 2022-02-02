const AboutUs = () => {
  return (
    <section className="aboutus_section" id="aboutus_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="youtube_vdo_embaded">
              {/* <!-- enter your youtube video link here --> */}
              {/* 
              <video width="500" height="250" controls>
                <source src="https://www.youtube.com/watch?v=TOl1_W4cpc8" type="video/mp4"/>
                  </video> */}

              <iframe width="500" height="300" src="https://www.youtube.com/embed/TOl1_W4cpc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
          </div>
          <div className="col-lg-6">
            <div className="youtube_vdo_embaded_txt">
              <h3>About Us</h3>
              <p>The Brand Dr. Su was built upon the purpose and life long passion of creator, Dr. Suyomi Shah, popularly known as Dr. Su.<br /><br />
                Dr. Su, the world’s first acneologist, certified dermatologist and an acne warrior lives by the mission ‘You gotta be glowing and growing inside & outside’. <br /><br />
                Dr. Su aims to inspire the world by showing that it is possible to deliver pure nutrition, happiness, and a long lasting positive impact with Glow x Grow.<br /><br />
                ‘‘People are the core of everything’ here at Dr. Su and today there are over half a million people in Dr. Su’s community who she calls her REAL HEROES for the brand. <br /><br />
                “Everything here starts with YOU! It’s the people that makes Brand Dr. Su what it is, we are proud to be a People’s Brand” - Dr. Su
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutUs;
