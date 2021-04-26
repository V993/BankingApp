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
        <h1>Debits</h1>

        <div>Welcome, {this.props.userName}.</div>
        <AccountBalance accountBalance={this.props.accountBalance} />
        <div>Number of debits: {this.state.debits.length}</div>
        <table id="debit-transactions">
          <tbody>{this.makeTable()}</tbody>
        </table>
        <br></br>

        <form id="debit-field" onSubmit={this.handleSubmit}>
          <h2>New Transaction</h2>
          <div>
            <input
              type="text"
              placeholder="College Tuition Fees"
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
              placeholder="10000.00"
              name="amt"
              required
              onChange={this.handleAmt}
            />
          </div>
          <button>Add Debit</button>
        </form>

        <Link to="/">Return to Home</Link>
      </div>
    );
  }
}

export default Debits;
