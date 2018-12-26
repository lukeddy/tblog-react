import React from 'react'
import Advertise from "./Advertise";
import {Link} from "react-router-dom";
import InlineError from "./common/InlineError";
import {connect} from 'react-redux';
import {login} from '../actions/authActions';
import PropTypes from 'prop-types';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data: {
                username: "",
                password: ""
            },
            errors: {}
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }
    onSubmit(e){
        e.preventDefault()
        //验证数据有效性
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        console.log(errors);

        if (Object.keys(errors).length === 0) {
            //submit data
            console.log(this.state)
            this.props.login(this.state.data).then(resp=>{
                console.log(resp);
                //this.props.history.push("/home")
            }).catch(error=>{
                console.log(error);
            });
        }
    }

    validate(data){
        const errors = {};
        if (!data.username) errors.username = "用户名不能为空";
        if (!data.password) errors.password = "密码不能为空";
        return errors;
    }

    render(){
        const { data, errors } = this.state;

        return (
            <div className="container main">
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li className="active">登录</li>
                    </ul>
                    <div className="row wrapper">
                        <div className="col-sm-6 col-sm-offset-3">
                            <form onSubmit={this.onSubmit}>
                                <h3 className="form-signin-header text-center">登录TBlog</h3>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">用户名:</div>
                                        <input type="text" name="username" value={data.username} onChange={this.onChange} className="form-control"/>
                                    </div>
                                    {errors.username && <InlineError text={errors.username} />}
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;码:</div>
                                        <input name="password" type="password" value={data.password} onChange={this.onChange} className="form-control"/>
                                    </div>
                                    {errors.password && <InlineError text={errors.password} />}
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
                    </div>
                </div>
                <div className="col-md-3">
                    <Advertise/>
                </div>
            </div>
        );
    }
}

PropTypes.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null,{login})(Login)