import React, { Component } from 'react'

export default class Expertise extends Component {
  render() {
    return (
        <div>
        <section className="colorlib-expertise" data-section="expertise" style={{paddingLeft: "3em",background: "#eeeeee"}}>
        <div className="colorlib-narrow-content">
            <div className="row">
                <div className="row row-pt-md">    
                            <h2 className="colorlib-heading" style={{marginBottom:"4em", textAlign:"center"}}>My Expertise</h2>                       
                              <div className="col-md-6 text-center animate-box">       
       
                                <div className="services color-1" >
                                  <span className="icon">
                                  <img src="images/reporting.png" style={{width:"4em", height:"4em"}}/>
                                  </span>
                                  <div className="desc">
                                    <h3 >Front-End Reporting Tools</h3>
                                    <p>Tableau, Business Objects, Power BI, Lumira</p>
                                    
                                  </div>
                                </div>
                              </div>  

                              <div className="col-md-6 text-center animate-box">               
                                <div className="services color-1" >
                                  <span className="icon">
                                  <img src="images/database.png" style={{width:"4em", height:"4em"}}/>
                                  </span>
                                  <div className="desc" >
                                    <h3 >Databases</h3>
                                    <p>GCP, Hana, Amazon Redshift, Oracle, SQL Server, MySQL</p>
                                    
                                  </div>
                                </div>
                              </div>   
                            </div>
                            <div id="myModal" class="modal fade" role="dialog">
                                <div class="modal-dialog">
                                    <div class="modal-content" style={{width:"fit-content"}}>
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                        <h4 class="modal-title">Experience in Reporting Tools</h4>
                                    </div>
                                    <div class="modal-body">
                                        <img className="img-responsive" src="/images/Megalytics-Client-Reporting-2.png" style={{width:"44em", height:"30em"}}/>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
