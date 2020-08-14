import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    loadingView: {
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        textAlign: 'center',
        color: '#D40E39',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export const Loading = () => {
    return(
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color="#D40E39" />
            <Text style={styles.loadingText} >Loading . . .</Text>
        </View>
    );
}