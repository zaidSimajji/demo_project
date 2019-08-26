import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Start       from './source/screen/start';
import Fingerprint from './source/screen/fingerprint';
import Animation   from './source/screen/animation';

const AppNavigator = createStackNavigator({
  Start      : {screen: Start},
  Fingerprint: {screen: Fingerprint},
  Animation  : {screen: Animation},
}, {
  headerMode: 'none',
});

const MyNavigator = createAppContainer(AppNavigator);
class App extends React.Component {
  render() {
    return (
      <MyNavigator />
    );
  }
};

export default App;