import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class PostItem extends React.Component{

    render(){

        const {post}=this.props
        console.log(post)

        // author: {id: "5b616fa705bbe40c86a7f804", createAt: null, updateAt: null, createAtFormatted: null, updateAtFormatted: null, …}
        // category: {id: "5c0a4ae2796b0e1c0fc9c026", createAt: "2018-12-07T10:26:42.877+0000", updateAt: "2018-12-07T10:26:42.877+0000", createAtFormatted: "2018-12-07 18:26:42", updateAtFormatted: "2018-12-07 18:26:42", …}
        // collectCount: 0
        // collectedUsers: null
        // contentHTML: "<p>在CentOS7服务器上编译源码安装Node.js<br>在CentOS7服务器上编译源码安装Node.js</p>↵<ol>↵<li>slffdsfhsf</li>↵<li>sdffsfsfsdf</li>↵<li>sdfsfsfsfdsfds</li>↵</ol>↵<table>↵<thead>↵<tr>↵<th>Column 1</th>↵<th>Column 2</th>↵<th>Column 3</th>↵</tr>↵</thead>↵<tbody><tr>↵<td>Text</td>↵<td>Text</td>↵<td>Text</td>↵</tr>↵</tbody></table>↵"
        // contentIsHTML: false
        // contentMD: "在CentOS7服务器上编译源码安装Node.js↵在CentOS7服务器上编译源码安装Node.js↵1. slffdsfhsf↵2. sdffsfsfsdf↵3. sdfsfsfsfdsfds↵↵| Column 1 | Column 2 | Column 3 |↵| -------- | -------- | -------- |↵| Text     | Text     | Text     |↵↵"
        // createAt: "2018-12-30T07:34:07.686+0000"
        // createAtFormatted: "2018-12-30 15:34:07"
        // deleted: false
        // desc: "在CentOS7服务器上编译源码安装Node.js"
        // friendlyTime: "1小时前"
        // good: false
        // id: "5c2874efa0b84708f146bf61"
        // lastReplyAt: null
        // lastReplyId: null
        // likedUsers: null
        // lock: false
        // new: false
        // replyCount: 0
        // tags: (3) ["centos", "ssh", "java"]
        // thumbURL: null
        // title: "在CentOS7服务器上编译源码安装Node.js"
        // top: false
        // updateAt: "2018-12-30T07:34:07.686+0000"
        // updateAtFormatted: "2018-12-30 15:34:07"
        // visitCount: 2

        return (
            <li className="post-item">
                <div className="entry">
                    <div className="content-box">
                        <div className="info-box">
                            <div className="meta-row">
                                <ul className="meta-list">
                                    {post.top &&<li className="item recommended">置顶</li>}
                                    <li className="item username">
                                        <a href="/tblog/pub/user/5b7d59bbbf578d05d7046ef6">{post.author.username}</a>.
                                        {post.friendlyTime}
                                    </li>
                                    <li className="item category">
                                        <a href="/tblog/?tab=java">
                                            <span className="topiclist-tab">{post.category.catName}</span>
                                        </a>
                                    </li>
                                    <li className="item tag">
                                        {post.tags.map((tag,index)=>{
                                            return(<a key={index} className="tag" href="/tblog/tag/spring">{tag}</a>)
                                        })}
                                    </li>
                                    <li className="item">{post.visitCount}次阅读</li>
                                </ul>
                            </div>
                            <div className="title-row">
                                <Link to={'/detail/'+post.id} className="title">
                                    {post.title}
                                </Link>
                            </div>
                            <div className="desc-row">{post.desc}</div>
                            <div className="action-row">
                                <div className="action-list">
                                    <a className="action like" href="/">
                                        <span className="icon"></span>
                                        <span className="title">
                                            {post.likedUsers?post.likedUsers.length:0}
                                        </span>
                                    </a>
                                    <a className="action comment"
                                       href="/tblog/topic/5b87dceabf578d115d2357ac#comment">
                                        <span className="icon"></span>
                                        <span className="title">{post.replyCount}评论</span>
                                    </a>
                                    <a className="action collect hover" href="/">
                                        <span className="icon"></span>
                                        <span className="title">{post.collectCount}收藏</span>
                                    </a>
                                    <a className="action share hover" href="/">
                                        <span className="icon"></span>
                                        <span className="title">分享</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="thumb-box"></div>
                    </div>
                </div>
            </li>
        );
    }
}

PropTypes.propTypes={
    post:PropTypes.object.isRequired
}

export default PostItem