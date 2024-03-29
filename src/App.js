import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import axios from "axios";
import AccountBalance from "./components/AccountBalance";
import "./App.css";
import icon from "./bank-icon.jpg";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      balance: 0,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
      creditsAPI: [],
      debitsAPI: [],
      creditsFound: false,
      debitsFound: false,
    };
    this.updateBalance = this.updateBalance.bind(this);
  }

  updateBalance = (amount) => {
    this.setState({
      accountBalance: (
        parseFloat(this.state.accountBalance) + parseFloat(amount.toFixed(2))
      ).toFixed(2),
    });
  };

  Subtract = (amount) => {
    this.setState({
      accountBalance:
        this.state.accountBalance.replace(/\$/g, "") - this.state.balance,
    });
  };

  async componentDidMount() {
    const linkToAPI = "https://moj-api.herokuapp.com/";

    try {
      let debitsResponse = await axios.get(linkToAPI + "debits");
      let creditsResponse = await axios.get(linkToAPI + "credits");
      this.setState({
        creditsAPI: creditsResponse.data,
        debitsAPI: debitsResponse.data,
        creditsFound: true,
        debitsFound: true,
      });
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

    let totalCredits = 0,
      totalDebits = 0;
    this.state.creditsAPI.forEach((credit) => (totalCredits += credit.amount));
    this.state.debitsAPI.forEach((debit) => (totalDebits += debit.amount));
    this.setState({
      accountBalance: (
        this.state.accountBalance +
        (totalCredits - totalDebits)
      ).toFixed(2),
    });
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser };
    newUser.userName = logInInfo.userName;
    this.setState({ currentUser: newUser });
  };

  boringClick = () => {
    alert("give me ur money");
  };

  render() {
    const HomeComponent = () => (
      <Home accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const CreditsComponent = () => (
      <Credits
        userName={this.state.currentUser.userName}
        credits={this.state.creditsAPI}
        accountBalance={this.state.accountBalance}
        found={this.state.creditsFound}
        updateBalance={this.updateBalance}
      />
    );
    const DebitsComponent = () => (
      <Debits
        userName={this.state.currentUser.userName}
        debits={this.state.debitsAPI}
        accountBalance={this.state.accountBalance}
        found={this.state.debitsFound}
        updateBalance={this.updateBalance}
      />
    );

    return (
      <div className="wrapper">
        <div className="header">
          <div className="middle">
            <img src={icon} alt="Logo" />
            <br></br>
            <h3>
              <pre>
                "The best bank to ever not-exist!" <br></br>- a person has
                probably said
              </pre>
            </h3>
          </div>
          <br></br>
          <h1 id="flashy" onClick={this.boringClick}>
            {" "}
            Trust us!{" "}
          </h1>
          <h3> . . . with all yo' dough!</h3>
        </div>
        <div className="body">
          <Router>
            <Switch>
              <Route exact path="/BankingApp/" render={HomeComponent} />
              <Route exact path="/BankingApp/userProfile" render={UserProfileComponent} />
              <Route exact path="/BankingApp/login" render={LogInComponent} />
              <Route exact path="/BankingApp/Debits" render={DebitsComponent} />
              <Route exact path="/BankingApp/credits" render={CreditsComponent} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
