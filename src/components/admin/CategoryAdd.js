import React from 'react';
import Advertise from "../Advertise";
import {Link} from "react-router-dom";
import Alert from "../common/Alert";
import InlineError from "../common/InlineError";
import Validator from 'validator';
import {inject,observer} from 'mobx-react';
import {STATUS_BEGIN} from '../../stores/Status';

class CategoryAdd extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:{
                catName:"",
                catDir:"",
                catDesc:"",
            },
            errors:{},
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
        e.preventDefault();

        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            this.props.categoryStore.createCategory(this.state.data);
            // console.log(this.state.data)
            // this.setState({loading:true});
            // this.props.createCategory(this.state.data).then((response)=>{
            //     this.setState({loading:false});
            //     this.setState({alertData:response.data});
            // }).catch(error=>{
            //     console.log(error);
            //     const data={status:false,msg:"创建栏目失败"}
            //     this.setState({alertData:data});
            //     this.setState({loading:false});
            // });

        }
    }

    validate(data){
        const errors = {};
        if (!data.catName) errors.catName = "栏目名称不能为空";
        if (!data.catDir) errors.catDir = "目录名称不能为空";
        if(data.catDir&&(!Validator.isAlpha(data.catDir)||!Validator.isLowercase(data.catDir))) errors.catDir="目录名称只能是小写的字母组合";
        return errors;
    }

    render(){

        const {data,errors}=this.state;
        const {status,alertData}=this.props.categoryStore;

        return(
            <div className="container main">
                <div className="col-md-3">
                    <Advertise/>
                </div>
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li><Link to="/category">管理栏目</Link><span className="divider"></span></li>
                        <li className="active">新建栏目</li>
                    </ul>
                    <div className="panel">
                        <div className="panel-body">
                            <h4>新建栏目</h4>
                            <Alert alertData={alertData}></Alert>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">栏目名称:</div>
                                        <input type="text" className="form-control" name="catName" value={data.catName} onChange={this.onChange}/>
                                    </div>
                                    {errors.catName && <InlineError text={errors.catName} />}
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">目录名称:</div>
                                        <input type="text" className="form-control" name="catDir" placeholder="小写英文字母组合" value={data.catDir} onChange={this.onChange}/>
                                    </div>
                                    {errors.catDir && <InlineError text={errors.catDir} />}
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">目录简介:</div>
                                        <textarea name="catDesc" className="form-control" rows="4"
                                                  placeholder="请输入栏目简介，方便SEO优化" value={data.catDesc} onChange={this.onChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-success" type="submit" disabled={status===STATUS_BEGIN}>新建</button>
                                    <button className="btn btn-default" type="reset">清空</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("categoryStore")(observer(CategoryAdd))