// src/components/Credits.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance';

class Credits extends Component {
  constructor(props){
    super(props);
    this.state = {
        description: "",
        amount: "",
        date: "",
        credits: [],
    }
    console.log(this.props);
    console.log(this.props.credits);
  }

  componentDidMount() {
    this.setState({ credits: this.props.credits.map(credit => credit) });
  }

  render() {
    return (
        <div>
          <h1>Credits</h1>

          <div>Welcome, {this.props.userName}.</div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div>Number of credits: {this.props.credits.length}</div>

          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default Credits;