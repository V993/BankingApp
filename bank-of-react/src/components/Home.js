// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import Debit from './Debits';

class Home extends Component {

    render() {
        return (
            <div className="body2">
                <div className="title">
                    <h1>Bank of React</h1>
                </div>

                <br></br>

                <Link to="/BankingApp/userProfile">
                    <h3 id="flashy">User Profile</h3>
                </Link>

                <Link to='/BankingApp/Login'>
                    <h3 id="flashy">Login</h3>
                </Link>

                <Link to='/BankingApp/Debits'>
                    <h3 id="flashy">UDebits</h3>
                </Link>

                <Link to="/BankingApp/credits">
                    <h3 id="flashy">UCredits</h3>
                </Link>

            </div>
        );
    }
}

export default Home;