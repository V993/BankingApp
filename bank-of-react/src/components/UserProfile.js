// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UserProfile extends Component {
  render() {
    return (
        <div>
          <h1 className="title">User Profile</h1>

          <div className="nav">Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>

          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default UserProfile;