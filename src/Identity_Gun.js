import React, { Component } from 'react';
import image from './img/project/identity_gun_desc.PNG';

class Identity_Gun extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>IDENTITY GUN</h1>
            <div className="project_link">
              <a href="https://drive.google.com/open?id=0B-DlIP3oXqQhLXhyMDFITXJPa2M" target="_blank">
                <div className="button">
                  SEE MORE
                </div>
              </a>
            </div>

            <div className='detail'>
              <div className="project_img">
                {/* <img src={image} alt='picture of the data'/> */}
                <iframe width="496" height="285" src="https://www.youtube.com/embed/gxgIdF5AAsM" frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="proj_description">
                <h2>Description</h2>
                <p>
                  Identity Gun is a prototype of a smart gun that uses multiple security
                  methods to prevent unwanted users from getting a hold of it.
                </p>
                <h2>How It Was Made</h2>
                <p>
                  The idea behind Identity Gun was that my group wanted to tackle
                  a problem related to social disasters, specifically, gun violence.
                  We went through the entire design process (planning, user research, prototyping),
                  to get to our final prototype. Click SEE MORE to see our entire
                  documentation of the project.
                </p>
                <h3>Contributor(s):</h3>
                <p>Rachel Paresa, Solayan Yousuf</p>
              </div>
            </div>
        </div>


      )
    }
}

export default Identity_Gun;
