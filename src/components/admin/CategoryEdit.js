import React from 'react';
import Advertise from "../Advertise";
import {Link} from "react-router-dom";
import Alert from "../common/Alert";
import InlineError from "../common/InlineError";
import Validator from 'validator';
import {connect} from 'react-redux';
import {getCategory,updateCategory} from '../../actions/categoryActions';
import PropTypes from 'prop-types';

class CategoryEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            catId:null,
            category:{
                catName:"",
                catDir:"",
                catDesc:"",
            },
            loading:false,
            errors:{},
            alertData:{},
        }

        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentDidMount(){
        const catId=this.props.match.params.id;
        this.setState({catId:catId},this.initData(catId));
    }

    initData(catId){
        this.props.getCategory(catId).then((response)=>{
            if(response.data.status){
                this.setState({category:response.data.data});
            }
        }).catch(error=>{
            console.log(error);
            this.setState({alertData:{status:false,msg:"获取栏目信息失败"}});
        });
    }

    onChange(e){
        this.setState({
            category: { ...this.state.category, [e.target.name]: e.target.value }
        });
    }
    onSubmit(e){
        e.preventDefault();
        const {catId,category}=this.state;

        const errors = this.validate(category);
        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            this.setState({loading:true});
            this.props.updateCategory(catId,category).then((response)=>{
                this.setState({loading:false});
                this.setState({alertData:response.data});
            }).catch(error=>{
                console.log(error);
                this.setState({alertData:{status:false,msg:error.toString()}});
                this.setState({loading:false});
            });
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

        const {category,errors,alertData,loading}=this.state;

        return(
            <div className="container main">
                <div className="col-md-3">
                    <Advertise/>
                </div>
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li><Link to="/category">管理栏目</Link><span className="divider"></span></li>
                        <li className="active">修改栏目</li>
                    </ul>
                    <div className="panel">
                        <div className="panel-body">
                            <h4>修改栏目</h4>
                            <Alert alertData={alertData}></Alert>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">栏目名称:</div>
                                        <input type="text" className="form-control" name="catName" value={category.catName} onChange={this.onChange}/>
                                    </div>
                                    {errors.catName && <InlineError text={errors.catName} />}
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">目录名称:</div>
                                        <input type="text" className="form-control" name="catDir" placeholder="小写英文字母组合" value={category.catDir} onChange={this.onChange}/>
                                    </div>
                                    {errors.catDir && <InlineError text={errors.catDir} />}
                                </div>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-addon">目录简介:</div>
                                        <textarea name="catDesc" className="form-control" rows="4"
                                                  placeholder="请输入栏目简介，方便SEO优化" value={category.catDesc} onChange={this.onChange}></textarea>
                                    </div>
                                </div>
                                <div className="form-group text-center">
                                    <button className="btn btn-success" type="submit" disabled={loading}>修改</button>
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

CategoryEdit.propTypes={
    getCategory:PropTypes.func.isRequired,
    updateCategory:PropTypes.func.isRequired
}

export default connect(null,{getCategory,updateCategory})(CategoryEdit)