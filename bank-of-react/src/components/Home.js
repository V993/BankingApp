// src/components/Home.js

import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import Debit from './Debits';

class Home extends Component {

    render() {


        return (
            <div>
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
                <h1>Bank of React</h1>
                <Link to="/userProfile">User Profile</Link>
                <br></br>
                <Link to='/Login'>Login</Link>
                <br></br>
                <Link to='/Debits'>Debits</Link>

                <Link to="/userProfile"><div>User Profile</div></Link>
                <Link to="/credits"><div>Credits</div></Link>

            </div>
        );
    }
}

export default Home;