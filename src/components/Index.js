import React, {Component} from 'react';
import Advertise from "./Advertise";
import Pagination from "./common/Pagination";
import Alert from './common/Alert';
import PostList from "./PostList";
import {connect} from 'react-redux';
import {fetchHomeData} from '../actions/postActions';

class Index extends Component {
    constructor(props){
        super(props)

        this.state={
            pager:null,
            catList:[],
            currentFilter:{
              pageNO:1,
              tab:"all"
            },
            loading:false,

            alertData:{},
        }

        //一定要写这个binding，不然在调用分页接口时会报goToPage is not a function
        this.loadData=this.loadData.bind(this);
        this.goToPage=this.goToPage.bind(this);
    }

    componentDidMount(){
        this.loadData(this.state.currentFilter.pageNO,this.state.currentFilter.tab);
    }

    loadData(pageNo,tab){
        console.log("loading data: "+pageNo);
        this.setState({loading:true});
        this.props.fetchHomeData({pageNO:pageNo,tab:tab}).then((response)=>{
            this.setState({loading:false});
            console.log(response.data.data)
            if(response.data.status){
                this.setState({pager:response.data.data.pager});
                this.setState({catList:response.data.data.catList});
                this.setState({currentFilter:response.data.data.indexVo});
            }else{
                this.setState({alertData:response.data});
            }
        }).catch(error=>{
            console.log(error);
            this.setState({loading:false});
            this.setState({alertData:{status:false,msg:"获取帖子数据失败"}});
        });
    }
    goToPage(pageNo){
        console.log("go to page:"+pageNo);
        this.setState({
            currentFilter: { ...this.state.currentFilter, pageNo: pageNo }
        },this.loadData(pageNo,this.state.currentFilter.tab));
    }
    render() {
        const {pager, alertData}=this.state
        return (
            <div className="container main">
                <Alert alertData={alertData}/>
                <div className="col-md-9">
                    <div className="panel">
                        <div className="header">
                            <a href="/tblog/?tab=all" className="topic-tab current-tab">全部</a>
                            <a href="/tblog/?tab=java" className="topic-tab">Java</a>
                            <a href="/tblog/?tab=vue" className="topic-tab">Vue</a>
                            <a href="/tblog/?tab=php" className="topic-tab">php</a>
                            <a href="/tblog/?tab=golang" className="topic-tab">golang</a>
                            <a href="/tblog/?tab=nodejs" className="topic-tab">nodejs</a>
                            <a href="/tblog/?tab=good" className="topic-tab">good</a>
                            <a href="/tblog/?tab=nice" className="topic-tab">nice</a>
                            <span className="dropdown">
                            <a href="/" className="dropdown-toggle topic-tab" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">更多 <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=swift" className="topic-tab">swift</a>
                                    </li>

                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=python" className="topic-tab">python</a>
                                    </li>

                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=ruby" className="topic-tab">ruby</a>
                                    </li>
                            </ul>
                    </span>
                        </div>
                        <div className="inner no-padding">
                            {pager&&pager.content && <PostList postList={pager.content}></PostList>}
                            {pager&&pager.totalPages>0 &&<Pagination totalPages={pager.totalPages} currentPage={pager.number+1} jumpPage={this.goToPage}/> }
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

export default connect(null,{fetchHomeData})(Index);