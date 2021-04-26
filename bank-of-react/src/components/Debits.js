import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import axios from 'axios';


console.log("Hi");


class Debits extends Component {
    constructor(props) {
        super(props);
        this.state = {
          apiData: [],
          description: "",
          amount: "",
          date: "",
        };
    }

    componentDidMount = async () => {
        let apiData = await axios.get("https://moj-api.herokuapp.com/debits");
        apiData = apiData.data;
        this.setState({apiData});
    }
    
    makeTable = (apiData) => {
        let table = [];
        console.log(apiData);
        for (let i = 0; i < apiData.length; i++) 
        {
            table.push(
                <tr>
                    <td>{apiData[i].description}</td>
                    <td>Amount ${apiData[i].amount}</td>
                    <td>Date {apiData[i].date}</td>
                </tr>
            );
        }
        return table;
    }

    

    render() {
        const {apiData} = this.state;
        return (
            <div>
                <h1> Debits: </h1>
                <h3>{this.makeTable(apiData)}</h3>
                <div>Username:{ this.props.userName }</div>
                <AccountBalance accountBalance={ this.props.accountBalance } />
                <div>Debits = { this.props.accountBalance } </div>
                <Link to="/">Return to Home</Link>
                
            </div >
        )
    }
}

export default Debits