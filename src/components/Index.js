import React, {Component, lazy, Suspense} from 'react';
import Advertise from "./Advertise";
import Pagination from "./common/Pagination";
import Alert from './common/Alert';
// import PostList from "./PostList";
import Menu from "./Menu";
import {BarLoader} from 'react-spinners';
import {inject, observer} from 'mobx-react';
import {STATUS_BEGIN} from "../stores/Status";

const PostList=lazy(()=>import("./PostList"));


class Index extends Component {
    constructor(props){
        super(props)
        //一定要写这个binding，不然在调用分页接口时会报goToPage is not a function
        this.loadData=this.loadData.bind(this);
        this.goToPage=this.goToPage.bind(this);
    }

    componentDidMount(){
        this.loadData(1,'all');
    }

    loadData(pageNo,tab){
        this.props.indexStore.fetchHomeData({pageNO:pageNo,tab:tab});
    }
    goToPage(pageNo){
        this.loadData(pageNo,this.props.indexStore.currentFilter.tab)
    }


    goToTab=(tab)=>{
        console.log('goto tab:',tab)
        this.loadData(1,tab);
    }

    render() {
        const {pager,catList,currentFilter,status,alertData}=this.props.indexStore;
        return (
            <div className="container main">
                <Alert alertData={alertData}/>
                <div className="col-md-9">
                    <BarLoader loading={status===STATUS_BEGIN} widthUnit={'px'} heightUnit={'px'} width={823} height={6} color={'#fa0000'}/>
                    <div className="panel">
                        <div className="header">
                            {catList &&<Menu catList={catList} currentTab={currentFilter.tab} goToTab={this.goToTab}/>}
                        </div>
                        <Suspense fallback={<div className={'text-center'}>加载帖子数据...</div>}>
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

export default inject("indexStore")(observer(Index));