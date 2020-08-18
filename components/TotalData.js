import React, { Component } from "react";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View, Image} from "react-native";
import {Card} from 'react-native-shadow-cards';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
      totalIndia: state.totalData,
      maps: state.maps
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
            <Animatable.View animation='slideInUp' duration={1000}  style={{flex: 1, justifyContent: "center", marginLeft: 20, marginRight: 20}}>

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

const RenderMaps = ({maps}) => {

    if(maps.isLoading) {
        return(
            <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                <Loading />
            </ScrollView>
        );
    }

    else if (maps.errMess) {
        return(
            <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                    <Card style={styles.card} >
                        <Text style={styles.errorText} >{maps.errMess}</Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }

    else if(maps.maps!= null) {
        return(
            maps.maps.map((item) => {
                return(
                    <Card style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20, marginBottom: 20, elevation: 10}}>
                        <Text style={styles.mapHeading}>{item.heading}</Text>
                        <Image style={styles.map} source={{ uri: item.image }} />
                    </Card>
                );
            })
        );
        
    }
    else {
        return(
            <View><Text>ni ho rha kuch </Text></View>
        );
    }
}

class TotalData extends Component {

    render() {
        
        const {navigate} = this.props.navigation;

        return(
            <ScrollView style={{backgroundColor: '#FFF8F8', padding: 5}}>
                <Animatable.Text animation='fadeIn' duration={500} delay={500} style={styles.mainHeading}>Cases Overview</Animatable.Text>
                <RenderCases data={this.props.totalIndia} />
                <RenderMaps maps={this.props.maps} />
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
        color: '#4B4B4B'
    }
  });

export default connect(mapStateToProps)(TotalData);