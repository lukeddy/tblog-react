import React from 'react';
import Pagination from "../common/Pagination";
import Advertise from "../Advertise";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {fetchPostList} from '../../actions/postActions';
import Alert from '../common/Alert';

class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pager:{},
            loading:false,
            currentPage:1,
            alertData:{},
        }
        this.loadData=this.loadData.bind(this);
        this.goToPage=this.goToPage.bind(this);
    }

    componentDidMount(){
        this.loadData(this.state.currentPage)
    }

    loadData(pageNo){
        this.setState({loading:true});
        this.props.fetchPostList({pageNO:pageNo}).then((response)=>{
            this.setState({loading:false});
            //this.setState({alertData:response.data});
            if(response.data.status){
                this.setState({pager:response.data.data});
            }
        }).catch(error=>{
            console.log(error);
            this.setState({loading:false});
            this.setState({alertData:{status:false,msg:"获取帖子数据失败"}});
        });
    }
    goToPage(pageNo){
        console.log("go to page:"+pageNo);
        this.setState({currentPage:pageNo},this.loadData(pageNo))
    }

    render(){

        const {pager,alertData,loading}=this.state;

        let postItems=null;
        if(pager&&pager.content){
            postItems = pager.content.map((post) =>
                <tr key={post.id}>
                    <td>
                        <Link to={'/detail/'+post.id}>{post.title}</Link>
                    </td>
                    <td>{post.category.catName}</td>
                    <td>{post.createAtFormatted}</td>
                    <td>{post.updateAtFormatted}</td>
                    <td>
                        <Link to={'/postedit/'+post.id}>修改</Link>
                        <Link to={'/postdelete/'+post.id}>删除</Link>
                    </td>
                </tr>
            );
        }else{
            postItems =<tr><td className="text-center" colSpan="5">没有数据</td></tr>
        }

        return(
            <div className="container main">
                <div className="col-md-3">
                    <Advertise/>
                </div>
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li className="active">帖子管理</li>
                    </ul>
                    <div className="panel">
                        <div className="panel-body">
                            <Alert alertData={alertData}/>
                            <h4>帖子列表 <Link to="/postadd">【新增】</Link></h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>帖子标题</th>
                                        <th>栏目</th>
                                        <th>创建日期</th>
                                        <th>更新日期</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading && <tr><td className="text-center" colSpan="5">数据加载中....</td></tr>}
                                    {postItems}
                                </tbody>
                            </table>
                            {pager.totalPages &&<Pagination totalPages={pager.totalPages} currentPage={pager.number+1} jumpPage={this.goToPage}/> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default connect(null,{fetchPostList})(Post)