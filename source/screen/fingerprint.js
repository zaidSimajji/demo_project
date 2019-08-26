import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

import LongButton from '../component/longButton';
import AppValues  from '../helper/constValues';
import Texts      from '../helper/texts';

const styles = require('../style/fingerprint');
const colour = require('../style/colour');

export default class Fingerprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scanPhase : AppValues.PHASE_READY,
    };
  }
  
  componentDidMount() {
    this.startScan();
  }
 
  componentWillUnmount() {
    FingerprintScanner.release();
  }
  
  handleAuthenticationAttempted = (error) => {
    this.setPhase(AppValues.PHASE_FAILED);
  }
  
  setPhase=(phase)=>{
    this.setState({
      scanPhase : phase,
    });
  }
  
  startScan=()=>{
    this.setPhase(AppValues.PHASE_READY);
    FingerprintScanner
    .authenticate({onAttempt: this.handleAuthenticationAttempted})
    .then(() => {
      this.setPhase(AppValues.PHASE_SUCCESS);
    })
    .catch((error) => {
      this.setPhase(AppValues.PHASE_FAILED);
    });
  }
  
  getPhaseColour(scanPhase) {
    switch(scanPhase) {
      case AppValues.PHASE_SUCCESS:
        return colour.GREEN_1;
      case AppValues.PHASE_FAILED:
        return colour.RED_1;
      default:
        return colour.BLACK_2;          
    }
  }
  
  getPhaseText(scanPhase) {
    switch(scanPhase) {
      case AppValues.PHASE_SUCCESS:
        return Texts.fingerprint_006;
      case AppValues.PHASE_FAILED:
        return Texts.fingerprint_005;
      default: 
        return Texts.fingerprint_004;
    }
  }
  
  render() {
    let pColour = this.getPhaseColour(this.state.scanPhase);
    let pText   = this.getPhaseText(this.state.scanPhase);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{Texts.fingerprint_001}</Text>
        <Image source={require('../image/fingerprint.png')} 
               style={styles.image} />        
        <Text style={styles.info}>{Texts.fingerprint_002}: <Text style={{color: pColour}}>{pText}</Text></Text>        
        <View style={styles.gap1} />
        <LongButton text={Texts.fingerprint_003} 
                    onPress={this.startScan}/>
      </View>
    );
  }
}