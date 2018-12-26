import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token:null
};

export default (state = initialState, action = {})=> {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                isAuthenticated:action.token!=null,
                token:action.token
            };
        case USER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}