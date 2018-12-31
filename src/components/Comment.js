import React from "react";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import PropTypes from 'prop-types';

class Comment extends React.Component{

    render(){
        const {comments}=this.props

        return(
            <div className="row comment-wrapper">
                <h3 className="header">{comments?comments.length:0} 条评论</h3>
                {comments&&comments.length>0 && comments.map((comment,index)=>{
                    return (<CommentItem key={index} comment={comment}
                                         likeComment={this.props.likeComment}
                                         replyComment={this.props.replyComment}
                                         banComment={this.props.banComment}
                                         deleteComment={this.props.deleteComment}/>)
                })}
                <CommentForm></CommentForm>
            </div>
        );
    }
}

PropTypes.propTypes={
    comments:PropTypes.array.isRequired,
    likeComment:PropTypes.func.isRequired,
    replyComment:PropTypes.func.isRequired,
    banComment:PropTypes.func.isRequired,
    deleteComment:PropTypes.func.isRequired
}

export default Comment