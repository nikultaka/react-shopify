const SignUp = () =>{
    return(
        <section className="signup_section" style={{ display : 'none' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
                 <div className="sign_up_lft_wrap">
                   <h4>Sign Up for the <br/>
                     30 Day Challenge</h4>
     
                     <a href="#"> <i className="fa fa-whatsapp"></i> JOIN GROUP</a>
                 </div>
            </div>
            <div className="col-lg-5">
                 <div className="sign_up_lft_wrap sign_up_lft_wrap_2" style={{background: "#3EB49C"}}>
                   <h4>Are you a Student?</h4>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                     <a href="#"> CTA</a>
                 </div>
            </div>
          </div>
        </div>
      </section>
    )

}
export default SignUp;
