import React from 'react';
import Svg, {Circle} from 'react-native-svg';
import {ColorsUI} from '../styles/ColorUI';

interface RadioUIProps {
  isActive: boolean;
}

export const RadioUI = ({isActive}: RadioUIProps) => {
  if (isActive) {
    return (
      <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <Circle
          cx="10.114"
          cy="9.85522"
          r="8.71948"
          fill={ColorsUI.white}
          stroke={ColorsUI.black}
        />
        <Circle cx="10" cy="10" r="5" fill={ColorsUI.black} />
      </Svg>
    );
  }
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Circle
        cx="10.114"
        cy="9.85522"
        r="8.71948"
        fill={ColorsUI.white}
        stroke={ColorsUI.black}
      />
    </Svg>
  );
};
