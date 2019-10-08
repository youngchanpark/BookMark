import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar'
import RegisterPage from './components/login'
import GoogleLogin from 'react-google-login';

// Google login OAuth
// client ID: 98393859783-gbpb8cm7hd1f9o1cm545l0gcv5u42o81.apps.googleusercontent.com 
// client secret:  PeDsecfE5mjwLxXOfWNtuKgK 

// Youtube API v3 key: AIzaSyDqZsm8l3eAjxpKkj_bjwWuLD1UFYiIaBk
// OAuth client ID: 98393859783-01115em1c5fnhqkvsefltqo8dtq3aigu.apps.googleusercontent.com
// OAuth client secret: JDpL8KMkM6qqffaD2w5BnuMo

/* Got rid of this interface because that meant we had to give the props in the index.tsx file
call of this App
interface Main{
  activeView: string;
}
*/

interface State {
  activeView: string,
  login: boolean,
  logged_in: boolean,
}

class App extends Component<{}, State>{ 

  constructor(props:any) {
    super(props)    
    this.state = {
      activeView: 'Home',
      login: false,
      logged_in: false
    }
  };

  responseGoogle = (response: any): void => {
    console.log(response);
  }

  selectMenu = (menu: string): void => {
    this.setState({
        activeView: menu
    });
  };

  render() {
    /*
    if (this.state.activeView === "Login") {
      const pageBody = LoginPage
    }*/
    if (this.state.activeView === "Register" && this.state.logged_in === false) {
      return (
        <div className="App">
          <header>
          {/* Navigation bar*/}
          <NavBar 
            activeView={this.state.activeView}
            handler={this.selectMenu}
            />
          </header>
  
          <RegisterPage />
          <GoogleLogin
          clientId="98393859783-01115em1c5fnhqkvsefltqo8dtq3aigu.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        </div>
      )  
    } else {
      return (
        <div className="App">
          <header>
          {/* Navigation bar*/}
          <NavBar 
            activeView={this.state.activeView}
            handler={this.selectMenu}
            />
          </header>
        </div>
      )
    }
  }
}

//const custom_type: React.FC = () => {}

/*
const App: React.FC = () => { 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App; // Cannot have more than one default export?
// export custom_type;
