// src/components/AccountBalance.js

import React, { Component } from 'react';


class AccountBalance extends Component {


  render() {
    return (
        <div className="balance">
          <h3>Balance: </h3> 
          <t> {this.props.accountBalance}</t>
          <br></br>
        </div>
    );
  }
}

export default AccountBalance;