import {USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import api from "../api";

import setAuthorizationHeader from "../utils/setAuthorizationHeader";
import axios from "axios";


export function doLogin(credentials) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            axios.post("/login", credentials).then(response => {
                console.log(response.data);
                if(response.data.status){
                    localStorage.tblogToken =response.data;
                    setAuthorizationHeader(response.data);
                    dispatch({type: USER_LOGGED_IN,token:response.data});
                }
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        });
    }
}

export const login = credentials => dispatch =>

    api.user.login(credentials).then(result => {
        console.log(result.data);
        localStorage.tblogToken =result.data;
        setAuthorizationHeader(result.data);
        dispatch({
            type: USER_LOGGED_IN,
            token:result.data
        });
    });

export const logout = () => dispatch => {
    localStorage.removeItem("tblogToken");
    setAuthorizationHeader();
    dispatch({
        type: USER_LOGGED_OUT
    });
};