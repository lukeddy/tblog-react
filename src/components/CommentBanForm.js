import React from "react";
import {Modal} from 'react-bootstrap';
import PropTypes from "prop-types";
import Alert from './common/Alert';

class CommentBanForm extends React.Component{

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
        const data={
            reason:this.state.reason,
            memo:this.state.memo
        }

        console.log('dialog data', data)
        this.props.banComment(data);
    }

    showResult=(data)=>{
        this.setState({alertData:data})
    }

    render(){
        const {reason,memo,alertData}=this.state

        return(
           <Modal  show={this.state.show}
                   onHide={this.hideDialog}>

                    <Modal.Header closeButton>
                        <Modal.Title>
                            <p className="modal-title" style={{fontSize: "1.1em",lineHeight:"1.1em",fontWeight: 600}}>举报理由</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Alert alertData={alertData}/>
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
                        </form>
                    </Modal.Body>
                </Modal>
        );
    }
}

PropTypes.propTypes={
    comment:PropTypes.object.isRequired,
    banComment:PropTypes.func.isRequired,
}

export default CommentBanForm