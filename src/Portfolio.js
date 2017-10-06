import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


import './Portfolio.css';
import Project_Home from './Project_Home';
import Mass_Shooting from './Mass_Shooting';
import Pencil from './Pencil';
import Instagrad from './Instagrad';
import Identity_Gun from './Identity_Gun';
import Nineboard from './Nineboard';
import Patient_Appointment from './Patient_Appointment';
import Website from './Website';

class Portfolio extends Component {

  render() {
    return (
        <div>
          <Route exact path="/portfolio" component={Project_Home} />
          <Route exact path="/portfolio/mass_shooting" component={Mass_Shooting} />
          <Route exact path="/portfolio/pencil" component={Pencil} />
          <Route exact path="/portfolio/instagrad" component={Instagrad} />
          <Route exact path="/portfolio/identity_gun" component={Identity_Gun} />
          <Route exact path="/portfolio/nineboard" component={Nineboard} />
          <Route exact path="/portfolio/patient_appointment" component={Patient_Appointment} />
          <Route exact path="/portfolio/personal_website" component={Website} />
        </div>
    )
  }
}

export default Portfolio
