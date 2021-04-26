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
        found: false
    }
  }

  componentDidMount() {
    this.setState({ credits: this.props.credits.map(credit => credit) });
  } // retrieve credits from API

  makeTable = () => {
    let currData = this.props.credits;
    let foundMatch = this.props.found;
    let table = [];
    if (!foundMatch) {
        table.push(<tr key={-1}><td>No credit transactions found</td></tr>);
        return table;
    } else {
        currData.map((credit, c_key) => {
          table.push(
            <tr key={c_key}>
              <td>Description: {credit.description}</td>
              <td>Amount: {credit.amount}</td>
              <td>Date: {credit.date}</td>
            </tr>
          );
        })
        return table;
    }
}   

  render() {
    return (
        <div>
          <h1>Credits</h1>

          <div>Welcome, {this.props.userName}.</div>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <div>Number of credits: {this.props.credits.length}</div>
          <table id="credit-transactions">
            <tbody>{this.makeTable()}</tbody>
          </table>
          <br></br>

          <Link to="/">Return to Home</Link>
        </div>
    );
  }
}

export default Credits;