import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image, Linking } from "react-native";
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';
import { Icon } from "react-native-elements";
import Loading from "./LoadingComponent";

const mapStateToProps = state => {
    return {
      symptoms: state.symptoms
    }
}

class Symptoms extends Component {

    render() {

        if(this.props.symptoms.isLoading) {
            return(
                <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                    <Loading />
                </ScrollView>
            );
        }

        else if (this.props.symptoms.errMess) {
            return(
                <ScrollView style={{backgroundColor: '#FFF8F8'}}>
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
                <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                    {
                        this.props.symptoms.symptoms.map((item) => {
                            if(item.id%2===0) {
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
                        })
                    }
                    <Card style={styles.linkCard}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon
                                style={{flex: 1}}
                                name= {"globe"}
                                type="font-awesome"
                                color="#1668BD"
                                raised
                                onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}
                            />
                            <Text style={styles.linkInfo}
                                onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}>
                                Learn more on who.int
                            </Text>
                        </View>
                    </Card>
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
        padding: 15, 
        marginLeft: 'auto', 
        marginRight: 'auto', 
        marginTop: 10, 
        marginBottom: 10 , 
        elevation: 15,
    },
    linkCard: {
        marginLeft: 'auto', 
        marginRight: 'auto', 
        padding: 5,
        marginTop: 10, 
        marginBottom: 20, 
        elevation: 12,

    },
    linkInfo: {
        flex: 2,
        fontWeight: 'bold',
        fontSize: 17,
        color: '#1668BD',
        fontFamily: 'serif',
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        backgroundColor: 'transparent'
    }
  });

export default connect(mapStateToProps)(Symptoms);