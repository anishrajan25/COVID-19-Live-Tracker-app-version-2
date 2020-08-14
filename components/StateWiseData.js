import React, { Component } from "react";
import Precautions from "./Precautions";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator, Platform, Button } from "react-native";
import { fetchTotalData } from "../redux/ActionCreators";
import { Card, icon, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import NumberFormat from 'react-number-format';

const mapStateToProps = state => {
    return {
      stateData: state.stateData,
      districtData: state.districtData
    }
}


class StateWiseData extends Component {

    render() {
        
        const {navigate} = this.props.navigation;

        if(this.props.stateData.isLoading) {
            return(
                <Loading />
            );
        }
    
        else if (this.props.stateData.errMess) {
            return(
                <View>
                    <Text>{props.errMess}</Text>
                </View>
            );
        }
        else if(this.props.stateData.stateData)
        return(
            
            <ScrollView style={{backgroundColor: '#FFF4F4', padding: 5}}>
                <Text >
                
                    {JSON.stringify(this.props.stateData.stateData)}

                </Text>
                
                
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF4F4'
    },
    virus: {
        height: 250,
        width: 250,
        marginTop: 20
    },
    map: {
        margin: 30
    },
    covid: {
        backgroundColor: '#F36161',
        margin: 20,
        fontWeight: 'bold',
        borderRadius: 20,
        fontSize: 17,
        padding: 20,
        fontFamily: 'serif',
        color: 'white',
        letterSpacing: 2,
        justifyContent: 'center',
        textAlign: 'center'
    },
    button: {
        borderRadius: 70,
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10

    },
    mapHeading: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        borderRadius: 70,
        backgroundColor: '#FF733B',
        fontWeight: 'bold',
        fontSize: 23,
        padding: 20,
        fontFamily: 'serif',
        color: 'white',
        letterSpacing: 2,
        justifyContent: 'center',
        textAlign: 'center'
    },
    statHeading: {
        
        color: 'white',
        textDecorationLine: 'underline',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    count: {
        margin: 5,
        fontFamily: 'serif',
        color: 'white',
        justifyContent: 'center', 
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    delta: {
        fontFamily: 'serif',
        color: 'white',
        justifyContent: 'center', 
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    }
  });

export default connect(mapStateToProps)(StateWiseData);