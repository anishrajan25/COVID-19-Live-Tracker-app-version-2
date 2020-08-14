import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, ActivityIndicator, Platform } from "react-native";


class Precautions extends Component {

    render() {
        return(
            <View style={styles.container}>
                <Text> Precautions </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF4F4'
    },
  });

export default Precautions;