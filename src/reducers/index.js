import { 
    applyMiddleware, 
    combineReducers, 
    createStore, 
} from 'redux';

import { CurrentTabReducer } from './nav';

const appReducer = combineReducers({
    CurrentTab: CurrentTabReducer,
});

const logger = ({getState}) => {
    return (next => action => {
        console.log('will dispatch', action);

        const returnValue = next(action);

        console.log('state after dispatch', getState());

        return returnValue;
    });
};

export const store = createStore(
    appReducer,
    undefined,
    applyMiddleware(logger),
);