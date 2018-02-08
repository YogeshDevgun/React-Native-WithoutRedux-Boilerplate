import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import {
    View, Text
} from 'react-native';
import {StackNavigator} from "react-navigation";
import OnBoardingScreen from "./screens/OnBoardingScreen";

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        OnBoard: {
            screen: OnBoardingScreen,
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#26C0EE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default class App extends Component {
    render() {
        return (

                <RootStack/>
        );
    }
}

