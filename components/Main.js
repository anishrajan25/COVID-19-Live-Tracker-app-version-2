import React, { Component } from "react";
import Precautions from "./Precautions";
import StateWiseData from "./StateWiseData";
import TotalData from "./TotalData";
import AboutCovid from './AboutCovid';
import Symptoms from "./Symptoms";
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView, Image, Text, Platform } from "react-native";
import { fetchTotalData, fetchStateData, fetchDistrictData, fetchPrecautions, fetchSymptoms, fetchAbout, fetchMap } from "../redux/ActionCreators";
import { createStackNavigator, DrawerItems, SafeAreaView , createDrawerNavigator } from "react-navigation";
import { Icon } from "react-native-elements";

const Navigator = createStackNavigator({
    TotalData: { screen: ({navigation}) => <TotalData navigation={navigation}/>}
},
{
    navigationOptions: ({ navigation }) => ({
        title: 'COVID-19 Tracker | India',
        headerStyle: {
            backgroundColor: "#EC4545",
            paddingLeft: 10,
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
              backgroundColor: "#EC4545",
              paddingLeft: 10,
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
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
              backgroundColor: "#EC4545",
              paddingLeft: 10,
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
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
              backgroundColor: "#EC4545",
              paddingLeft: 10,
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
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
              backgroundColor: "#EC4545",
              paddingLeft: 10
          },
          headerTintColor: '#fff', // for icons
          headerTitleStyle: {
              color: "#fff"            
          },
          headerLeft: <Icon name='menu' size={24}
            color='white'
            onPress={() => navigation.toggleDrawer()} 
          />
      })
  });


const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={{flex: 1}}
        //force inset top always means this side drawer will be displayed on top
        //even covering status bar on top
        forceInset={{top: 'always', horizontal: 'never'}}>
            <View style={styles.drawerHeader}>
            <View style={{flex: 1}}>
                <Image source={require('../socialdistancing.png')}
                style={styles.drawerImage} />
            </View>
            <View style={{flex: 2}} //this will allow it to occupy 2X space as compared to upper view
            >
                <Text style={styles.drawerHeaderText}>Let's Fight Corona Together</Text>
            </View>
            </View>
            <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);  


const DrawerNavigator = createDrawerNavigator({
    TotalData: {
        screen:  Navigator,
        navigationOptions: {
            title: 'Home',
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="home"
                    type="fontawesome"
                    size={25}
                    color={tintColor} />
            )
        }
    },
    About: {
        screen: AboutNavigator ,
        navigationOptions: {
            title: 'About COVID-19',
            drawerLabel: 'About COVID-19',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="info"
                    type="fontawesome"
                    size={24}
                    color={tintColor} />
            )
        }
    },
    Statewise: {
        screen:  StateWiseNavigator,
        navigationOptions: {
            title: 'Statewise Analysis',
            drawerLabel: 'Statewise Analysis',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="search"
                    type="fontawesome"
                    size={24}
                    color={tintColor} />
            )
        }
    },
    Symptoms: {
        screen:  SymptomNavigator,
        navigationOptions: {
            title: 'Symptoms',
            drawerLabel: 'Symptoms',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="warning"
                    type="fontawesome"
                    size={24}
                    color={tintColor} />
            )
        }
    },
    Precautions: {
        screen:  PrecautionsNavigator,
        navigationOptions: {
            title: 'Precautions',
            drawerLabel: 'Precautions',
            drawerIcon: ({ tintColor }) => (
                <Icon
                    name="check-circle"
                    type="fontawesome"
                    size={24}
                    color={tintColor} />
            )
        }
    }
},
{
    drawerBackgroundColor: '#FFF8F8',
    contentComponent: CustomDrawerContentComponent,
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

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    drawerHeader: {
      backgroundColor: '#EC4545',
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row'
    },
    drawerHeaderText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    drawerImage: {
      margin: 10,
      width: 80,
      height: 60
    }
});

export default connect(null, mapDispatchToProps)(Main);