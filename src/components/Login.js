import React from 'react'
import Advertise from "./Advertise";
import {Link} from "react-router-dom";

class Login extends React.Component{
    render(){
        return (
            <div className="container main">
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li className="active">登录</li>
                    </ul>
                    <div className="row wrapper">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6">
                            <form action="/tblog/login" method="post">
                                <h3 className="form-signin-header text-center">登录TBlog</h3>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">用户名:</div>
                                        <input type="text" name="username" value="" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                        <input name="password" type="password" value="" className="form-control"/>
                                    </div>

                                </div>
                                <div className="btn-group btn-group-justified" role="group" aria-label="...">
                                    <div className="btn-group" role="group">
                                        <button className="btn btn-success" type="submit">登录</button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button className="btn btn-default" type="reset">重置</button>
                                    </div>
                                </div>
                                <p>没有账户？点击<a href="/register">注册</a></p>
                            </form>
                        </div>
                        <div className="col-sm-3">&nbsp;</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default Login