import React, { Component } from "react";
import Precautions from "./Precautions";
import StateWiseData from "./StateWiseData";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator, Platform, Button } from "react-native";
import { fetchTotalData } from "../redux/ActionCreators";
import { Card, icon, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import NumberFormat from 'react-number-format';

const mapStateToProps = state => {
    return {
      totalIndia: state.totalData
    }
}

const RenderCases = ({data}) => {

    const cases = data.totalData;

    if(data.isLoading) {
        return(
            <Loading />
        );
    }

    else if (cases.errMess) {
        return(
            <View>
                <Text>{props.errMess}</Text>
            </View>
        );
    }
    else if(cases != null) {
        confirmed = parseInt(cases.confirmed);
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#EA3636', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Confirmed
                        </Text>
                         <Text style={styles.count}>
                            {cases.confirmed}
                        </Text>
                        <Text style={styles.delta}>
                            {'+' + cases.cChanges}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#1F498E', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Active
                        </Text>
                        <Text style={styles.count}>
                            {cases.active}
                        </Text>
                        <Text style={styles.delta}>
                            {'+' + cases.aChanges}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#33962C', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Recovered
                        </Text>
                        <Text style={styles.count}>
                            {cases.recovered}
                        </Text>
                        <Text style={styles.delta}>
                            {'+' + cases.rChanges}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#6C757D', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Deaths
                        </Text>
                        <Text style={styles.count}>
                            {cases.deaths}
                        </Text>
                        <Text style={styles.delta}>
                            {'+' + cases.dChanges}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
    else{
        return(<View></View>)
    }
}

class TotalData extends Component {

    render() {
        
        const {navigate} = this.props.navigation;

        return(
            <ScrollView style={{backgroundColor: '#FFF4F4', padding: 5}}>
                <View style={styles.container}>
                    <Animatable.View animation='zoomInDown' duration={4000} >
                        <Animatable.View animation='pulse' iterationCount='infinite' duration={3000} delay={4000} >
                            <Image style={styles.virus} source={ require('../covid.png')} />
                        </Animatable.View>
                    </Animatable.View>
                    <Text style={styles.covid}>
                        The COVID-19 pandemic in India is part of the worldwide pandemic of coronavirus
                        disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus
                        2 (SARS-CoV-2).
                    </Text>
                </View>
                <View>
                    <Text style={styles.mapHeading}>
                        Cases Overview
                    </Text>
                </View>
                <View style={styles.container}>
                    <Image style={styles.map} source={ require('../covidMap.png')} />
                </View>
                <View >
                
                <RenderCases data={this.props.totalIndia} />

                </View>
                <View style={styles.button, {flex: 2, flexDirection: 'row', marginBottom: 10}}>
                    <View style={{ flex: 1}}>
                        <Card 
                            containerStyle={{ justifyContent: 'center', backgroundColor: '#F3DB55', borderRadius: 100 }}
                            >
                            <Icon name='home' 
                                type='font-awesome' 
                                size={90}
                                iconStyle={{ color: '#535050' }}
                                onPress={() => navigate('StateWiseData')}
                                />
                            <Text onPress={() => navigate('StateWiseData')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Statewise</Text>
                        </Card>
                    </View>
                    <View style={{ flex: 1 }} >
                        <Card 
                            containerStyle={{ justifyContent: 'center', backgroundColor: '#42D291', borderRadius: 100 }}
                            >
                            <Icon name='shield' 
                                type='font-awesome' 
                                size={89}
                                iconStyle={{ color: '#535050' }}
                                onPress={() => navigate('Precautions')}
                                />
                            <Text onPress={() => navigate('Precautions')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Precautions</Text>
                        </Card>
                    </View>
                </View>
                
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

export default connect(mapStateToProps)(TotalData);