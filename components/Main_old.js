import React, { Component } from "react";
import Precautions from "./Precautions";
import StateWiseData from "./StateWiseData";
import TotalData from "./TotalData";
import AboutCovid from './AboutCovid';
import Symptoms from "./Symptoms";
import { connect } from 'react-redux';
import { View, StatusBar } from "react-native";
import { fetchTotalData, fetchStateData, fetchDistrictData, fetchPrecautions, fetchSymptoms, fetchAbout } from "../redux/ActionCreators";
import { createStackNavigator } from "react-navigation";

const Navigator = createStackNavigator({
    TotalData: { screen: ({navigation}) => <TotalData navigation={navigation}/>,
        navigationOptions: {
            title: 'COVID-19 Tracker | India',
            headerTitleStyle: {
                marginLeft: 'auto',
                marginRight: 'auto'
            }
        } 
    },
    StateWiseData: { screen: ({navigation}) => <StateWiseData navigation={navigation}/>,
        navigationOptions: {
            title: 'Statewise Analysis',
        }
    },
    Precautions : { screen: ({navigation}) => <Precautions navigation={navigation}/>,
        navigationOptions: {
            title: 'Precautions'
        } 
    },
    About : { screen: ({navigation}) => <AboutCovid navigation={navigation}/>,
        navigationOptions: {
            title: 'About COVID-19'
        } 
    },
    Symptoms : { screen: ({navigation}) => <Symptoms navigation={navigation}/>,
        navigationOptions: {
            title: 'Symptoms'
        } 
    }
},
{
    initialRouteName: 'TotalData',
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#EC4545",
            marginTop: 0,
           // marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight ,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff",
            textAlign: 'center'
        }
    }
}
);

const mapDispatchToProps = dispatch => ({
    fetchTotalData: () => dispatch(fetchTotalData()),
    fetchStateData: () => dispatch(fetchStateData()),
    fetchDistrictData: () => dispatch(fetchDistrictData()),
    fetchPrecautions: () => dispatch(fetchPrecautions()),
    fetchSymptoms: () => dispatch(fetchSymptoms()),
    fetchAbout: () => dispatch(fetchAbout())
})

class Main extends Component {

    componentDidMount() {
        console.log('calling fetch :');
        this.props.fetchTotalData();
        this.props.fetchStateData();
        this.props.fetchDistrictData();
        this.props.fetchPrecautions();
        this.props.fetchSymptoms();
        this.props.fetchAbout();
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