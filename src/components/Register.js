import React from "react";
import Advertise from "./Advertise";
import {Link} from "react-router-dom";

class Register extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            email:'',
        };

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        //TODO submit data
        console.log(this.state)
    }

    render(){
        return (
            <div className="container main">
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li className="active">注册</li>
                    </ul>
                    <div className="row wrapper">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form onSubmit={this.onSubmit}>
                                <h3 className="form-signin-header text-center">用户注册</h3>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">用户名:</div>
                                        <input value={this.state.username} onChange={this.onChange} name="username" className="form-control" placeholder="请输入用户名"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                        <input value={this.state.password} onChange={this.onChange} type="password" name="password" className="form-control" placeholder="请输入密码"/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">邮&nbsp;&nbsp;&nbsp;&nbsp;件:</div>
                                        <input value={this.state.email} onChange={this.onChange} type="email" name="email" className="form-control" placeholder="电子邮件"/>
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