import React, { Component } from 'react';
import image from './img/project/patient_appointment_desc.PNG';

class Patient_Appointment extends Component {
    render() {
      return (
        <div className='container_project'>
            <h1 style={{textAlign: 'center'}}>PATIENT APPOINTMENT </h1>
            <div className="project_link">
              <a href="https://docs.google.com/document/d/e/2PACX-1vQdRJndve2lkZ5e81PCPCpCsmOi82IZVypR3lAZjwicsawtMIEWJZQ86QAkjJRY6G8hbyHvK4v0XfCx/pub" target="_blank">
                <div className="button">
                  DOCUMENTATION
                </div>
              </a>
              <a href="https://docs.google.com/document/d/e/2PACX-1vRFSkmx6T7-XQR_wuMG8DBQwEShIvcsWRqAXpzUHte3_C4GJWnQ2URg9r8-s8lMGX8vLbeSUOjS01AA/pub" target="_blank">
                <div className="button">
                  SOURCE CODE
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
                  Patient Appointment is a relational database management
                  project designed to help make the process of patients scheduling
                  appointments more efficiently. The database contains information
                  related to appointments such as the time, date, and place of location
                  of the appointment and the doctor whom the patient is seeing.
                </p>
                <h2>How It Was Made</h2>
                <p>
                  The database was created by using SQL through the Microsoft
                  SQL Server.
                </p>
                <h3>Contributor(s):</h3>
                <p>Meghan Ng</p>

              </div>
            </div>
        </div>
      )
    }
}

export default Patient_Appointment;
