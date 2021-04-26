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
        <div className="body2">
          <h1 id="flashy">Credits</h1>

          <div>Welcome, {this.props.userName}.</div>
          <br></br>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <br></br>
          <div>Number of credits: {this.props.credits.length}</div>
          <br></br>

          <Link to="/">
            <h3 id="flashy">Return to Home</h3>
          </Link>
        </div>
    );
  }
}

export default Credits;