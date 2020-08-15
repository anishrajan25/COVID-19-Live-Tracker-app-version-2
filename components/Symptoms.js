import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';


class Symptoms extends Component {

    render() {
        return(
            <ScrollView style={styles.container}>
                <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/fever.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17 , marginBottom: 3}}>Fever or Chills</Text>
                            </View>
                        </View>
                    </Card>
                    </Animatable.View>
                    <Animatable.View animation='slideInLeft' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 2, justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Dry Cough</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/cough.png')} style={ styles.icon } />
                            </View>
                        </View>
                    </Card>
                    </Animatable.View>
                    
                    <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/chest.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Chest Pain or Pressure</Text>

                            </View>
                        </View>
                    </Card>
                </Animatable.View>
                <Animatable.View animation='slideInLeft' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>                            
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Loss of Taste and Smell</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/smell.png')} style={ styles.icon } />
                            </View>
                        </View>
                    </Card>
                </Animatable.View>
                <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/throat.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Sore Throat</Text>

                            </View>
                        </View>
                    </Card>
                </Animatable.View>
                    <Animatable.View animation='slideInLeft' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Shortness of Breath/ Difficulty in Breathing</Text>
                             </View>
                             <View style={{ flex: 1 }}>
                                <Image source={ require('./images/breath.png')} style={ styles.icon } />
                            </View>
                        </View>
                    </Card>
                    </Animatable.View>
                    <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/headache.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Headache or Nausea</Text>

                            </View>
                        </View>
                    </Card>
                </Animatable.View>
                    <Animatable.View animation='slideInLeft' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Muscle Pain or Bodyaches</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/bodyache.png')} style={ styles.icon } />
                            </View>
                        </View>
                    </Card>
                    </Animatable.View>
                    
                <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/fatigue.png')} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Fatigue or Tiredness</Text>
                            </View>
                        </View>
                    </Card>
                    </Animatable.View>
                    <Animatable.View animation='slideInLeft' duration={1000} style={{marginBottom: 10}} >
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17, marginBottom: 3}}>Diarrhea or Vomiting</Text>

                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={ require('./images/diarrhea.png')} style={ styles.icon } />
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
        width: 100,
        height: 100,
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

export default Symptoms;