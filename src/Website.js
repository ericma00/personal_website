import React, { Component } from 'react';
import image from './img/project/personal_website.png';
import {NavLink, Link} from 'react-router-dom';


class Pencil extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>Personal Website</h1>
            <div className="project_link">
              <NavLink exact activeClassName='active' to='/'>
                <div className="button">
                  SEE MORE
                </div>
              </NavLink>
            </div>

            <div className='detail'>
              <div className="project_img">
                <img src={image} alt='picture of the data'/>
              </div>
              <div className="proj_description">
                <h2>Description</h2>
                <p>
                  This project is a website that I designed and created to allow
                  people to know me a little bit more. You can find most of the
                  things related to me on there (or here).
                </p>
                <h2>How It Was Made</h2>
                <p>
                  This website is designed and created using CSS and React.js
                  The HTML file of this website is only used as a skeleton. Most
                  of the layout and styles were made possible using CSS and React.
                </p>
              </div>
            </div>
        </div>
      )
    }
}

export default Pencil;
