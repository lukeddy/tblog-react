import React from "react";
import './Comment.css'
import CommentForm from "./CommentForm";

class Comment extends React.Component{
    render(){
        return(
            <div className="row comment-wrapper">
                <h3 className="header">3 条评论</h3>
                <div className="comment" id="5ba4acfbbf578d447ea53386">
                    <a className="avatar" href="/test" target="_blank">
                        <img src="http://www.gravatar.com/avatar/5b37040e6200edb3c7f409e994076872?size=48" title="admin"
                             alt="admin"/>
                    </a>
                    <div className="content">
                        <a className="author" href="/test" target="_blank">admin</a>
                        <div className="metadata">
                            <span className="date">3个月前</span>
                        </div>
                        <div className="text">
                            <div>
                                <div className="ref">
                                    <h4>引用来自“admin”的评论</h4>
                                    <p>再来一条aa</p>
                                </div>
                            </div>
                            <p>哈哈哈</p>
                        </div>
                        <div className="operations">
                            <a className="like"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/thumbsup/5ba4acfbbf578d447ea53386">
                                <i className="fa fa-thumbs-up"></i> <span>0</span> 赞
                            </a>
                            <a className="ban"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/ban/5ba4acfbbf578d447ea53386">
                                <i className="fa fa-ban"></i> 举报
                            </a>
                        </div>
                        <div className="reply-box" id="replyBox5ba4acfbbf578d447ea53386"></div>
                    </div>
                </div>
                <div className="comment" id="5ba4acf1bf578d447ea53385">
                    <a className="avatar" href="/test" target="_blank">
                        <img src="http://www.gravatar.com/avatar/5b37040e6200edb3c7f409e994076872?size=48" title="admin"
                             alt="admin"/>
                    </a>
                    <div className="content">
                        <a className="author" href="/test" target="_blank">admin</a>
                        <div className="metadata">
                            <span className="date">3个月前</span>
                        </div>
                        <div className="text">

                            <p>再来一条aa</p>

                        </div>
                        <div className="operations">
                            <a className="like"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/thumbsup/5ba4acf1bf578d447ea53385">
                                <i className="fa fa-thumbs-up"></i> <span>0</span> 赞
                            </a>


                            <a className="ban"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/ban/5ba4acf1bf578d447ea53385">
                                <i className="fa fa-ban"></i> 举报
                            </a>
                        </div>
                        <div className="reply-box" id="replyBox5ba4acf1bf578d447ea53385"></div>
                    </div>
                </div>
                <div className="comment" id="5ba4accfbf578d447ea53384">
                    <a className="avatar" href="/test" target="_blank">
                        <img src="http://www.gravatar.com/avatar/5b37040e6200edb3c7f409e994076872?size=48" title="admin"
                             alt="admin"/>
                    </a>
                    <div className="content">
                        <a className="author" href="/test" target="_blank">admin</a>
                        <div className="metadata">
                            <span className="date">3个月前</span>
                        </div>
                        <div className="text">

                            <p>评论一条</p>

                        </div>
                        <div className="operations">
                            <a className="like"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/thumbsup/5ba4accfbf578d447ea53384">
                                <i className="fa fa-thumbs-up"></i> <span>0</span> 赞
                            </a>


                            <a className="ban"
                               href="/tblog/topic/5b87dceabf578d115d2357ac/comment/ban/5ba4accfbf578d447ea53384">
                                <i className="fa fa-ban"></i> 举报
                            </a>
                        </div>
                        <div className="reply-box" id="replyBox5ba4accfbf578d447ea53384"></div>
                    </div>
                </div>
                <CommentForm></CommentForm>
            </div>
        );
    }
}


export default Comment