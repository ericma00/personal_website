import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

import './Portfolio.css';

class Project_Home extends Component {


  render() {
    var linkStyle = {
      textDecoration: 'none'
    };
    return (
      <div id="container_project_home">
        <h1 style={{textAlign: 'center'}}>PROJECTS</h1>
        <div className="container_port">
            <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/mass_shooting'>
              <div id="project_1" className="project">
                <div className="date">
                  <h2>Mass Shooting</h2>
                  <h5>Autumn 2016</h5>
                </div>
              </div>
            </NavLink>
            <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/pencil'>
                <div id="project_2" className="project">
                  <div className="date">
                    <h2>Pencil</h2>
                    <h5>Autumn 2016</h5>
                  </div>
                </div>
            </NavLink>
            <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/instagrad'>
                <div id="project_3" className="project">
                  <div className="date" id="three">
                    <h2>Instagrad</h2>
                    <h5>Spring 2016</h5>
                  </div>
                </div>
            </NavLink>
            <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/identity_gun'>
                <div id="project_4" className="project">
                  <div className="date" id="four">
                    <h2>IdentiyGun</h2>
                    <h5>Autumn 2016</h5>
                  </div>
                </div>
            </NavLink>
        </div>
        <div className="container_port">
          <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/nineboard'>
              <div id="project_5" className="project">
                <div className="date" id="five">
                  <h2>Nineboard</h2>
                  <h5>Winter 2016</h5>
                </div>
              </div>
          </NavLink>
          <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/patient_appointment'>
              <div id="project_6" className="project">
                <div className="date" id="six">
                  <h3>Patient Appoinment</h3>
                  <h5>Spring 2017</h5>
                </div>
              </div>
          </NavLink>
          <NavLink style={linkStyle} exact activeClassName='active' to='/portfolio/personal_website'>
              <div id="project_7" className="project">
                <div className="date" id="six">
                  <h3>Personal Website</h3>
                  <h5>Autumn 2017</h5>
                </div>
              </div>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Project_Home;
