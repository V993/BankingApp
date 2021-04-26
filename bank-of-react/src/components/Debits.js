import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import axios from 'axios';



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
        for(let i = 0; i < apiData.length; i++)
        {
            table.push(
                <tr>
                    <td>{apiData[i].description}</td>
                    <td>Amount ${apiData[i].amount}</td>
                    <td>Date {apiData[i].date}</td>
                </tr>
            )
        }
      }

    render() {
        const {apiData} = this.state;
        return (
            <div className="body2">
                {this.makeTable(apiData)};
                <h1 id="flashy"> Debits: </h1>
                <div>Username: { this.props.userName }</div>
                <br></br>
                <AccountBalance accountBalance={ this.props.accountBalance } />

                <br></br>
                <div>Debits = { this.props.accountBalance } </div>
                <Link to="/">
                    <h3 id="flashy">Return to Home</h3>
                </Link>

            </div >


        )
    }
}

export default Debits