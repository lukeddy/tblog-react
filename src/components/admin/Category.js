import React from 'react';
import Pagination from '../common/Pagination';
import Advertise from "../Advertise";
import {Link} from "react-router-dom";
import Alert from '../common/Alert';
import {connect} from 'react-redux';
import {fetchCategoryList} from '../../actions/categoryActions';
import PropTypes from "prop-types";


class Category extends React.Component{

    constructor(props){
        super(props)
        this.state={
            loading:false,
            currentPage:1,
            alertData:{},
        }

        this.fetchData=this.fetchData.bind(this);
        //一定要写这个binding，不然在调用分页接口时会报fetchData is not a function
        this.goToPage=this.goToPage.bind(this);
    }

    componentDidMount(){
        this.fetchData();
    }
    fetchData(){
        this.setState({loading:true});
        this.props.fetchCategoryList({pageNO:this.state.currentPage}).then((response)=>{
            this.setState({loading:false});
            //this.setState({alertData:response.data});
        }).catch(error=>{
            console.log(error);
            const data={status:false,msg:"获取栏目数据失败"}
            this.setState({loading:false});
            this.setState({alertData:data});
        });
    }

    goToPage(pageNo){
        //console.log(pageNo);
        //由于setState方法是异步执行，所以分页数据获取方法需要作为第二个参数
        this.setState({currentPage:pageNo},this.fetchData);
        //console.log(this.state);
    }

    render(){
        const {alertData,loading}=this.state;
        const {pager}=this.props;

        let catItems=null;
        if(pager&&pager.content){
             catItems = pager.content.map((cat) =>
                <tr key={cat.id}>
                    <td>{cat.catName}</td>
                    <td>{cat.catDir}</td>
                    <td>{cat.createAtFormatted}</td>
                    <td>{cat.updateAtFormatted}</td>
                    <td><Link to={'/categoryedit/'+cat.id}>修改</Link></td>
                </tr>
            );
        }else{
            catItems =<tr><td className="text-center" colSpan="5">没有数据</td></tr>
        }

        return(
            <div className="container main">
                <div className="col-md-3">
                   <Advertise/>
                </div>
                <div className="col-md-9">
                    <ul className="breadcrumb">
                        <li><Link to="/">主页</Link><span className="divider"></span></li>
                        <li className="active">栏目管理</li>
                    </ul>
                    <div className="panel">
                        <div className="panel-body">
                            <h4>栏目列表 <Link to="/categoryadd">[新增]</Link></h4>
                            <Alert alertData={alertData}/>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>栏目名称</th>
                                        <th>目录</th>
                                        <th>创建日期</th>
                                        <th>更新日期</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading && <tr><td className="text-center" colSpan="5">数据加载中....</td></tr>}
                                    {catItems}
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

PropTypes.propTypes={
    fetchCategoryList: PropTypes.func.isRequired,
    pager:PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        pager:state.categoryReducer.pager
    };
}

export default connect(mapStateToProps,{fetchCategoryList})(Category)