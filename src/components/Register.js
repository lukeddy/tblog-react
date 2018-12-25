import React from "react";
import Advertise from "./Advertise";

class Register extends React.Component{

    render(){
        return (
            <div className="container main">
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><a href="/">主页</a><span className="divider"></span></li>
                        <li className="active">注册</li>
                    </ul>
                    <div className="row wrapper">
                        <div className="col-sm-3">&nbsp;</div>
                        <div className="col-sm-6">
                            <form action="/register" method="post">
                                <h3 className="form-signin-header text-center">用户注册</h3>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">用户名:</div>
                                        <input value="" name="username" id="username" className="form-control"
                                               placeholder="请输入用户名"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                        <input value="" type="password" name="password" className="form-control"
                                               id="password" placeholder="请输入密码"/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">邮&nbsp;&nbsp;&nbsp;&nbsp;件:</div>
                                        <input value="" type="email" name="email" className="form-control" id="email"
                                               placeholder="电子邮件"/>
                                    </div>

                                </div>
                                <div className="btn-group btn-group-justified" role="group" aria-label="...">
                                    <div className="btn-group" role="group">
                                        <button className="btn btn-success" type="submit">注册</button>
                                    </div>
                                    <div className="btn-group" role="group">
                                        <button className="btn btn-default" type="reset">重置</button>
                                    </div>
                                </div>
                                 <p>已经有账户？点击<a href="/tblog/login">登陆</a></p>
                            </form>
                        </div>
                        <div className="com-sm-3">&nbsp;</div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default Register