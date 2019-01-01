import React, {Component,lazy,Suspense} from 'react';
import Advertise from "./Advertise";
import Pagination from "./common/Pagination";
import Alert from './common/Alert';
// import PostList from "./PostList";
import {connect} from 'react-redux';
import {fetchHomeData} from '../actions/postActions';
import Menu from "./Menu";
const PostList=lazy(()=>import("./PostList"));

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
        //console.log("loading data: "+pageNo);
        this.setState({loading:true});
        this.props.fetchHomeData({pageNO:pageNo,tab:tab}).then((response)=>{
            this.setState({loading:false});
            //console.log(response.data.data)
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
        //console.log("go to page:"+pageNo);
        this.setState({
            currentFilter: { ...this.state.currentFilter, pageNo: pageNo }
        },this.loadData(pageNo,this.state.currentFilter.tab));
    }


    goToTab=(tab)=>{
        console.log('goto tab:',tab)
        this.setState({
            currentFilter: { ...this.state.currentFilter, tab: tab }
        });

        this.loadData(1,tab);
    }

    render() {
        const {pager,catList,currentFilter, alertData}=this.state
        return (
            <div className="container main">
                <Alert alertData={alertData}/>
                <div className="col-md-9">
                    <div className="panel">
                        <div className="header">
                            {catList &&<Menu catList={catList} currentTab={currentFilter.tab} goToTab={this.goToTab}/>}
                        </div>
                        <Suspense fallback={<div className="text-center">加载中.....</div>}>
                        <div className="inner no-padding">
                            {pager&&pager.content.length===0 && <div className='row text-center'>没有数据</div>}
                            {pager&&pager.content.length>0 && <PostList postList={pager.content}></PostList>}
                            {pager&&pager.totalPages>0 &&<Pagination totalPages={pager.totalPages} currentPage={pager.number+1} jumpPage={this.goToPage}/> }
                        </div>
                        </Suspense>
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