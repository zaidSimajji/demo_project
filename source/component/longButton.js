import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = require('../style/fingerprint');

export default class LongButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonTxt}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}