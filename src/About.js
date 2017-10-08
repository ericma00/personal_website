import React, { Component } from 'react';
import image from './img/profile.jpg';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="container_about">
        <h1>ABOUT ME</h1>
        <img className="profilePic" src={image} alt={"pic of me"} />
        <div className="left_col">
            <p className="description">
              Hi! My name is Chen-Che Ma, but everyone calls me Eric
              because that's exactly how "Chen-Che" is pronunced.
              I am currently a senior at University of Washington studying
              Informatics, Human Computer Interaction (HCI) track.
              <br />
              <br />
              Growing up, there's always the question "What do you want to be
              when you grow up?". My answers back then, like every other little
              5 year old, were "astronaut", "fire fighter", "police officers". But
              as I grew older and became more knowledgeable about the world, my
              answer to that question gradually changed to "I don't know".
              <br/>
              <br/>
              Coming into college, my original plan was to major in electrical
              engineering with the mindset that it's a good major to have when it
              comes to job security and also financial stability. However, after not
              doing so well in many math and physics classes, it became really demoralizing.
              <br />
              <br />
              However, during my sophomore year, my roommate convinced me to take an
              intro course in computer science (Java). Throughout that quarter as well as while taking
              classes related to coding, I learned that I enjoy coding; enjoying problem solving
              using logic. This, along with taking a class in web-programming, I realized that
              I have a passion in web-development. Web development allows one to be creative
              because the html file is basically a white canvas for the developer to
              fill with whatever he/she wants. The endless possibilities available when
              designing websites allow developers to choose what his/her purpose is.
              For me, I want to solve problems. I want to make websites that will have a
              positive impact for users.
              <br />
              <br />


            </p>
        </div>
      </div>
    )
  }
}

export default About
