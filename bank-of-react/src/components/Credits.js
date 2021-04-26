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
        <div className="title">
          <h1 id="bigBoi">Credits</h1>
        </div>

        <div className="content">
          Welcome, {this.props.userName}. 
        </div>


        <div className="content">
          <AccountBalance accountBalance={this.props.accountBalance} />
          <div className="balance">
            <h3>Number of credits: </h3> 
            {this.state.credits.length}</div>
        </div>

        <table>
          <tbody>{this.makeTable()}</tbody>
        </table>
        <br></br>

        <form id="credit-field" onSubmit={this.handleSubmit}>
          <h2 className="title">New Transaction: </h2>
          <div className="body">
            <input
              className="search-bar"
              type="text"
              placeholder="ACH Direct Deposit *COMPANY"
              name="desc"
              required
              onChange={this.handleDesc}
            />
            <input
              className="search-bar"
              type="number"
              min="1"
              step="0.01"
              placeholder="2.99"
              name="amt"
              required
              onChange={this.handleAmt}
            />
           <button className="search-button">Add Credit</button>
          </div>
        </form>

        <Link to="/BankingApp/">
          <h3 id="flashy">Return to Home</h3>
        </Link>
      </div>
    );
  }
}

export default Credits;
