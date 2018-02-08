import React, {Component} from 'react';
import {StyleSheet,
    View,
    Text,
    Button} from 'react-native';

export default class OnBoardingScreen extends Component {
    static navigationOptions = {
        title: 'OnBoarding',
    };

    render(){
        return(
            <View>
                <Text>Welcome onBoard</Text>

                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        )
    }
}