import React from 'react';
import Advertise from "../Advertise";
import {Link} from "react-router-dom";

class PostAdd extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:{
                catId:"",
                title:"",
                desc:"",
                tags:"",
                contentMD:"",
                contentHtml:"",
            },
            loading:false,
            errors:{},
            alertData:{},
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
            //TODO api call
        }
    }

    validate(data){
        const errors = {};
        if (!data.catId) errors.catId = "请选择栏目";
        if (!data.title) errors.title = "标题不能为空";
        if (!data.contentMD) errors.contentMD = "内容MD不能为空";
        if (!data.contentHTML) errors.contentHTML = "内容HTML不能为空";
        return errors;
    }

    render(){
        return(
            <div className="container main">
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li><Link to="/post">帖子管理</Link><span className="divider"></span></li>
                        <li className="active">新建帖子</li>
                    </ul>
                    <div className="panel">
                        <div className="panel-body">
                            <h4>新建帖子</h4>
                            <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">栏目:</div>
                                            <select id="catId" name="catId" className="form-control">
                                                <option value="" selected="">---请先选择栏目---</option>
                                                <option value="5c24da35577356075e6a4b32">awesome</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">标题*:</div>
                                            <input type="text" name="title" className="form-control"  placeholder="输入帖子标题" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">摘要:</div>
                                            <textarea name="desc" className="form-control" rows="3" placeholder="输入摘要"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">标签:</div>
                                            <input type="text" name="tags" className="form-control" placeholder="输入标签" value=""/>
                                        </div>
                                        <span className="label-info">注意：标签使用英文逗号分隔</span>
                                    </div>
                                    <div className="form-group">
                                        <label>正文</label>
                                        <textarea className="form-control" placeholder="不要吝啬您的评论，您的一言将帮助千万网友" rows={6} cols={3}></textarea>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="contentIsHTML" value="true"/> 是否网页？
                                        </label>
                                        <label>
                                            <input type="checkbox" name="top" value="true"/> 置顶帖？
                                        </label>
                                        <label>
                                            <input type="checkbox" name="good" value="true"/> 精华帖？
                                        </label>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn btn-success" type="submit">新建</button>
                                        <button className="btn btn-default" type="reset">清空</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="panel">
                        <div className="header">帖子缩略图</div>
                        <div className="inner">
                            <div className="row" id="dropzoneWrapper">
                                <form id="uploadForm" action="" className="dropzone needsclick dz-clickable">
                                    <div className="dz-message needsclick">
                                        点击或者拖拽上传<br/>
                                        <span className="note needsclick">(<strong>文章缩略图</strong>)</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default PostAdd