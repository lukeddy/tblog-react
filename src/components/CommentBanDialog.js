import React from "react";
import {Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {banBadComment} from '../actions/commentActions';
import Alert from './common/Alert';

class CommentBanDialog extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            reason:'1',
            memo:'',
            alertData:{},
            show: false
        }
    }


    showDialog=()=> {
        this.setState({ show: true });
    }

    hideDialog=()=> {
        this.setState({ show: false });
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        //const {comment}=this.props
        const data={
            reason:this.state.reason,
            memo:this.state.memo
        }

        console.log(this.props.comment.id, data)
        this.props.banBadComment(this.props.comment.id,data).then((response)=>{
            this.setState({alertData:response.data});
            if(response.data.status){
                this.props.reloadComments();
            }
        }).catch(error=>{
            console.log(error);
            this.setState({alertData:{status:false,msg:"回复评论失败:"+error.toString()}});
        });
    }


    render(){
        const {reason,memo,alertData}=this.state

        return(
            <div>

                <button onClick={this.showDialog}>显示</button>

                <Modal {...this.props}
                       show={this.state.show}
                       onHide={this.hideDialog}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            <p className="modal-title" style={{fontSize: "1.1em",lineHeight:"1.1em",fontWeight: 600}}>举报理由</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label className="radio-inline">
                                    <input type="radio" name="reason"  value="1" checked={reason==='1'} onChange={this.onChange}/> 营销诈骗
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="reason"  value="2" checked={reason==='2'} onChange={this.onChange}/> 淫秽色情
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="reason"  value="3" checked={reason==='3'} onChange={this.onChange}/> 地域攻击
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="reason"  value="4" checked={reason==='4'} onChange={this.onChange}/> 其他理由
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="control-label" htmlFor="memo">原因</label>
                                <textarea className="form-control" rows="6" name="memo" value={memo} onChange={this.onChange} placeholder="请输入原因（选填）"></textarea>
                            </div>
                            <div className="row text-right">
                                <button type="button" className="btn btn-default" onClick={this.hideDialog}>关闭</button>&nbsp;&nbsp;
                                <button type="submit" className="btn btn-success">确定</button>
                            </div>
                            <Alert alertData={alertData}/>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

PropTypes.propTypes={
    comment:PropTypes.object.isRequired,
}

export default connect(null,{banBadComment})(CommentBanDialog)