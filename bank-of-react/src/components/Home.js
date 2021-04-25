// src/components/Home.js

import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="body">
                <div className="title">
                    <h1 id="bigBoi">Bank of React</h1>
                </div>
                

                <Link to="/userProfile">User Profile</Link>

                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;