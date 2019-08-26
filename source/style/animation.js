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
  title: {
    marginTop: sHeight * 0.02,
    fontSize: 20,
    color: colour.BLACK_1,
  },
})