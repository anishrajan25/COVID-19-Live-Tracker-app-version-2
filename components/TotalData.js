import React, { Component } from "react";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image} from "react-native";
import { Icon, Button } from "react-native-elements";
import {Card} from 'react-native-shadow-cards';
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
            <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                <Loading />
            </ScrollView>
        );
    }

    else if (cases.errMess) {
        return(
            <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                    <Card style={styles.card} >
                        <Text style={styles.errorText} >{cases.errMess}</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
    else if(cases != null) {
        //confirmed = parseInt(cases.confirmed);
        //console.log(confirmed)
        return(
            <Animatable.View animation='slideInDown' duration={2000}  style={{flex: 1, justifyContent: "center", marginLeft: 20, marginRight: 20}}>

                <Card style={ styles.card }>
                    <Text style={{
                            color: '#FF073A',
                            fontFamily: 'serif',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }} >
                            Confirmed
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#FF073A',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            {cases.confirmed}
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#FF073A',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            { cases.cChanges < 0 ? cases.cChanges + ' cases' : '+' + cases.cChanges + ' cases'}
                    </Text>
                </Card>
                <Card style={ styles.card }>
                    <Text style={{
                            color: '#007BFF',
                            fontFamily: 'serif',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }} >
                            Active
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#007BFF',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            {cases.active}
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#007BFF',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            { cases.aChanges < 0 ? cases.aChanges + ' cases' : '+' + cases.aChanges + ' cases'}
                    </Text>
                </Card>

                <Card style={ styles.card }>
                    <Text style={{
                            color: '#28A745',
                            fontFamily: 'serif',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontSize: 25,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }} >
                            Recovered
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#28A745',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            {cases.recovered}
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#28A745',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            { cases.rChanges < 0 ? cases.rChanges + ' cases' : '+' + cases.rChanges + ' cases'}
                    </Text>
                </Card>
                <Card style={ styles.card }>
                    <Text style={{
                            color: '#6C757D',
                            justifyContent: 'center',
                            textAlign: 'center',
                            fontFamily: 'serif',
                            fontSize: 25,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }} >
                            Deceased
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#6C757D',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            {cases.deaths}
                    </Text>
                    <Text style={{
                            margin: 5,
                            fontFamily: 'serif',
                            color: '#6C757D',
                            justifyContent: 'center', 
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: 'bold',
                            letterSpacing: 0.5
                        }}>
                            { cases.dChanges < 0 ? cases.dChanges + ' cases' : '+' + cases.dChanges + ' cases'}
                    </Text>
                </Card>


                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}} >
                    
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
                <Animatable.Text animation='fadeIn' duration={500} delay={1000} style={styles.mainHeading}>Cases Overview</Animatable.Text>
                <View >
                
                    <RenderCases data={this.props.totalIndia} />

                </View>

                <Card style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 20, elevation: 10}}>
                    <Text style={styles.mapHeading}>Map of confirmed cases per million residents</Text>
                    <Image style={styles.map} source={ require('../899px-India_COVID-19_cases_density_map.svg.png')} />
                </Card>

                <View style={styles.button, {flex: 2, flexDirection: 'row', marginBottom: 5}}>
                
                    <Card 
                        style={{ justifyContent: 'center', margin: 10, backgroundColor: '#2474CA', borderRadius: 25, flex:1, padding: 10, elevation: 10 }}
                        >
                        <Icon name='info' 
                            type='font-awesome' 
                            size={65}
                            iconStyle={{ color: 'white' }}
                            onPress={() => navigate('About')}
                            />
                        <Text onPress={() => navigate('About')} style={{padding: 5, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>About COVID-19</Text>
                    </Card>
                    <Card 
                        style={{ justifyContent: 'center', margin: 10, padding: 10, backgroundColor: '#FF9B30', borderRadius: 25, flex: 1, elevation: 10 }}
                        >
                        <Icon name='home' 
                            type='font-awesome' 
                            size={68}
                            iconStyle={{ color: 'white' }}
                            onPress={() => navigate('StateWiseData')}
                            />
                        <Text onPress={() => navigate('StateWiseData')} style={{padding: 5, color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Statewise Analysis</Text>
                    </Card>    
                </View>
                <View style={styles.button, {flex: 2, flexDirection: 'row', marginBottom: 20}}>
                    <Card 
                        style={{ justifyContent: 'center', margin: 10, padding: 10, backgroundColor: '#CD4040', borderRadius: 25 , flex: 1, elevation: 10 }}
                        >
                        <Icon name='warning' 
                            type='font-awesome' 
                            size={78}
                            iconStyle={{ color: '#ffffff' }}
                            onPress={() => navigate('Symptoms')}
                            />
                        <Text onPress={() => navigate('Symptoms')} style={{padding: 5, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Symptoms</Text>
                    </Card>
                    <Card 
                        style={{ justifyContent: 'center',  margin: 10, padding: 10, backgroundColor: '#46CF6F', borderRadius: 25, flex: 1 , elevation: 10 }}
                        >
                        <Icon name='shield' 
                            type='font-awesome' 
                            size={80}
                            iconStyle={{ color: '#ffffff' }}
                            onPress={() => navigate('Precautions')}
                            />
                        <Text onPress={() => navigate('Precautions')} style={{padding: 5, color: '#ffffff', fontWeight: 'bold', textAlign: 'center', fontSize: 17 }}>Precautions</Text>
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
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        height: 340,
        width: 300
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
        margin: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 0.5,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#325EB9'
    },
    card: {
        padding: 5, 
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        padding: 5,
        elevation: 20,
        width: '90%'
        //backgroundColor: 'black',
        //flex: 1
    },
    mainHeading: {
        fontSize: 30,
        fontWeight:'bold',
        textAlign: 'center',
        letterSpacing: 0.2,
        color: '#FD7E54'
    }
  });

export default connect(mapStateToProps)(TotalData);
/* <Card style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>     3EB6FC
                    <Text style={styles.mapHeading}>Map of confirmed cases</Text>
                    <Image style={styles.map} source={ require('../899px-India_COVID-19_active_cases_map.svg.png')} />
                </Card>
                <Card style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                    <Text style={styles.mapHeading}>Map of active cases</Text>
                    <Image style={styles.map} source={ require('../899px-India_COVID-19_confirmed_cases_map.svg.png')} />
                </Card>
                <Card style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}>
                    <Text style={styles.mapHeading}>Map of deaths due to the pandemic</Text>
                    <Image style={styles.map} source={ require('../899px-India_COVID-19_deaths_map.svg.png')} />
                </Card>
                */