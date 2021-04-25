// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UserProfile extends Component {
  render() {
    return (
        <div className="body">
          <div className="title">
            <h1 id="bigBoi">User Profile</h1>
          </div>
          <br></br>
          <div id="flashy">Username: {this.props.userName}</div>
          <br></br>
          <div id="flashy">Member Since: {this.props.memberSince}</div>

          <Link to="/">
            <h3 id="flashy">Return to Home</h3>
          </Link>
        </div>
    );
  }
}

export default UserProfile;