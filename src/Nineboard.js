import React, { Component } from 'react';
import image from './img/project/nineboard_desc.PNG';
class Nineboard extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>NINEBOARD</h1>
            <div className="project_link">
              <a href="http://students.washington.edu/ericma00/info463/" target="_blank">
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
                  Nineboard is a mobile keyboard designed to make mobile
                  input a lot faster. The keyboard also has a swiping feature
                  where the layout of the board was designed so that the possible
                  letter that the user can choose from is located in the direction
                  that the user swipes.
                </p>
                <h2>How It Was Made</h2>
                <p>
                  Nineboard was created after going through the design process
                  (planning, user testing, and prototyping). It is created using
                  HTML, CSS, and JQuery. The swiping technique was made possible
                  using Hammer.js
                </p>
                <h3>Contributor(s):</h3>
                <p>Rebecca Ta, Jimmy Nguyen, Kendall Reonal</p>
              </div>
            </div>
        </div>
      )
    }
}

export default Nineboard;
