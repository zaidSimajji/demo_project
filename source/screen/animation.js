import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';

import Texts from '../helper/texts';

const styles = require('../style/animation');

export default class Animation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Texts.animation_001}</Text>
        <LottieView source={require('../animation/lottie_sample.json')} 
                    autoPlay={true} 
                    loop={true} />
      </View>
    );
  }
}