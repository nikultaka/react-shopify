import helper from "../../Common/Helper";
const WhyWe =() =>{
    return(
        <section className="whywe_better_sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="nutriniotn_head nutriniotn_head_2">
                <h2>Why We are Better!</h2>
                <p>No  Fakeness, Only  Goodness!</p><b></b>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="why_we_table">
                <table>
                  <thead>
                    <tr>
                      <th width="20%"></th>
                      <th width="20%"><span><img src={helper.ImagePath+"logo.svg"} alt="a" className="img-fluid"/></span></th>
                      <th style={{ fontSize: "2vw" }}>POWDER</th>
                      <th style={{ fontSize: "2vw" }}>TABLET</th>
                      <th style={{ fontSize: "2vw" }}>HEALTH DRINKS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lorem ipsum dolor sit amet</td>
                      <td>
                        <span><i className="fa fa-check"></i></span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>consectetur adipiscing eli</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td>Rare</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Integer tellus ligula</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td></td>
                      <td></td>
                      <td>Rare</td>
                    </tr>
                    <tr>
                      <td>malesuada sed turpis id</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td>Rare</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>ullamcorper egestas velit</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td>Rare</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Integer ac leo lacinia</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td></td>
                      <td>Rare</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>commodo tellus id</td>
                      <td><span><i className="fa fa-check"></i></span></td>
                      <td>Rare</td>
                      <td></td>
                      <td>Rare</td>
                    </tr>
                    <tr>
                      <td></td>
                      <td> <span style={{borderRadius: "0px 0px 15px 15px", borderBottom: "9px solid #3E9C89"}}></span> </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default WhyWe;
