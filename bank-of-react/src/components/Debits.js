import React, { Component } from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import axios from 'axios';



class Debits extends Component {


    render() {

        return (
            <div className="body2">
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