import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <div>
        <h4>helfeafelo Resume!!!</h4>
        <Iframe className="stuff" url="https://docs.google.com/document/d/e/2PACX-1vR0fZ-XlbheFo0rlys_lfh_wCU0NwYklZTqTGzYgIEN9mATjFBI89xWfPz7X7xYP7tDF3XWLZgoESSY/pub"
          width="450px"
          height="450px"
        />
        </div>
    )
  }
}

export default Resume
