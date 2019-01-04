import React from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PropTypes from 'prop-types';
import {inject,observer} from 'mobx-react';
import Alert from "./common/Alert";

class Comment extends React.Component{

    render(){
        const {comments}=this.props
        const {alertData}=this.props.commentStore;

        return(
            <div className="row comment-wrapper">
                <h3 className="header">{comments?comments.length:0} 条评论</h3>
                {comments&&comments.length>0 && comments.map((comment,index)=>{
                    return (<CommentItem key={index}
                                         comment={comment}
                                         reloadComments={this.props.reloadComments}/>)
                })}
                <Alert alertData={alertData}/>
                <CommentForm postId={this.props.postId}
                             reloadComments={this.props.reloadComments}/>
            </div>
        );
    }
}

PropTypes.propTypes={
    postId:PropTypes.string.isRequired,
    comments:PropTypes.array.isRequired,
    reloadComments:PropTypes.func.isRequired,
}

export default inject("commentStore")(observer(Comment))