import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    Button,
    ActivityIndicator
} from 'react-native';
import Header from "../components/Header";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home',
    };

    render() {
       return(
          <View>
              <Header />
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text>Home Screen</Text>
              </View>
              <Button
                  title="Welcome Onboard"
                  onPress={() => this.props.navigation.navigate('OnBoard')}
              />
          </View>
       )
    }
};



var styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});