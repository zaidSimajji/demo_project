/**
 * @format
 */

import 'react-native';
import React from 'react';
import Start       from '../source/screen/start';
import Fingerprint from '../source/screen/fingerprint';
import Animation   from '../source/screen/animation';

import texts       from '../source/helper/texts';
import constValues from '../source/helper/constValues';
import colourValue from '../source/style/colour';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders Start screen correctly', () => {
  renderer.create(<Start />);
});

it('renders Fingerprint screen correctly', () => {
  renderer.create(<Fingerprint />);
});

it('renders Animation screen correctly', () => {
  renderer.create(<Animation />);
});

it('Fingerprint.getPhaseColour PHASE_READY', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let colour = fingerprint.getPhaseColour(constValues.PHASE_READY);
  expect(colour).toBe(colourValue.BLACK_2)
});

it('Fingerprint.getPhaseColour PHASE_SUCCESS', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let colour = fingerprint.getPhaseColour(constValues.PHASE_SUCCESS);
  expect(colour).toBe(colourValue.GREEN_1)
});

it('Fingerprint.getPhaseColour PHASE_FAILED', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let colour = fingerprint.getPhaseColour(constValues.PHASE_FAILED);
  expect(colour).toBe(colourValue.RED_1)
});

it('Fingerprint.getPhaseText PHASE_READY', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let text = fingerprint.getPhaseText(constValues.PHASE_READY);
  expect(text).toBe(texts.fingerprint_004)
});

it('Fingerprint.getPhaseText PHASE_SUCCESS', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let text = fingerprint.getPhaseText(constValues.PHASE_SUCCESS);
  expect(text).toBe(texts.fingerprint_006)
});

it('Fingerprint.getPhaseText PHASE_FAILED', () => {
  let fingerprint = renderer.create(<Fingerprint />).getInstance();
  let text = fingerprint.getPhaseText(constValues.PHASE_FAILED);
  expect(text).toBe(texts.fingerprint_005)
});
