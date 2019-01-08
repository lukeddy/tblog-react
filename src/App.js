import React, {Component} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Index from './components/Index';
import About from './components/About';
import Nav from './components/Nav'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from "./components/Register";
import PostDetail from "./components/PostDetail";
import NoMatch from "./components/NoMatch";
import Category from "./components/admin/Category";
import CategoryAdd from "./components/admin/CategoryAdd";
import CategoryEdit from "./components/admin/CategoryEdit";
import Post from "./components/admin/Post";
import PostAdd from "./components/admin/PostAdd";
import PostEdit from "./components/admin/PostEdit";
import MyRoute from "./route/MyRoute";


class App extends Component {
  render() {
    return (
        <Router basename={process.env.REACT_APP_CONTEXT_PATH}>
            <div>
                <Nav></Nav>
                <Switch>
                    <MyRoute exact path="/" component={Index}/>
                    <MyRoute path="/home" component={Index}/>
                    <MyRoute path="/about" component={About}/>
                    <MyRoute path="/login" component={Login}/>
                    <MyRoute path="/register" component={Register}/>
                    <MyRoute path="/detail/:id" component={PostDetail}/>
                    <MyRoute path="/category" component={Category}/>
                    <MyRoute path="/categoryadd" component={CategoryAdd}/>
                    <MyRoute path="/categoryedit/:id" component={CategoryEdit}/>
                    <MyRoute path="/post" component={Post}/>
                    <MyRoute path="/postadd" component={PostAdd}/>
                    <MyRoute path="/postedit/:id" component={PostEdit}/>
                    <MyRoute component={NoMatch}/>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    );
  }
}

export default App;
