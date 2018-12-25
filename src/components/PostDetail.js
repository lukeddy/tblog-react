import React from "react";
import Advertise from "./Advertise";
import './PostDetail.css'
import like from '../assets/ico/like.svg'
import comment from '../assets/ico/comment.svg'
import collect from '../assets/ico/collect.svg'
import share from '../assets/ico/share.svg'
import Comment from "./Comment";

class PostDetail extends React.Component{

    render(){
        return(
            <div className="container main">
                <div className="col-md-9" id="content">
                    <ul className="breadcrumb">
                        <li><a href="/"><i className="glyphicon glyphicon-home"></i>主页</a><span
                            className="divider"></span></li>
                        <li><a href="/tblog/?tab=java">Java</a><span className="divider"></span></li>
                    </ul>
                    <div className="panel">
                        <div className="header topic-header">
                            <h1 className="topic-full-title">Java 侵权案进入尾声，谷歌不服判决要向最高法院上诉</h1>
                            <div className="changes">
                                <span>3个月前</span><span>&nbsp;&nbsp;作者：<a
                                href="/tblog/pub/user/5b7d59bbbf578d05d7046ef6">admin</a></span><span>&nbsp;&nbsp;51次浏览</span>
                            </div>
                        </div>
                        <div className="inner topic">
                            <div className="topic-content">
                                <p>据外媒报道，Google 和 Oracle 长达 8 年的 Java
                                    版权之争可能即将结束。今年的3月27日，美国联邦巡回上诉法院裁决 Google 使用 Java 开发 Android 系统的行为侵犯了 Oracle
                                    的版权，Google 对此结果不服，申请重新审判。8月28日，联邦上诉法院拒绝重新审理此案（PDF），这也意味着 Google 想要避免向 Oracle
                                    支付赔偿金的唯一希望就是上诉到美国最高法院。而之前，Oracle 索取的赔偿金额为 88 亿美元。</p>
                                <p>Google 在周二的判决后表示将继续采取行动，其发言人表示：</p>
                                <p>对于联邦巡回法院推翻陪审团裁定的“Java 对所有人开放和免费”一事，我们感到非常失望。</p>
                                <p>我们呼吁，在面对 Oracle
                                    这样的公司时，最高法院应该捍卫这一原则。该公司的限制性做法，可能会扼杀新一代科技开发者的工作。这是一个会对开发者和数字经济带来广泛影响的重要问题。</p>
                                <p>如果最高法院也拒绝审理案件，那最初的裁决就会生效。下一步将是在北加州美国地方法院（Northern California US District
                                    Court）举行陪审团听证会，以确定 Google 应向 Oracle 支付的赔偿金的具体金额。</p>
                            </div>
                            <div className="topic-tags">
                                <span>标签：</span>
                                <a href="/tblog/tag/spring" className="tag">spring</a>
                                <a href="/tblog/tag/java" className="tag">java</a>
                                <a href="/tblog/tag/oracle" className="tag">oracle</a>
                            </div>
                            <div className="topic-action-wrapper">
                                <div className="topic-actions">
                                    <a href="/tblog/like/add/5b87dceabf578d115d2357ac" className="action-link">
                                        <img src={like} alt=""/>
                                            <span>喜欢</span>
                                    </a>

                                    <a href="#reply" className="action-link">
                                        <img src={comment} alt=""/>
                                            <span>评论</span>
                                    </a>
                                    <a id="collectLink" href="/tblog/collect/add/5b87dceabf578d115d2357ac"
                                       className="action-link" title="收藏">
                                        <img src={collect} alt=""/>
                                    </a>

                                    <a href="javascript:;" className="action-link">
                                        <img src={share} alt=""/>
                                            <span>分享</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Comment></Comment>
                </div>

                <div className="col-md-3">
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default PostDetail