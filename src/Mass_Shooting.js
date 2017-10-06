import React, { Component } from 'react';
import './Project.css';

import image from './img/project/mass_shooting_desc.PNG';
class Mass_Shooting extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>MASS SHOOTING</h1>
            <div className="project_link">
              <a href="http://students.washington.edu/ericma00/info343/a3-mapping-ericma000/" target="_blank">
                <div className="button">
                  SEE MORE
                </div>
              </a>
            </div>

            <div className='detail'>
              <div className="project_img">
                <img src={image} alt='picture of the data'/>
              </div>
              <div className="proj_description">
                <h2>Description</h2>
                  <p>
                    Mass Shooting is an interactive map that uses a crowdsource data
                    to show the locations and the death tolls of mass shootings that
                    occured in 2016.
                  </p>
                <h2>How It Was Made</h2>
                  <p>
                    Mass Shooting was created using the Leaflet.js mapping API. The
                    rest of the site, which includes the layout and colors, were
                    made using simple HTML, CSS and Javascript.
                  </p>
              </div>
            </div>

        </div>

      )
    }
}

export default Mass_Shooting;
