import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
        <div>
        <section className="colorlib-about" data-section="about" style={{paddingLeft: "3em",background: "#f5f5f5"}}>
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Sr. BI Engineer. I designed and developed data visualizations and reports that help executives make the business decisions. I am a Fast learner and an efficient problem solver who responds positively to challenges.</p>
                    <p><i>Every company has stories to tell—stories that will not only engage, inform, surprise, delight, and impact their clients/users, but that will also deliver on measurable business goals.</i></p>
                      <p>And I produce high-quality data visualizations that meets their objectives.</p>                      
                    </div>
                </div>
                </div>
            </div>
            <div className="row row-pt-md">    
                            <h2 className="colorlib-heading" style={{marginBottom:"4em", textAlign:"center"}}>My Education</h2>                       
                              <div className="col-md-6 col-md-offset-3 text-center animate-box">       
       
                                <div className="services color-3" >
                                  <span className="icon">
                                    <img src="images/education.png" style={{width:"4em", height:"4em"}}/>
                                  </span>
                                  <div className="desc">
                                    <h3>Masters in Computer Science</h3>
                                    <p> Also completed MBA in Finance and Marketing</p>
                                  </div>
                                </div>
                              </div>   
                            </div>
            </div>
        </div>
        </section>    
      </div>
    )
  }
}
