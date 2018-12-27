import React, {Component} from 'react';
import Advertise from "./Advertise";
import Pagination from "./common/Pagination";
import PostList from "./PostList";

class Index extends Component {
    render() {
        return (
            <div className="container main">
                <div className="col-md-9">
                    <div className="panel">
                        <div className="header">
                            <a href="/tblog/?tab=all" className="topic-tab current-tab">全部</a>
                            <a href="/tblog/?tab=java" className="topic-tab">Java</a>
                            <a href="/tblog/?tab=vue" className="topic-tab">Vue</a>
                            <a href="/tblog/?tab=php" className="topic-tab">php</a>
                            <a href="/tblog/?tab=golang" className="topic-tab">golang</a>
                            <a href="/tblog/?tab=nodejs" className="topic-tab">nodejs</a>
                            <a href="/tblog/?tab=good" className="topic-tab">good</a>
                            <a href="/tblog/?tab=nice" className="topic-tab">nice</a>
                            <span className="dropdown">
                            <a href="/" className="dropdown-toggle topic-tab" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">更多 <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=swift" className="topic-tab">swift</a>
                                    </li>

                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=python" className="topic-tab">python</a>
                                    </li>

                                     <li className="topic-tab">
                                        <a href="/tblog/?tab=ruby" className="topic-tab">ruby</a>
                                    </li>
                            </ul>
                    </span>
                        </div>
                        <div className="inner no-padding">
                            <PostList></PostList>
                            <Pagination></Pagination>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <Advertise/>
                </div>
            </div>
        );
    }
}

export default Index;