import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import {
    View, Text
} from 'react-native';
import {StackNavigator} from "react-navigation";
import OnBoardingScreen from "./screens/OnBoardingScreen";
import Header from "./components/Header"; //Import the component file

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
    }
);

export default class App extends Component {
    render() {
        return (

                <RootStack/>
        );
    }
}

