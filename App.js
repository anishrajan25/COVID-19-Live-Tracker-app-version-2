import { StatusBar } from 'expo-status-bar';
import React from 'react';
import  Main from "./components/Main";
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store= ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
