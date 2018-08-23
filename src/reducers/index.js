import { 
    applyMiddleware, 
    combineReducers, 
    createStore, 
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { CurrentTabReducer } from './nav';

const persistConfig = {
    key: 'root',
    storage,
};

const appReducer = combineReducers({
    CurrentTab: CurrentTabReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

const logger = ({getState}) => {
    return (next => action => {
        console.log('will dispatch', action);

        const returnValue = next(action);

        console.log('state after dispatch', getState());

        return returnValue;
    });
};

export const store = createStore(
    persistedReducer,
    undefined,
    applyMiddleware(logger),
);

export const persistor = persistStore(store);