import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View,Picker, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';

class Precautions extends Component {

    render() {
        return(
            <ScrollView style={styles.container}>
                <Animatable.View animation='slideInUp' duration={1000} estyle={{marginTop: 10, marginBottom: 15}}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={ require('./images/hands.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17 , marginBottom: 3}}>Wash Your Hands Often</Text>
                                <Text>Wash your hands often with soap and water for at least 20 seconds especially after
                                     you have been in a public place, or after blowing your nose, coughing, or sneezing.</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={{ uri:'https://cdn1.iconfinder.com/data/icons/new-normal-after-virus-disease-crisis-3/64/desocializing_social_distance_distancing-512.png'}} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Maintain Social Distancing</Text>
                                <Text>Avoid close contact with people who are sick.
                                    Put 6 feet of distance between yourself and others.
                                    Remember that some people without symptoms may be able to spread virus.</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={ require('./images/mask.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Wear a Mask</Text>
                                <Text>Everyone should wear a mask in public settings and when around people who don’t live
                                     in your household, especially when other social distancing measures are difficult to maintain.</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={ require('./images/cover.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Cover Coughs and Sneezes</Text>
                                <Text>Always cover your mouth and nose with a tissue when you cough or sneeze
                                     or use the inside of your elbow and do not spit.
                                     Throw used tissues in the trash.</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={ require('./images/clean.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Clean and Disinfect</Text>
                                <Text>Clean and disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, 
                                    countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</Text>
                            </View>
                        </View>
                    </Card>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <View style={{ flex: 2 }}>
                                <Image source={ require('./images/monitor.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 5}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Monitor Your Health Daily</Text>
                                <Text>Watch for fever, cough, shortness of breath, or other symptoms of COVID-19.
                                Especially important if you are running essential errands, going into the office or workplace.
                                    Take your temperature if symptoms develop.
                                </Text>

                            </View>
                        </View>
                    </Card>
                </Animatable.View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      backgroundColor: '#FFF4F4'
    },
    icon: {
        width: 150,
        height: 150,
        marginLeft: 'auto', 
        marginRight: 'auto',
    },
    card: {
        padding: 10, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 10, 
        marginBottom: 5 , 
        elevation: 50,
    }
  });

export default Precautions;