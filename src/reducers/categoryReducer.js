import {CATEGORY_FETCHED} from '../actions/types';

const initialState = {
    pager: {},
};

export default (state = initialState, action = {})=> {
    switch (action.type) {
        case CATEGORY_FETCHED:
            return {
                ...state,
                pager:action.pager
            };

        default:
            return state;
    }
}