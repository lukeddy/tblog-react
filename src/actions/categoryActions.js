import axios from "axios";
import {CATEGORY_FETCHED} from "./types";

export function fetchCategoryList(data) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post("/category/list", data).then(response => {
                if(response.data.status){
                    dispatch({type:CATEGORY_FETCHED,pager:response.data.data});
                }
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}

export function createCategory(data) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post("/category/add", data).then(response => {
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}