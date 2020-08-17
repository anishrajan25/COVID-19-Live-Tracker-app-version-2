import React, { Component } from "react";
import { StyleSheet, ScrollView, FlatList, Text, View, Image, Linking } from "react-native";
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';
import { Icon } from "react-native-elements";

const mapStateToProps = state => {
    return {
      precautions: state.precautions
    }
}

class Precautions extends Component {

    renderPrecautionItem = ({item, index}) => {
        return(
            <Card style={ styles.card }>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{ flex: 2 }}>
                        <Image source={{ uri : item.image }} style={ styles.icon } />
                    </View>
                    <View style={{flex: 5}}>
                        <Text style={{ fontWeight: 'bold' , textAlign: "center", fontSize: 17 , marginBottom: 3}}>{item.name}</Text>
                        <Text style>{item.description}</Text>
                    </View>
                </View>
            </Card>
        );
    }

    render() {

        if(this.props.precautions.isLoading) {
            return(
                <ScrollView>
                    <Loading />
                </ScrollView>
            );
        }

        else if (this.props.precautions.errMess) {
            return(
                <ScrollView>
                    <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                        <Card style={styles.card} >
                            <Text style={styles.errorText} >{this.props.precautions.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else if(this.props.precautions.precautions !== null) {
            return(
                <ScrollView>
                    <Animatable.View animation='slideInUp' duration={1000}>
                        <FlatList
                            style={{backgroundColor: 'white' }}
                            data={this.props.precautions.precautions}
                            renderItem={this.renderPrecautionItem}
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
                                    Learn more on who.int
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
        marginBottom: 8 , 
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

export default connect(mapStateToProps)(Precautions);