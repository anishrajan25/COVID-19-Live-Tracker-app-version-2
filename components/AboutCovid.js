import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image, Linking } from "react-native";
import * as Animatable from 'react-native-animatable';

export default class AboutCovid extends Component {

    render() {
        return(
            <ScrollView style={{backgroundColor: '#FFF4F4', padding: 5}}>
                <View style={styles.container} >
                    <Animatable.View animation='zoomInDown' duration={4000} >
                        <Animatable.View animation='pulse' iterationCount='infinite' duration={2000} >
                            <Image style={styles.virus} source={ require('./images/covid.png')} />
                        </Animatable.View>
                    </Animatable.View>
                    <Text style={styles.covid}>
                        The COVID-19 pandemic in India is part of the worldwide pandemic of coronavirus
                        disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus
                        2 (SARS-CoV-2). It is an infectious disease caused by a newly discovered coronavirus.
                        The COVID-19 virus spresads primarily through droplets of saliva or discharge from nose
                        when an infected person coughs or sneezes.
                    </Text>
                    <Text style={styles.info}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Coronavirus')}>
                        More information on Coronavirus: Wikipedia
                    </Text>
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
    covid: {
        
        margin: 10,
        borderRadius: 20,
        fontSize: 18,
        padding: 20,
        fontFamily: 'serif',
        color: 'black',
        lineHeight: 30,
        justifyContent: 'center',
    },
    info: {
        backgroundColor: '#F36161',
        margin: 20,
        fontWeight: 'bold',
        borderRadius: 20,
        fontSize: 17,
        padding: 20,
        lineHeight: 20,
        fontFamily: 'serif',
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center'
    }
});