import React from "react";

class PostItem extends React.Component{

    render(){
        return (
            <li className="post-item">
                <div className="entry">
                    <div className="content-box">
                        <div className="info-box">
                            <div className="meta-row">
                                <ul className="meta-list">
                                    <li className="item recommended">置顶</li>
                                    <li className="item username">
                                        <a href="/tblog/pub/user/5b7d59bbbf578d05d7046ef6">admin</a>.
                                        3个月前
                                    </li>
                                    <li className="item category">
                                        <a href="/tblog/?tab=java">
                                            <span className="topiclist-tab">Java</span>
                                        </a>
                                    </li>
                                    <li className="item tag">
                                        <a className="tag" href="/tblog/tag/spring">spring</a>
                                        <a className="tag" href="/tblog/tag/java">java</a>
                                        <a className="tag" href="/tblog/tag/oracle">oracle</a>
                                    </li>
                                    <li className="item">50次阅读</li>
                                </ul>
                            </div>
                            <div className="title-row">
                                <a className="title" href="/detail"
                                   target="_blank">Java 侵权案进入尾声，谷歌不服判决要向最高法院上诉</a>
                            </div>
                            <div className="desc-row">据外媒报道，Google 和 Oracle 长达 8 年的 Java
                                版权之争可能即将结束。今年的3月27日，美国联邦巡回上诉法院裁决 Google 使用 Java 开发 Android 系统的行为侵犯了
                                Oracle 的版权，Google 对此结果不服，申请重新审判。
                            </div>
                            <div className="action-row">
                                <div className="action-list">
                                    <a className="action like" href="javascript:;">
                                        <span className="icon"></span>
                                        <span className="title">1</span>
                                    </a>
                                    <a className="action comment"
                                       href="/tblog/topic/5b87dceabf578d115d2357ac#comment">
                                        <span className="icon"></span>
                                        <span className="title">2评论</span>
                                    </a>
                                    <a className="action collect hover" href="javascript:;">
                                        <span className="icon"></span>
                                        <span className="title">0收藏</span>
                                    </a>
                                    <a className="action share hover" href="javascript:;">
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

export default PostItem