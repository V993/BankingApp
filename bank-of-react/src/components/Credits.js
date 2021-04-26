// src/components/Credits.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: "",
      date: "",
      credits: [],
      found: false,
    };
  }

  componentDidMount() {
    this.setState({ credits: this.props.credits.map((credit) => credit) });
  } // retrieve credits from API

  makeTable = () => {
    let currData = this.state.credits;
    let foundMatch = this.props.found;
    let table = [];
    if (!foundMatch) {
      table.push(
        <tr key={-1}>
          <td>No credit transactions found</td>
        </tr>
      );
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
      });
      return table;
    }
  };

  handleDesc = (desc) => {
    this.setState({ description: desc.target.value });
  };

  handleAmt = (value) => {
    this.setState({ amount: parseFloat(value.target.value) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      credits: [
        ...this.state.credits,
        {
          description: this.state.description,
          amount: this.state.amount,
          date: new Date().toLocaleDateString(),
        },
      ],
    });
    this.props.updateBalance(this.state.amount);
  };

  render() {
    return (
      <div>
        <h1>Credits</h1>

        <div>Welcome, {this.props.userName}.</div>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div>Number of credits: {this.state.credits.length}</div>
        <table id="credit-transactions">
          <tbody>{this.makeTable()}</tbody>
        </table>
        <br></br>

        <form id="credit-field" onSubmit={this.handleSubmit}>
          <h2>New Transaction</h2>
          <div>
            <input
              type="text"
              placeholder="ACH Direct Deposit *COMPANY"
              name="desc"
              required
              onChange={this.handleDesc}
            />
          </div>
          <div>
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="2.99"
              name="amt"
              required
              onChange={this.handleAmt}
            />
          </div>
          <button>Add Credit</button>
        </form>

        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Credits;
