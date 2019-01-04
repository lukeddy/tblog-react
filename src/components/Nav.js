import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {inject,observer} from 'mobx-react';

class Nav extends Component{

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }

    render(){
        const {isAuthenticated} = this.props.authStore;

        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand hidden-sm"><span className="tblog-leaf-logo">&nbsp;</span></Link>
                    <form className="navbar-form pull-right" action="/search">
                        <div className="form-group hidden-xs">
                            <div className="input-group">
                                <div className="input-group-addon"><i className="glyphicon glyphicon-search"></i></div>
                                <input type="text" name="keywords" className="form-control" placeholder=""/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="navbar-collapse collapse pull-right">
                    <ul className="nav navbar-nav">
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        {isAuthenticated && <li><Link to="/category">栏目管理</Link></li>}
                        {isAuthenticated && <li><Link to="/post">帖子管理</Link></li>}
                        {!isAuthenticated && <li><Link to="/register">注册</Link></li>}
                        {!isAuthenticated && <li><Link to="/login">登陆</Link></li>}
                        {isAuthenticated && <li><Link to="/logout" onClick={this.logout.bind(this)}>登出</Link></li>}
                    </ul>
                </div>
            </div>
        );
    }
}

export default inject("authStore")(observer(Nav));