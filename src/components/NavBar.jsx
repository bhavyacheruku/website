import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbarHeader">
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <header id="colorlib-heading" className="border js-fullheight" >
            <nav id="colorlib-main-menu" role="navigation" className="navbar" >
              <div id="navbar" aria-expanded="false" class="collapse" style={{height: "0px"}}>
                <div style={{display:"flex", float: "right", marginTop:"1em"}}>
                  <span><a href="#about" data-nav-section="about" className="headerText">About Me</a></span>
                  <span><a href="#expertise" data-nav-section="expertise" className="headerText">My Expertise</a></span>
                </div>
              </div>
            </nav>
            </header>
        </div>
      </div>
    )
  }
}