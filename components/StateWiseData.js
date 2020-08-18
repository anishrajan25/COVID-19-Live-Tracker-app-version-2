import React, { Component } from "react";
import {Loading} from "./LoadingComponent";
import { connect } from 'react-redux';
import { StyleSheet, Image, ScrollView, Text, View,Picker} from "react-native";
import * as Animatable from 'react-native-animatable';
import {Card} from 'react-native-shadow-cards';

const mapStateToProps = state => {
    return {
      stateData: state.stateData,
      districtData: state.districtData
    }
}



class RenderDistrictCases extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: false,
            first: "slideInUp"
        }
    }

    componentWillReceiveProps(){
        this.setState({
            animation:true,
        });
    }

    render() {
        
    const data=this.props.distData;
    
    //var animate=this.props.animation;
    //console.log("showind dist : ",data);
    
    if(data != null) {
        //confirmed = parseInt(cases.confirmed);
        //console.log(confirmed)
        var confirmed = data.total.confirmed ? data.total.confirmed : 0;
        var deceased = data.total.deceased ? data.total.deceased : 0;
        var recovered = data.total.recovered ? data.total.recovered : 0;
        var tested = data.total.tested ? data.total.tested : 0;
        var active = confirmed - deceased - recovered;
        return(
            <View style={{paddingBottom: 30, flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            
            <Animatable.View animation={this.state.animation ? this.state.first : ""} onAnimationEnd={() => this.setState({animation: false, first: ""})} style={{flex: 1, flexDirection: 'column'}} duration={1500} >
                    <Card style={ styles.card }>
                        <Animatable.Text style={{
        
                                color: '#FF073A',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: 25,
                                fontWeight: 'bold',
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} onAnimationEnd={() => this.setState({animation: false})}>
                                Confirmed
                        </Animatable.Text>
                        <Animatable.Text style={{
                                margin: 5,
                                fontFamily: 'serif',
                                color: '#FF073A',
                                justifyContent: 'center', 
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                {confirmed}
                        </Animatable.Text>
                    </Card>
                    <Card style={ styles.card }>
                            <Animatable.Text style={{
        
                                    color: '#007BFF',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                Active
                            </Animatable.Text>
                            <Animatable.Text style={{
                                margin: 5,
                                color: '#007BFF',
                                fontFamily: 'serif',
                                justifyContent: 'center', 
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                {active}
                            </Animatable.Text>
                    </Card>
                    
            </Animatable.View>
            <Animatable.View animation={this.state.animation ? this.state.first : ""} style={{flex: 1, flexDirection: 'column'}} duration={1500} >
                <Card style={ styles.card }>
                    <Animatable.Text style={{

                        color: '#28A745',
                        justifyContent: 'center',
                        textAlign: 'center',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                        Recovered
                    </Animatable.Text>
                    <Animatable.Text style={{
                                margin: 5,
                                fontFamily: 'serif',
                                color: '#28A745',
                                justifyContent: 'center', 
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                        {recovered}
                    </Animatable.Text>
                </Card>
                <Card style={ styles.card }>
                             <Animatable.Text style={{
        
                                    color: '#6C757D',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                Deceased
                            </Animatable.Text>
                            <Animatable.Text style={{
                                margin: 5,
                                fontFamily: 'serif',
                                color: '#6C757D',
                                justifyContent: 'center', 
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold',
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                {deceased}
                            </Animatable.Text>
                    </Card>
            </Animatable.View>

            

            </View>
        );
    }
    else{
        return(<View></View>)
    }
}
}



class RenderStateCases extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animation: false,
            first: "slideInUp",
            districtId: '',
            district: null,
            animate: false
        }
    }

    componentWillReceiveProps(){
        this.setState({
            animation:true,
            district: ''
        });
    
    }

    render() {
        
        const data=this.props.data;
        //var animate=this.props.animation;
        //console.log(data);
        
        if(data != null) {
            
            var st ='';
            if(this.props.areaId === "IN-LK")
                st='LA';
            else if(this.props.areaId === 'IN-DD' )
                st = 'DN';
            else if(this.props.areaId === 'IN-LD' )
                st = '';
            else
                st = this.props.areaId.slice(3);
            
            //console.log("st val: ", st);
            const districts = [];
            //console.log("data arr: ", JSON.stringify(this.props.districts.districtData[st]));
            if(st!== '') {
                for( dist in (this.props.districts.districtData[st].districts)) {
                    if(dist !== 'Unknown' && dist!==data.state ){
                        districts.push(dist);
                    }
                }
            }
            
            const updatedDistrict = this.state.district;
            //console.log(districts);
            //console.log(" showing dist data" ,this.props.districts.districtData[st].districts[this.state.district]);
            //console.log(st, " " , updatedDistrict);
            //console.log("outer log", JSON.stringify(this.props.districts.districtData[st].districtData[updatedDistrict]));
            //confirmed = parseInt(cases.confirmed);
            //console.log(confirmed)
            return(
                <ScrollView>
                    <View style={{paddingBottom: 30, flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    
                    <Animatable.View animation={this.state.animation ? this.state.first : ""} onAnimationEnd={() => this.setState({animation: false, first: ""})} style={{flex: 1, flexDirection: 'column'}} duration={1500} >
                            <Card style={ styles.card }>
                                <Animatable.Text style={{
                
                                        color: '#FF073A',
                                        fontFamily: 'serif',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        letterSpacing: 0.2
                                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} onAnimationEnd={() => this.setState({animation: false})}>
                                        Confirmed
                                </Animatable.Text>
                                <Animatable.Text style={{
                                        margin: 5,
                                        fontFamily: 'serif',
                                        color: '#FF073A',
                                        justifyContent: 'center', 
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                        {data.confirmed}
                                </Animatable.Text>
                            </Card>
                            <Card style={ styles.card }>
                                    <Animatable.Text style={{
                
                                            color: '#007BFF',
                                            fontFamily: 'serif',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            fontSize: 22,
                                            fontWeight: 'bold',
                                            letterSpacing: 0.2,
                                        }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                        Active
                                    </Animatable.Text>
                                    <Animatable.Text style={{
                                        margin: 5,
                                        color: '#007BFF',
                                        fontFamily: 'serif',
                                        justifyContent: 'center', 
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000} >
                                        {data.active}
                                    </Animatable.Text>
                            </Card>
                            
                    </Animatable.View>
                    <Animatable.View animation={this.state.animation ? this.state.first : ""} style={{flex: 1, flexDirection: 'column'}} duration={1500} >
                        <Card style={ styles.card }>
                            <Animatable.Text style={{

                                color: '#28A745',
                                fontFamily: 'serif',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize: 22,
                                fontWeight: 'bold',
                                letterSpacing: 0.2
                            }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                Recovered
                            </Animatable.Text>
                            <Animatable.Text style={{
                                        margin: 5,
                                        fontFamily: 'serif',
                                        color: '#28A745',
                                        justifyContent: 'center', 
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                {data.recovered}
                            </Animatable.Text>
                        </Card>
                        <Card style={ styles.card }>
                                <Animatable.Text style={{
            
                                        color: '#6C757D',
                                        fontFamily: 'serif',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        letterSpacing: 0.2
                                    }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                    Deceased
                                </Animatable.Text>
                                <Animatable.Text style={{
                                    margin: 5,
                                    fontFamily: 'serif',
                                    color: '#6C757D',
                                    justifyContent: 'center', 
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }} animation={this.state.animation ? "fadeIn" : ""} duration={1000}>
                                    {data.deaths}
                                </Animatable.Text>
                            </Card>
                    </Animatable.View>
                    </View>
                    <Animatable.View animation='fadeIn' duration={1000} delay={500} style={{flex: 1}}>
                                
                        <Text style={styles.covid}>{this.state.district ? this.state.district : 'Select District'}</Text>
                        <Picker
                            style={styles.formItem}
                            selectedValue={this.state.district}
                            onValueChange={(itemValue, itemIndex) => {this.setState({district: itemValue})}}>
                            <Picker.Item label={'Select District'} value={''}/>
                            {
                                districts.map((dist) => {
                                    return(
                                        <Picker.Item label={dist} value={dist} />
                                    );
                                })
                            }
                        </Picker>
                        <View>
                            <RenderDistrictCases distData={st ? this.props.districts.districtData[st].districts[this.state.district] : null} />
                        </View>
                    </Animatable.View>

                </ScrollView>

            );
        }
        else{
            return(<View></View>)
        }
    }
}



class StateWiseData extends Component {

    constructor(props) {
        super(props);

        this.state = {
            areaId: '',
            area: null,
            animate: false
        };
    }

    render() {

        if(this.props.stateData.isLoading) {
            return(
                <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                    <Loading />
                </ScrollView>
            );
        }
    
        else if (this.props.stateData.errMess) {
            return(
                <ScrollView style={{backgroundColor: '#FFF8F8'}}>
                    <Animatable.View style={styles.container} animation='fadeIn' duration={1000}>
                        <Card style={styles.card} >
                            <Text style={styles.errorText} >{this.props.stateData.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            );
        }
        else if(this.props.stateData.stateData) {
            return(
                <ScrollView style={{backgroundColor: 'white'}}>
                    <Text style={styles.covid}>{this.state.area ? this.state.area.state : 'Select State/ U.T.'}</Text>
                    <Picker
                        style={styles.formItem}
                        selectedValue={this.state.areaId}
                        onValueChange={(itemValue, itemIndex) => {this.setState({area: itemValue ? this.props.stateData.stateData.filter((area) => itemValue === area.id)[0] : '', areaId: itemValue }) }}>
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
                        <RenderStateCases areaId={this.state.areaId} districts={this.props.districtData} data={this.state.area} />
                    </View>
                </ScrollView>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF4F4'
    },
    map: {
        margin: 30
    },
    covid: {
        backgroundColor: '#F36161',
        margin: 40,
        fontWeight: 'bold',
        borderRadius: 50,
        fontSize: 17,
        padding: 20,
        fontFamily: 'serif',
        color: 'white',
        letterSpacing: 2,
        justifyContent: 'center',
        textAlign: 'center'
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
          flex: 1.7,
          //color: 'white'
      },
      card: {
        padding: 10, 
        justifyContent: 'center',
        margin: 10, 
        elevation: 20,
        width: '90%'
        //backgroundColor: 'black',
        //flex: 1
    }
  });

export default connect(mapStateToProps)(StateWiseData);
