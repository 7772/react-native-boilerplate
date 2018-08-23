import * as actions from '../actions/types';

const initialState = {
    index: 0,
    key: 'Home',
    routeName: 'Home',
};

export const CurrentTabReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.CHANGE_CURRENT_TAB:
            return action.currentTab;
    
        default:
            return state;
    }
};