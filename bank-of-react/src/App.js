import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import "./App.css"
import icon from './bank-icon.jpg'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)

    return (
        <div className="wrapper">
          <div className="header">
            <img
              src={icon} 
              alt="Logo"
            />
          </div>
          <div className="body">
            <Router>
              <Switch>
                <Route exact path="/" render={HomeComponent}/>
                <Route exact path="/userProfile" render={UserProfileComponent}/>
                <Route exact path="/login" render={LogInComponent}/>
              </Switch>
            </Router>
          </div>
        </div>
    );
  }
}

export default App;