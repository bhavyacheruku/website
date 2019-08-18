import React, { Component } from 'react';
import './App.css';
import Project from './components/Project'
import NavBar from './components/NavBar'
import Education from './components/Education'
import Expertise from './components/Expertise'
class App extends Component {
  render() {
    return (
      <div id="page-main">
        <div id="container-wrap">
				<div id="lib-container" style={{width:"100%"}}>
        <NavBar></NavBar>
					<Project></Project>
          <Education></Education>
          <Expertise></Expertise>
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
