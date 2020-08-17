import React, { Component } from "react";
import { StyleSheet, ScrollView, FlatList, Text, View, Image, Linking } from "react-native";
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';
import { Icon } from "react-native-elements";

const mapStateToProps = state => {
    return {
      symptoms: state.symptoms
    }
}

class Symptoms extends Component {

    renderSymptomItem = ({item, index}) => {
        if(index%2===0) {
            return(
                <Animatable.View animation='slideInRight' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: item.image }} style={ styles.icon } />
                            </View>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17 , marginBottom: 3}}>{item.name}</Text>
                            </View>
                        </View>
                    </Card>
                </Animatable.View>
            );
        }
        else {
            return(
                <Animatable.View animation='slideInLeft' duration={1000}>
                    <Card style={ styles.card }>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <View style={{flex: 2, justifyContent: 'center'}}>
                                <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17 , marginBottom: 3}}>{item.name}</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Image source={{ uri: item.image }} style={ styles.icon } />
                            </View>
                        </View>
                    </Card>
                </Animatable.View>
            );
        }
    }

    render() {

        if(this.props.symptoms.isLoading) {
            return(
                <ScrollView>
                    <Loading />
                </ScrollView>
            );
        }

        else if (this.props.symptoms.errMess) {
            return(
                <ScrollView>
                    <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                        <Card style={styles.card} >
                            <Text style={styles.errorText} >{this.props.symptoms.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else if(this.props.symptoms.symptoms !== null) {
            return(
                <ScrollView>
                    <Animatable.View animation='slideInUp' duration={1000}>
                        <FlatList
                            style={{backgroundColor: 'white' }}
                            data={this.props.symptoms.symptoms}
                            renderItem={this.renderSymptomItem}
                            keyExtractor={item => item.id.toString()}
                        />
                        <Card style={ { margin: 10 }, styles.card}>
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <Icon
                                    style={{flex: 1}}
                                    name= {"globe"}
                                    type="font-awesome"
                                    color="#1668BD"
                                    raised
                                    onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}
                                />
                                <Text style={styles.info}
                                    onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}>
                                    Learn More on who.int
                                </Text>
                            </View>
                        </Card>
                        
                    </Animatable.View>
                </ScrollView>
            );
        }
        else {
            return(
                <View></View>
            );
        }

        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorText: {
        margin: 'auto',
        color: 'red',
        textAlign: 'center',
        fontSize: 20
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
    },
    info: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 17,
        lineHeight: 20,
        color: '#1668BD',
        fontFamily: 'serif',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
  });

export default connect(mapStateToProps)(Symptoms);

/*render() {
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
    */