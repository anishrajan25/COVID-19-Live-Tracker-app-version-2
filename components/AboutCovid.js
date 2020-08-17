import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image, Linking } from "react-native";
import * as Animatable from 'react-native-animatable';
import { Icon } from "react-native-elements";
import { connect } from 'react-redux';
import {Card} from 'react-native-shadow-cards';

const mapStateToProps = state => {
    return {
      about: state.about
    }
}

class AboutCovid extends Component {

    render() {

        if(this.props.about.isLoading) {
            return(
                <ScrollView  style={{backgroundColor: '#FFF8F8'}}>
                    <Loading />
                </ScrollView>
            );
        }

        else if (this.props.about.errMess) {
            return(
                <ScrollView  style={{backgroundColor: '#FFF8F8'}}>
                    <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                        <Card style={styles.card} >
                            <Text style={styles.errorText} >{this.props.about.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else if(this.props.about.about !== null) {
            return(
                <ScrollView style={{backgroundColor: '#FFF9F9', padding: 5}}>
                    {
                        this.props.about.about.map((item) => {
                            if(item.info == null) {
                                return(
                                    <Animatable.View animation='zoomInDown' duration={4000} >
                                        <Animatable.View animation='pulse' iterationCount='infinite' duration={2000} >
                                            <Image style={styles.virus} source={{uri: item.image }} />
                                        </Animatable.View>
                                    </Animatable.View>
                                );
                            }
                            else {
                                return(
                                    <Animatable.View>
                                        <Text style={styles.heading}>{item.heading}</Text>
                                        <Text style={styles.info}>{item.info}</Text>
                                    </Animatable.View>
                                ); 
                            }
                        })
                    }
                    <Card style={styles.linkCard}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon
                                style={{flex: 1, 
                                    backgroundColor: 'transparent'}}
                                name= {"globe"}
                                type="font-awesome"
                                color="#1668BD"
                                raised
                                reverse
                                onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}
                            />
                            <Text style={styles.linkInfo}
                                onPress={() => Linking.openURL('https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public')}>
                                Learn more on who.int
                            </Text>
                        </View>
                    </Card>
                    <Card style={styles.linkCard}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Icon
                                style={{flex: 1, 
                                    backgroundColor: 'transparent'}}
                                name= {"link"}
                                type="font-awesome"
                                color="#1668BD"
                                raised
                                reverse
                                onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Coronavirus')}
                            />
                            <Text style={styles.linkInfo}
                                onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Coronavirus')}>
                                Learn more about Coronavirus on wikipedia.com
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
      alignItems: 'center',
      justifyContent: 'center',
    },
    virus: {
        height: 250,
        width: 250,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    heading: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 25,
    },
    info: {
        borderRadius: 20,
        fontSize: 17,
        padding: 20,
        paddingTop: 15,
        marginBottom: 30,
        fontFamily: 'serif',
        color: 'black',
        lineHeight: 25,
        justifyContent: 'center',
    },
    linkCard: {
        marginLeft: 'auto', 
        marginRight: 'auto', 
        padding: 5,
        marginTop: 10, 
        marginBottom: 20, 
        elevation: 18,

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
    }
});

export default connect(mapStateToProps)(AboutCovid);