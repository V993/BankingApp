import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import axios from 'axios';



class Debits extends Component {


    render() {

        return (
            <div>
                <h1> Debits: </h1>
                <div>Username:{ this.props.userName }</div>
                <AccountBalance accountBalance={ this.props.accountBalance } />
                {/* <div>Debits = { this.props.accountBalance } </div> */ }
                <div>Update Balance: { this.props.accountBalance }</div>




                <Link to="/">Return to Home</Link>









            </div >


        )
    }
}

export default Debits