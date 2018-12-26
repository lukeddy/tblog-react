import axios from "axios";

export default {
    user: {
        login: credentials => axios.post("/login", credentials).then(res => res.data),
        register: user => axios.post("/register", { user }).then(res => res.data),
    },
    posts: {
        fetchPosts: () => axios.get("/post/list").then(res => res.data.posts),
        createPost: post => axios.post("/post/create", { post }).then(res => res.data.post)
    }
};