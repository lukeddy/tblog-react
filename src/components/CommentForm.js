import React from "react";

class CommentForm extends React.Component{
    render(){
        return(
            <div id="comment-form" className="row comment-form">
                <form action="/addComment" method="post" className="form-vertical">
                    <fieldset>
                        <div className="form-group">
                            <label>评论</label>
                            <textarea className="form-control" placeholder="不要吝啬您的评论，您的一言将帮助千万网友" rows={6} cols={3}></textarea>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="itemId" value="5b87dceabf578d115d2357ac"/>
                            <input type="hidden" name="authorId" value="5b7d59bbbf578d05d7046ef6"/>
                            <button type="submit" className="btn btn-success pull-right">发表评论</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default CommentForm