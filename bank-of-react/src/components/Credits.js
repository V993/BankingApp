// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance';

class Credits extends Component {
  render() {
    return (
        <div>
          <h1>Credits</h1>

          <div>Username: {this.props.userName}</div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div>Credits: {this.props.credits}</div>

          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default Credits;