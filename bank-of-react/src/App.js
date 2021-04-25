import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile'
import LogIn from './components/LogIn'
import Credits from './components/Credits'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      currentUser: {
        userName: 'joe_shmo',
        memberSince: '07/23/96',
      },
      creditsAPI: [],
      debitsAPI: [],
      creditsFound: false,
      debitsFound: false
    }
  }

  formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }); // SO: questions/149055/how-to-format-numbers-as-currency-string

  async componentDidMount() {
    const linkToAPI = "https://moj-api.herokuapp.com/";

    try {
      let creditsResponse = await axios.get(linkToAPI + "credits");
      let debitsResponse = await axios.get(linkToAPI + "debits");
      this.setState({ creditsAPI: creditsResponse.data, debitsAPI: debitsResponse.data, creditsFound: true, debitsFound: true });
    } catch (error) {
      if (error.creditsResponse) {
        console.log(error.creditsResponse.data); //Not Found
        console.log(error.creditsResponse.status); //404
        this.setState({ creditsFound: false });
      } else if (error.debitsResponse) {
        console.log(error.debitsResponse.data); //Not Found
        console.log(error.debitsResponse.status); //404
        this.setState({ debitsFound: false });
      }
    }

    let totalCredits = 0, totalDebits = 0;
    this.state.creditsAPI.forEach(credit => totalCredits += credit.amount);
    this.state.debitsAPI.forEach(debit => totalDebits += debit.amount);
    this.setState({ accountBalance: (this.state.accountBalance + (totalCredits - totalDebits)).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2}) });
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
    const CreditsComponent = () => (<Credits userName={this.state.currentUser.userName} credits={this.state.creditsAPI} accountBalance={this.state.accountBalance}/>)

    return (

        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>

            
          </Switch>
        </Router>
    );
  }
}

export default App;