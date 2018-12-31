import axios from "axios";


export function getComments(postId) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.get("/comment/public/"+postId).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}