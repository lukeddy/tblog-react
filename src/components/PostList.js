import React from "react";
import PostItem from "./PostItem";

class PostList extends React.Component{
    render(){
        return (
            <ul className="post-list">
                <PostItem></PostItem>
                <PostItem></PostItem>
                <PostItem></PostItem>
            </ul>
        );
    }
}

export default PostList