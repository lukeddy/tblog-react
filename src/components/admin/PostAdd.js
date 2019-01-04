import React from 'react';
import Advertise from "../Advertise";
import Alert from '../common/Alert';
import InlineError from "../common/InlineError";
import {Link} from "react-router-dom";
import Dropzone from 'react-dropzone';
import YTEditor from '../editor/YTEditor';
import {inject,observer} from 'mobx-react';
import {STATUS_BEGIN} from "../../stores/Status";

class PostAdd extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:{
                authorId:null,
                catId:"",
                title:"",
                desc:"",
                tags:"",
                thumbURL:null,
                thumbBG:null,
                contentMD:"",
                contentHTML:"",
                contentIsHTML:false,
                top:false,
                good:false,
            },
            errors:{},
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.updateMarkdown=this.updateMarkdown.bind(this);
    }

    componentDidMount(){
        this.setState({
            data: { ...this.state.data, authorId: this.props.authStore.userInfo.uid}
        });
        this.props.categoryStore.fetchAllCategory().then((response)=>{
            if(response.data.status){
                this.setState({allCategory:this.props.categoryStore.allCategory},console.log('all cat:',this.state.allCategory));
            }
        })
    }

    onChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            data: { ...this.state.data, [name]: value }
        });
    }
    onSubmit(e){
        e.preventDefault();

        const errors = this.validate(this.state.data);
        this.setState({ errors });

        console.log(this.state.data)
        if (Object.keys(errors).length === 0) {
            this.props.postStore.createPost(this.state.data);
        }
    }

    validate(data){
        const errors = {};
        if (!data.catId) errors.catId = "请选择栏目";
        if (!data.title) errors.title = "标题不能为空";
        if (!data.contentMD) errors.contentMD = "内容MD不能为空";
        return errors;
    }

    onDrop=(acceptedFile, rejectedFile)=>{
        if(rejectedFile.length>0){
            alert("不支持文件："+rejectedFile[0].name)
        }

        const data = new FormData();
        data.append('file', acceptedFile[0]);

        this.props.uploadStore.uploadFile(data).then((response)=>{
            console.log(response)
            if(response.data.status){
                this.setState({
                    data: { ...this.state.data, thumbURL:response.data.data}
                });
                this.setState({
                    data: { ...this.state.data, thumbBG:process.env.REACT_APP_BASE_URL+response.data.data}
                });
            }
        })

        // this.props.uploadFile(data).then((response)=>{
        //     console.log(response)
        //     if(response.data.status){
        //         this.setState({
        //             data: { ...this.state.data, thumbURL:response.data.data}
        //         });
        //         this.setState({
        //             data: { ...this.state.data, thumbBG:process.env.REACT_APP_BASE_URL+response.data.data}
        //         });
        //     }
        // }).catch(error=>{
        //     console.log(error);
        //     this.setState({alertData:{status:false,msg:error.toString()}});
        // });
    }
    updateMarkdown(markdown,html){
        // console.log('md:',markdown)
        // console.log('html:',html)
        this.setState({
            data: { ...this.state.data, contentMD:markdown}
        });
        this.setState({
            data: { ...this.state.data, contentHTML:html}
        });
    }

    render(){
        const {data,errors}=this.state;
        const {allCategory}=this.props.categoryStore;
        const {token}=this.props.authStore;
        const {alertData,status}=this.props.postStore;

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
                            <Alert alertData={alertData}/>
                            <h4>新建帖子</h4>
                            <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">栏目:</div>
                                            <select id="catId" name="catId" className="form-control" value={data.catId} onChange={this.onChange}>
                                                <option value="">---请先选择栏目---</option>
                                                {allCategory.length>0 && allCategory.map((cat) => {
                                                    return(
                                                        <option key={cat.id} value={cat.id}>{cat.catName}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        {errors.catId && <InlineError text={errors.catId} />}
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">标题*:</div>
                                            <input type="text" name="title" className="form-control"  placeholder="输入帖子标题" value={data.title} onChange={this.onChange}/>
                                        </div>
                                        {errors.title && <InlineError text={errors.title} />}
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">摘要:</div>
                                            <textarea name="desc" className="form-control" rows="3" placeholder="输入摘要" value={data.desc} onChange={this.onChange}></textarea>
                                        </div>
                                        {errors.desc && <InlineError text={errors.desc} />}
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-addon">标签:</div>
                                            <input type="text" name="tags" className="form-control" placeholder="输入标签" value={data.tags} onChange={this.onChange}/>
                                        </div>
                                        <span className="label-info">注意：标签使用英文逗号分隔</span>
                                        {errors.tags && <InlineError text={errors.tags} />}
                                    </div>
                                    <div className="form-group">
                                        <label>正文,提示：图片可以直接粘贴或者拖拽自动上传</label>
                                        <YTEditor updateMarkdown={this.updateMarkdown} authToken={token} defaultValue={data.contentMD} />
                                        {errors.contentMD && <InlineError text={errors.contentMD} />}
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="contentIsHTML" value="true" onChange={this.onChange}/> 是否网页？
                                        </label>
                                        <label>
                                            <input type="checkbox" name="top" value="true" onChange={this.onChange}/> 置顶帖？
                                        </label>
                                        <label>
                                            <input type="checkbox" name="good" value="true" onChange={this.onChange}/> 精华帖？
                                        </label>
                                    </div>

                                    <div className="form-group text-center">
                                        <button className="btn btn-success" type="submit" disabled={status===STATUS_BEGIN}>新建</button>
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
                                <Dropzone  accept="image/jpeg, image/png, image/gif"
                                            multiple={false}
                                            onDrop={this.onDrop}
                                            style={{width:"100%",height:"120px",border:"2px dashed #0087F7",textAlign:"center",background:"#fff",backgroundSize:'cover',backgroundPosition:"center",backgroundImage:'url('+data.thumbBG+')',"paddingTop":'90px',"cursor":"pointer","boxSizing":"content-box"}} >
                                    <p>点击或者拖拽上传<br/>(<strong>文章缩略图</strong>)</p>
                                </Dropzone>
                            </div>
                        </div>
                    </div>
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default inject("authStore","categoryStore","postStore","uploadStore")(observer(PostAdd))