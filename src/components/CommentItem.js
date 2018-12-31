import React from 'react';
import PropTypes from 'prop-types';

class CommentItem extends React.Component{

    thumbsUpClicked=(commentId)=>{
        console.log('thumbs up',commentId)
        this.props.reloadComments();
    }
    deleteClicked=(commentId)=>{
        console.log('delete',commentId)
        this.props.reloadComments();
    }
    replyClicked=(commentId)=>{
        console.log('reply',commentId)
        this.props.reloadComments();
    }

    banClicked=(commentId)=>{
        console.log('ban',commentId)
        this.props.reloadComments();
    }

    render(){
        const {comment}=this.props
        return(
            <div className="comment" id="5ba4accfbf578d447ea53384">
                <a className="avatar" href="/test" target="_blank">
                    <img src={comment.author.avatarURL} title={comment.author.username} alt={comment.author.username}/>
                </a>
                <div className="content">
                    <a className="author" href="/test" target="_blank">{comment.author.username}</a>
                    <div className="metadata">
                        <span className="date">{comment.friendlyTime}</span>
                    </div>
                    <div className="text">
                        <p dangerouslySetInnerHTML={{__html: comment.commentHTML}}></p>
                    </div>
                    <div className="operations">
                        <span className="op-icon like" onClick={this.thumbsUpClicked.bind(this,comment.id)}>
                            <i className="fa fa-thumbs-up"></i> <span>{comment.thumbsUPCount}</span>赞
                        </span>
                        <span className="op-icon reply btn-reply-to" onClick={this.replyClicked.bind(this,comment.id)}>
                            <i className="fa fa-comments"></i> 回复
                        </span>
                        <span className="op-icon remove" onClick={this.deleteClicked.bind(this,comment.id)}>
                            <i className="fa fa-trash"></i> 删除
                        </span>
                        <span className="op-icon ban" onClick={this.banClicked.bind(this,comment.id)}>
                            <i className="fa fa-ban"></i> 举报
                        </span>
                    </div>
                    <div className="reply-box" id="replyBox5ba4accfbf578d447ea53384"></div>
                </div>
            </div>
        );
    }
}

PropTypes.propTypes={
    comment:PropTypes.object.isRequired,
    reloadComments:PropTypes.func.isRequired,
}

export default CommentItem