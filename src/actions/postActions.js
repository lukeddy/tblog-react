import {POST_CREATED, POST_FETCHED} from "./types";
import api from "../api";

export const fetchPosts = () => dispatch =>
    api.posts.fetchPosts().then(posts=>dispatch({type:POST_FETCHED,posts}));


export const createPost = data => dispatch =>
    api.posts.createPost(data).then(post=>dispatch({type:POST_CREATED,post}));