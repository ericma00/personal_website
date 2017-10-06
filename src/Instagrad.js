import React, { Component } from 'react';
import image from './img/project/instagrad_desc.png';

class Instagrad extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>INSTAGRAD</h1>
            <div className="project_link">
              <a href="http://students.washington.edu/ericma00/info360/design_narrative/" target="_blank">
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
                  Instagrad is a website that was created to tackle the registration
                  problem at UW. The problem with registration at UW is that the process
                  can be a bit overwhelming because students there are many classes
                  and professors that students have to choose from. Some students
                  also chooses classes based off of how good the professor teaches.
                  Instagrad was designed so that students will have all the information
                  needed about a class and/or professor right in front of them so that
                  during registration, they won't have to go through multiple sources to
                  find the information they needed.
                </p>
                <h2>How It Was Made</h2>
                <p>
                  My group went through the entire design process (planning, user testing,
                  prototyping) to finalize our final prototype/design. Click SEE MORE
                  for more details about the process.
                </p>
                <h3>Contributor(s):</h3>
                <p>Ryker Gilbert, Luke Schaack, Sarah Feldmann</p>
              </div>
            </div>
        </div>

      )
    }
}

export default Instagrad;
