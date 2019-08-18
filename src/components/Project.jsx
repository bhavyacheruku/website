import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div>
        <section id="lib" className="js-fullheight" data-section="home" style={{marginBottom:"0"}}>
          <div className="flexslider js-fullheight" style={{background:"#000"}} >
            <ul className="slides">
              <li>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div style={{backgroundImage: "url(/images/vg.jpg)", width: "100%", height: "100%", position: "absolute", opacity: "0.4"}} ></div>
                    <div className="col-md-7 col-md-offset-5 col-md-pull-3 col-sm-7 col-sm-offset-4 col-xs-7 col-xs-offset-2 js-fullheight slider-text" >
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                           <div className="colorlib-narrow-content">
                            <h1 style={{fontWeight:"Normal", color: "#eeeeee"}}>Hi! <br/> I'm <b>Goutham</b></h1>
                            <h2 style={{fontWeight:"Normal", color: "#eeeeee"}}>I am a BI Developer</h2>
                            
                          </div>
                          <ul style={{display:"flex"}}>
                            <li style={{minHeight:0, display:'block', marginRight:"1em"}}><a href="https://www.linkedin.com/in/goutham-v-317b8967/" target="_blank" rel="noopener noreferrer" className="links"><i className="icon-linkedin2" /></a></li>
                            <li style={{minHeight:0, display:'block', marginRight:"1em"}}><a href="https://public.tableau.com/profile/goutham5706#!/" target="_blank" rel="noopener noreferrer" className="links"><img src="images/tableau.png" style={{height: "1.5em", width: "1.5em"}}/></a></li>
                            <li style={{minHeight:0, display:'block', marginRight:"1em"}}><a href="mailto:vangala.goutham@gmail.com" rel="noopener noreferrer" className="links"><i className="icon-mail6" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>            
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
