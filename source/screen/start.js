import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import LongButton from '../component/longButton';
import Texts      from '../helper/texts';

const styles = require('../style/start');

export default class Start extends React.Component {  
  openFingerprint=()=>{
    this.props.navigation.navigate('Fingerprint');
  }
  
  openLottie=()=>{
    this.props.navigation.navigate('Animation');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Texts.start_001}</Text>
        <View style={styles.gap1} />
        <LongButton text={Texts.start_002} 
                    onPress={this.openFingerprint}/>
        <View style={styles.gap2} />
        <LongButton text={Texts.start_003} 
                    onPress={this.openLottie}/>
      </View>
    );
  }
}