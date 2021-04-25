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

  boringClick = () => {
    alert("give me ur money");
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
            <div className ="middle">
              <img
                src={icon} 
                alt="Logo"
              />
              <br></br>
              <h3> 
                <pre>
                  "The best bank to ever not-exist!" <br></br>
                      - a person has probably said
                </pre>
              </h3> 
            </div>
            <br></br>
            <h1 id="flashy" onClick={this.boringClick}> Trust us! </h1>
            <h3> . . . with all yo' dough!</h3>
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