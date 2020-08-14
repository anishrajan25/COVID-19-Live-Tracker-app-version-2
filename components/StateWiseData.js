import React, { Component } from "react";
import Precautions from "./Precautions";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View,Picker, Image, ActivityIndicator, Platform, Button } from "react-native";
import { fetchTotalData } from "../redux/ActionCreators";
import { Card, icon, Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import NumberFormat from 'react-number-format';

const mapStateToProps = state => {
    return {
      stateData: state.stateData,
      districtData: state.districtData
    }
}

const RenderCases = ({data}) => {

    console.log(data);
    
    if(data != null) {
        //confirmed = parseInt(cases.confirmed);
        //console.log(confirmed)
        return(
            <Animatable.View animation="fadeInUp" duration={2000}>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}} >
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#EA3636', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Confirmed
                        </Text>
                         <Text style={styles.count}>
                            {data.confirmed}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#1F498E', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Active
                        </Text>
                        <Text style={styles.count}>
                            {data.active}
                        </Text>
                    </View>
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center'}}>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#33962C', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Recovered
                        </Text>
                        <Text style={styles.count}>
                            {data.recovered}
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent: "center", borderRadius: 20, backgroundColor: '#6C757D', margin: 5, padding: 8}}>
                        <Text style={styles.statHeading}>
                            Deaths
                        </Text>
                        <Text style={styles.count}>
                            {data.deaths}
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


class StateWiseData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areaId: '',
            area: '',
            isUT: false
        };
    }

    render() {
        
        const {navigate} = this.props.navigation;

        if(this.props.stateData.isLoading) {
            return(
                <Loading />
            );
        }
    
        else if (this.props.stateData.errMess) {
            return(
                <View>
                    <Text>{props.errMess}</Text>
                </View>
            );
        }
        else if(this.props.stateData.stateData)
        return(
            
            <ScrollView>
                <Text style={styles.covid}>Select State/U.T.</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={this.state.areaId}
                    onValueChange={(itemValue, itemIndex) => {this.setState({area: itemValue ? this.props.stateData.stateData.filter((area) => itemValue === area.id)[0].state : '', areaId: itemValue }) }}>
                    <Picker.Item label={'Select State / U.T.'} value={''}/>
                    {
                        this.props.stateData.stateData.map((area) => {
                            return(
                                <Picker.Item label={area.state} value={area.id} />
                            );
                        })
                    }
                </Picker>
                <View>
                
                    <RenderCases data={this.props.stateData.stateData.filter((area) => area.id === this.state.areaId)[0]} />

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
        margin: 40,
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
        margin: 5,
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
    },
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
      },
      formLabel: {
          fontSize: 18,
          flex: 1.3,
          margin: 20
      },
      formItem: {
          marginLeft: 50,
          marginRight: 50,
          marginBottom: 40,
          flex: 1.7,
      }
  });

export default connect(mapStateToProps)(StateWiseData);

/*{
                        this.props.stateData.stateData.map((area) => {
                            return(
                                <Picker.Item label={area.state} value={area.id} />
                            );
                        })
                    }*/