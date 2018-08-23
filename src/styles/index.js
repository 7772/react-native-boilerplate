import { StyleSheet, } from 'react-native';

const SharedStyles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: 1,
    },    
});

const HomeStyles = StyleSheet.create({
    mainText: {
        alignSelf: 'center',
    },
}); 

const ProfileStyles = StyleSheet.create({
    mainText: {
        alignSelf: 'center',
        fontSize: 20,
    },
}); 

export {
    SharedStyles,
    HomeStyles,
    ProfileStyles,
};