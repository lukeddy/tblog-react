import React, { Component } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from "./components/Register";
import PostDetail from "./components/PostDetail";
import NoMatch from "./components/NoMatch";


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Nav></Nav>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    {/*<Redirect from="/" to="/home"></Redirect>*/}
                    <Route path="/home" component={Index}/>
                    <Route path="/about" component={About}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/post/:id" component={PostDetail}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
  }
}

export default App;
