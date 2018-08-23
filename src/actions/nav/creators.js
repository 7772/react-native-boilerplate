import * as actions from '../types';

export const setCurrentTab = (currentTab) => ({
    type: actions.CHANGE_CURRENT_TAB,
    currentTab,
});
