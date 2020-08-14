import React, { Component } from "react";
import Precautions from "./Precautions";
import StateWiseData from "./StateWiseData";
import TotalData from "./TotalData";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator, Platform } from "react-native";
import { fetchTotalData } from "../redux/ActionCreators";
import { createStackNavigator } from "react-navigation";

const Navigator = createStackNavigator({
    TotalData: { screen: ({navigation}) => <TotalData navigation={navigation}/>,
        navigationOptions: {
            title: 'COVID-19 India Tracker'
        } 
    },
    StateWiseData: { screen: ({navigation}) => <StateWiseData navigation={navigation}/>,
        navigationOptions: {
            title: 'StateWiseData',
        }
    },
    Precautions : { screen: ({navigation}) => <Precautions navigation={navigation}/>,
        navigationOptions: {
            title: 'Precautions'
        } 
    }
},
{
    initialRouteName: 'TotalData',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#EC4545",
            marginTop: 0,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff",
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
}
);

const mapDispatchToProps = dispatch => ({
    fetchTotalData: () => dispatch(fetchTotalData())
})

class Main extends Component {

    componentDidMount() {
        console.log('calling fetch :');
        this.props.fetchTotalData();
    }

    render() {
        return(
            <View style={{flex:1 }}>
                <Navigator />
            </View>
        );
    }
}

export default connect(null, mapDispatchToProps)(Main);