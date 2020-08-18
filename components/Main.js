import React, { Component } from "react";
import Precautions from "./Precautions";
import StateWiseData from "./StateWiseData";
import TotalData from "./TotalData";
import AboutCovid from './AboutCovid';
import Symptoms from "./Symptoms";
import { connect } from 'react-redux';
import { View} from "react-native";
import { fetchTotalData, fetchStateData, fetchDistrictData, fetchPrecautions, fetchSymptoms, fetchAbout, fetchMap } from "../redux/ActionCreators";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

const Navigator = createStackNavigator({
    TotalData: { screen: ({navigation}) => <TotalData navigation={navigation}/>}
},
{
    navigationOptions: ({ navigation }) => ({
        title: 'COVID-19 Tracker | India',
        headerStyle: {
            backgroundColor: "#EC4545",
           // marginTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight ,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: "#fff",
        },
        headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()} 
            />
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: () => <AboutCovid/> },
    },
    {
      navigationOptions: ({ navigation }) => ({
          title: 'About COVID-19',
          headerStyle: {
              backgroundColor: "#EC4545"
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
            style={{paddingLeft: 5}}
            onPress={() => navigation.toggleDrawer()} 
          />
      })
  });

  const StateWiseNavigator = createStackNavigator({
    Statewise: { screen: () => <StateWiseData/> },
    },
    {
      navigationOptions: ({ navigation }) => ({
          title: 'Statewise Analysis',
          headerStyle: {
              backgroundColor: "#EC4545"
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
            style={{paddingLeft: 5}}
            onPress={() => navigation.toggleDrawer()} 
          />
      })
  });

  const SymptomNavigator = createStackNavigator({
    Symptoms: { screen: () => <Symptoms/> },
    },
    {
      navigationOptions: ({ navigation }) => ({
          title: 'Symptoms',
          headerStyle: {
              backgroundColor: "#EC4545"
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
            style={{paddingLeft: 5}}
            onPress={() => navigation.toggleDrawer()} 
          />
      })
  });

  const PrecautionsNavigator = createStackNavigator({
    Precautions: { screen: () => <Precautions/> },
    },
    {
      navigationOptions: ({ navigation }) => ({
          title: 'Precautions',
          headerStyle: {
              backgroundColor: "#EC4545"
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
            style={{paddingLeft: 5}}
            onPress={() => navigation.toggleDrawer()} 
          />
      })
  });

const DrawerNavigator = createDrawerNavigator({
    TotalData: {
        screen:  Navigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: (
                <Icon
                    name="home"
                    type="fontawesome"
                    size={24}
                    color='black' />
            )
        }
    },
    About: {
        screen: AboutNavigator ,
        navigationOptions: {
            title: 'About COVID-19',
            drawerLabel: 'About COVID-19',
            drawerIcon: (
                <Icon
                    name="info"
                    type="fontawesome"
                    size={24}
                    color='black' />
            )
        }
    },
    Statewise: {
        screen:  StateWiseNavigator,
        navigationOptions: {
            title: 'Statewise Analysis',
            drawerLabel: 'Statewise Analysis',
            drawerIcon: (
                <Icon
                    name="city"
                    type="fontawesome"
                    size={24}
                    color='black' />
            )
        }
    },
    Symptoms: {
        screen:  SymptomNavigator,
        navigationOptions: {
            title: 'Symptoms',
            drawerLabel: 'Symptoms',
            drawerIcon: (
                <Icon
                    name="warning"
                    type="fontawesome"
                    size={24}
                    color='black' />
            )
        }
    },
    Precautions: {
        screen:  PrecautionsNavigator,
        navigationOptions: {
            title: 'Precautions',
            drawerLabel: 'Precaution',
            drawerIcon: (
                <Icon
                    name="shield"
                    type="fontawesome"
                    size={24}
                    color='black' />
            )
        }
    }
});

const mapDispatchToProps = dispatch => ({
    fetchTotalData: () => dispatch(fetchTotalData()),
    fetchStateData: () => dispatch(fetchStateData()),
    fetchDistrictData: () => dispatch(fetchDistrictData()),
    fetchPrecautions: () => dispatch(fetchPrecautions()),
    fetchSymptoms: () => dispatch(fetchSymptoms()),
    fetchAbout: () => dispatch(fetchAbout()),
    fetchMap: () => dispatch(fetchMap())
})

class Main extends Component {

    componentDidMount() {
        console.log('calling fetch :');
        this.props.fetchTotalData();
        this.props.fetchMap();
        this.props.fetchStateData();
        this.props.fetchDistrictData();
        this.props.fetchPrecautions();
        this.props.fetchSymptoms();
        this.props.fetchAbout();
    }

    render() {
        return(
            <View style={{flex:1 }}>
                <DrawerNavigator />
            </View>
        );
    }
}

export default connect(null, mapDispatchToProps)(Main);