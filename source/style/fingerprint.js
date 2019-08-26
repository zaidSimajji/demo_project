'use strict';
var React = require('react-native');
var {StyleSheet, Dimensions} = React;

const sWidth  = Dimensions.get('window').width;
const sHeight = Dimensions.get('window').height;
const colour  = require('./colour');

module.exports = StyleSheet.create({
  container: {
    padding: sHeight * 0.08,
    width: sWidth,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colour.WHITE_1,
  },
  image: {
    marginTop: sHeight * 0.02,
    marginBottom: sHeight * 0.05,
    width: sWidth * 0.5,
    height: sWidth * 0.5,
  },
  title: {
    marginTop: sHeight * 0.02,
    fontSize: 20,
    color: colour.BLACK_1,
  },
  info: {
    fontSize: 18,
    color: colour.BLACK_1,
  },
  gap1: {
    height: sHeight * 0.07,
  },
  button: {
    padding: sHeight * 0.01,
    width: sWidth * 0.9,
    alignItems: 'center',
    borderRadius: sWidth * 0.025,
    borderWidth: 1,
    borderColor: colour.BLACK_2,
  },
  buttonTxt: {
    fontSize: 17,
    color: colour.BLACK_1,
  },
});