import React from 'react';
import  Main from "./components/Main";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store= ConfigureStore();

console.disableYellowBox = true;//rebuild to activate

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
