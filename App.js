import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen"

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Login" component={Login} title="PageOne" initial={true} />
          <Scene key="HomeScreen" component={HomeScreen} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}