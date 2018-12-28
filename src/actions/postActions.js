import axios from "axios";

export function fetchPostList(data) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post("/post/list", data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}

export function createPost(data) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post("/post", data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}