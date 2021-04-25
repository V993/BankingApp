// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <div className="balance">
          <h3>Balance:</h3> 
          <br></br>
          <h3>${this.props.accountBalance}</h3>
        </div>
    );
  }
}

export default AccountBalance;