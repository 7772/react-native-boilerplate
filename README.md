# React Native Boilerplate
React Native Boilerplate using react-navigation and redux.

If you want to use redux-persist, Please check 'persist' branch.

---

## Getting Started
1. Ensure that you've followed the [React Native Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)

2. Clone this Project
```
  $ git clone https://github.com/7772/react-native-boilerplate.git
```

3. Install npm packages in root directory
```
  $ npm install
```

4. Start App using simulator(ios) or emulator(android)
```
  $ react-native run-ios
  // or
  $ react-native run-android
```

## Stack
- [React Native](https://facebook.github.io/react-native/) for making App using javascript
- [React Navigation](https://reactnavigation.org/) Navigation in React Native
- [Redux](https://redux.js.org/) a predictable state container for Javascript apps

## Directory Structure
- `/android` - Android native code
- `/ios` - iOS native code
- `/src` - React Native App codebase
  - `/actions` - Action Types and Action Creators
  - `/assets` - Images, Fonts and others
  - `/components` - Dumb components
  - `/containers` - Smart components
  - `/reducers` - Reducers and Store
  - `/utils` - Helpers
  - `/App.js` - Base component
  - `/Router.js` - App navigation

## What can do using /reduces/nav.js ?
I created CurrentTabReducer that checks where is the current active tab in nav.js. You can see logs whenever occurs click event from tab.






