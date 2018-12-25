import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from "./components/Register";
import PostDetail from "./components/PostDetail";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Nav></Nav>
            <Route exact path="/" component={Index}/>
            <Route path="/home" component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/detail" component={PostDetail}/>
            {/*<Route path="*" component={Home}/>*/}
            <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
