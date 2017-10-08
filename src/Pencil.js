import React, { Component } from 'react';
import image from './img/project/pencil_desc.jpg';

class Pencil extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>PENCIL</h1>
            <div className="project_link">
              <a href="http://students.washington.edu/ericma00/info343/a2-html-css-ericma000/" target="_blank">
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
                   Pencil is a website that provides information about pencils,
                   including its features, usage, and the cost.
                </p>
                <h2>How It Was Made</h2>
                <p>
                  Pencil was created using simple HTML and CSS. It also utilizse
                  the responsive web design method so that users who access the
                  website on different devices are still able to see the content
                  easily and without inconvenience.
                </p>
              </div>
            </div>
        </div>
      )
    }
}

export default Pencil;
