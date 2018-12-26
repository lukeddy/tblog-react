import {USER_LOGGED_IN, USER_LOGGED_OUT } from "./types";
import api from "../api";

import setAuthorizationHeader from "../utils/setAuthorizationHeader";

export const login = credentials => dispatch =>
    api.user.login(credentials).then(response => {
        console.log(response);
        localStorage.tblogToken = response.data;
        setAuthorizationHeader(response.data);
        dispatch({
            type: USER_LOGGED_IN,
            token:response.data
        });
    });

export const logout = () => dispatch => {
    localStorage.removeItem("tblogToken");
    setAuthorizationHeader();
    dispatch({
        type: USER_LOGGED_OUT
    });
};