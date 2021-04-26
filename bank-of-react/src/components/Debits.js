// src/components/Debits.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      amount: "",
      date: "",
      debits: [],
      found: false,
    };
    console.log(this.props);
    console.log(this.state);
  }

  componentDidMount() {
    this.setState({ debits: this.props.debits.map((debit) => debit) });
  } // retrieve debits from API

  makeTable = () => {
    let currData = this.state.debits;
    let foundMatch = this.props.found;
    let table = [];
    if (!foundMatch) {
      table.push(
        <tr key={-1}>
          <td>No debit transactions found</td>
        </tr>
      );
      return table;
    } else {
      currData.map((debit, c_key) => {
        table.push(
          <tr key={c_key}>
            <td>Description: {debit.description}</td>
            <td>Amount: {debit.amount}</td>
            <td>Date: {debit.date}</td>
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
    if (value.target.value > 1)
      this.setState({ amount: parseFloat(value.target.value) * -1 });
    else if (value.target.value < 1)
      this.setState({ amount: parseFloat(value.target.value).toFixed(2) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      debits: [
        ...this.state.debits,
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
          <h1 id="bigBoi">Debits</h1>
        </div>

        <div className="content">
          Welcome, {this.props.userName}. 
        </div>

        <div className="content">
          <AccountBalance accountBalance={this.props.accountBalance} />
          <div className="balance">
            <h3>Number of debits: </h3> 
            {this.state.debits.length}</div>
        </div>

        <table>
          <tbody>{this.makeTable()}</tbody>
        </table>
        <br></br>

        <form id="debit-field" onSubmit={this.handleSubmit}>
          <h2 className="title">New Transaction: </h2>
          <div className="body">
            <input
              className="search-bar"
              type="text"
              placeholder="College Tuition Fees"
              name="desc"
              required
              onChange={this.handleDesc}
            />
            <input
              className="search-bar"
              type="number"
              min="1"
              step="0.01"
              placeholder="10000.00"
              name="amt"
              required
              onChange={this.handleAmt}
            />
            <button className="search-button">Add Debit</button>
          </div>
          
        </form>

        <Link to="/BankingApp/">
          <h3 id="flashy">Return to Home</h3>
        </Link>
      </div>
    );
  }
}

export default Debits;
