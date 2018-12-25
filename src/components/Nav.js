import React, {Component} from 'react'
import './Nav.css'
import {Link} from "react-router-dom";
import {NavItem} from "react-bootstrap";

class Nav extends Component{

    render(){
        return (
            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand hidden-sm" href="/">
                        <span className="tblog-leaf-logo">&nbsp;</span>
                    </a>
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
                        <li><a href="/">首页</a></li>
                        <li><a href="/about">关于</a></li>
                        <li><a href="/register">注册</a></li>
                        <li><a href="/login">登陆</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav