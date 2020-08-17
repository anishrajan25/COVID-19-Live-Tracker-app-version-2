import React, { Component } from "react";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image} from "react-native";
import { Card, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';

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
        //confirmed = parseInt(cases.confirmed);
        //console.log(confirmed)
        return(
            <Animatable.View animation='fadeIn' duration={2000}  style={{flex: 1, justifyContent: "center"}}>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#EA3636', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Confirmed
                        </Text>
                         <Text style={styles.count}>
                            {cases.confirmed}
                        </Text>
                        <Text style={styles.delta}>
                            {'+' + cases.cChanges + ' new cases'}
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
                            {'+' + cases.aChanges + ' new cases'}
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
                            {'+' + cases.rChanges + ' new cases'}
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
                            {'+' + cases.dChanges + ' new cases'}
                        </Text>
                    </View>
                </View>
            </Animatable.View>
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
                <View >
                
                    <RenderCases data={this.props.totalIndia} />

                </View>
                <View style={styles.container}>
                    <Image style={styles.map} source={ require('../covidMap.png')} />
                </View>

                <View style={styles.button, {flex: 2, flexDirection: 'row', marginBottom: 5}}>
                    <Card 
                        containerStyle={{ justifyContent: 'center', backgroundColor: '#3EB6FC', borderRadius: 20, flex:1 }}
                        >
                        <Icon name='info' 
                            type='font-awesome' 
                            size={65}
                            iconStyle={{ color: '#535050' }}
                            onPress={() => navigate('About')}
                            />
                        <Text onPress={() => navigate('About')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>About COVID-19</Text>
                    </Card>
                    <Card 
                        containerStyle={{ justifyContent: 'center', backgroundColor: '#FF9B30', borderRadius: 20, flex: 1 }}
                        >
                        <Icon name='home' 
                            type='font-awesome' 
                            size={65}
                            iconStyle={{ color: '#535050' }}
                            onPress={() => navigate('StateWiseData')}
                            />
                        <Text onPress={() => navigate('StateWiseData')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Statewise Analysis</Text>
                    </Card>    
                </View>
                <View style={styles.button, {flex: 2, flexDirection: 'row', marginBottom: 20}}>
                    <Card 
                        containerStyle={{ justifyContent: 'center', backgroundColor: '#F3DB55', borderRadius: 20 , flex: 1 }}
                        >
                        <Icon name='warning' 
                            type='font-awesome' 
                            size={78}
                            iconStyle={{ color: '#535050' }}
                            onPress={() => navigate('Symptoms')}
                            />
                        <Text onPress={() => navigate('Symptoms')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Symptoms</Text>
                    </Card>
                    <Card 
                        containerStyle={{ justifyContent: 'center', backgroundColor: '#42D291', borderRadius: 20, flex: 1  }}
                        >
                        <Icon name='shield' 
                            type='font-awesome' 
                            size={80}
                            iconStyle={{ color: '#535050' }}
                            onPress={() => navigate('Precautions')}
                            />
                        <Text onPress={() => navigate('Precautions')} style={{padding: 5, color: '#535050', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Precautions</Text>
                    </Card>
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
        margin: 7,
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
        marginBottom: 4
    }
  });

export default connect(mapStateToProps)(TotalData);