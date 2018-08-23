import React, {Component} from 'react';

import { Provider } from 'react-redux';
import { store, } from './reducers';

import { setCurrentTab, } from './actions/nav/creators';

import RootTabNav from './Router';

class App extends Component {

    // check current active tab using redux
    _getCurrentRouteName(navState) {

        if (navState.hasOwnProperty('index')) {
            const index = navState.index;
            const { key, routeName, } = navState.routes[index]

            const currentTab = {
                index: index,
                key: key,
                routeName: routeName,
            };

            store.dispatch(setCurrentTab(currentTab));
        }
    
    }

    render() {
        return (
            <Provider store={store}>
                <RootTabNav 
                    onNavigationStateChange={(prevState, newState) => {
                        this._getCurrentRouteName(newState)
                    }}
                />
            </Provider>
        );
    }
}

export default App;