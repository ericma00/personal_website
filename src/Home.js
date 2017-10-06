import React, { Component } from 'react';
import './Home.css';
import FontAwesome from 'react-fontawesome';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      facebook: {
        fontSize: "15px"
      },
      linkedin: {
        fontSize: "15px"
      },
      email: {
        fontSize: "15px"
      },
      instagram: {
        fontSize: "15px"
      }
    }
  };

  onHover(e) {
     var newStyle = {
       fontSize: "20px"
     }

     if (e.target.id === 'facebook') {

       this.setState({
         facebook: newStyle
       });
     }
     if (e.target.id === 'linkedin') {

       this.setState({
         linkedin: newStyle
       });
     }
     if (e.target.id === 'email') {
       console.log(e.target.id);

       console.log(newStyle);
       this.setState({
         email: newStyle
       });
     }
    if (e.target.id === 'instagram'){
       console.log(e.target.id);

       console.log(newStyle);
       this.setState({
         instagram: newStyle
       });
     }
     console.log(this.state);

  //   console.log(this.state.linkStyle);
  }

  onLeave(e) {
    var oldStyle = {
      fontSize: "15px"
    }

    if (e.target.id === 'facebook') {
      this.setState({
        facebook: oldStyle
      });
    }
    if (e.target.id === 'linkedin') {
      this.setState({
        linkedin: oldStyle
      });
    }
    if (e.target.id === 'email') {

      this.setState({
        email: oldStyle
      });
    }
    if (e.target.id === 'instagram') {
      this.setState({
        instagram: oldStyle
      });
    }
  }
  render() {

    return (
      <div className="container_home">
        <div className="content">
          {/* <h1>Chen-Che (Eric) Ma</h1> */}
          <h1>Welcome To Eric's Website</h1>
          {/* <h3 style={{textAlign: 'center'}}>Chen-Che (Eric) Ma</h3> */}
          <h4>Aspiring Web & Mobile App Developer</h4>

          <div className="social_media">
              <ul>
                  <li className="facebook"
                    onMouseOver={this.onHover.bind(this)}
                    onMouseLeave={this.onLeave.bind(this)}
                    style={this.state.facebook}
                    >
                    <a href="https://www.facebook.com/eric.ma.3344" target="_blank">
                      <FontAwesome id="facebook" name="facebook-official" />
                    </a>

                  </li>
                  <li className="linkedin"
                    onMouseOver={this.onHover.bind(this)}
                    onMouseLeave={this.onLeave.bind(this)}
                    style={this.state.linkedin}
                    >
                    <FontAwesome id="linkedin" name="linkedin" />
                  </li>
                  <li className="email"
                    onMouseOver={this.onHover.bind(this)}
                    onMouseLeave={this.onLeave.bind(this)}
                    style={this.state.email}>
                    <a href="mailto:ericma00@uw.edu">
                      <FontAwesome id="email" name="envelope-o" />
                    </a>
                  </li>
                  <li className="instagram"
                    onMouseOver={this.onHover.bind(this)}
                    onMouseLeave={this.onLeave.bind(this)}
                    style={this.state.instagram}
                    >
                    <a href="https://www.instagram.com/beastslayere/" target="_blank">
                        <FontAwesome id="instagram" name="instagram" />
                    </a>
                  </li>
              </ul>

          </div>
        </div>
      </div>


    )
  }
}

export default Home;
