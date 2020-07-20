import React from "react";

import Svg, {
  Circle,
  G,
  Path,
  Use,
  LinearGradient,
  RadialGradient,
  Stop,
} from "react-native-svg";

import { BackgroundStyles as styles } from "./BackgroundStyles";

function Background() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 200"
      style={styles.background}
    >
      <Path fill="#e52" d="M0 0H2000V1500H0z"></Path>
      <RadialGradient id="a" gradientUnits="objectBoundingBox">
        <Stop offset="0" stopColor="#FB3"></Stop>
        <Stop offset="1" stopColor="#e52"></Stop>
      </RadialGradient>
      <LinearGradient
        id="b"
        x1="0"
        x2="1550"
        y1="750"
        y2="750"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f7882b"></Stop>
        <Stop offset="1" stopColor="#e52"></Stop>
      </LinearGradient>
      <Path
        id="s"
        fill="url(#b)"
        d="M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6-24.1 96-57.4 189.4-99.3 278.6-41.9 89.2-92.4 174.1-150.3 253.3-58 79.2-123.4 152.6-195.1 219-71.7 66.4-149.6 125.8-232.2 177.2-82.7 51.4-170.1 94.7-260.7 129.1-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6 93.6-20.2 185-49.5 272.5-87.2 87.6-37.7 171.3-83.8 249.6-137.3 78.4-53.5 151.5-114.5 217.9-181.7 66.5-67.2 126.4-140.7 178.6-218.9 52.3-78.3 96.9-161.4 133-247.9 36.1-86.5 63.8-176.2 82.6-267.6 18.8-91.4 28.6-184.4 29.6-277.4.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 .7 0 1.3-.1 2l.1.1z"
      ></Path>
      <G id="g">
        <Use href="#s" transform="rotate(60) scale(.12)"></Use>
        <Use href="#s" transform="rotate(10) scale(.2)"></Use>
        <Use href="#s" transform="rotate(40) scale(.25)"></Use>
        <Use href="#s" transform="rotate(-20) scale(.3)"></Use>
        <Use href="#s" transform="rotate(-30) scale(.4)"></Use>
        <Use href="#s" transform="rotate(20) scale(.5)"></Use>
        <Use href="#s" transform="rotate(60) scale(.6)"></Use>
        <Use href="#s" transform="rotate(10) scale(.7)"></Use>
        <Use href="#s" transform="rotate(-40) scale(.835)"></Use>
        <Use href="#s" transform="rotate(40) scale(.9)"></Use>
        <Use href="#s" transform="rotate(25) scale(1.05)"></Use>
        <Use href="#s" transform="rotate(8) scale(1.2)"></Use>
        <Use href="#s" transform="rotate(-60) scale(1.333)"></Use>
        <Use href="#s" transform="rotate(-30) scale(1.45)"></Use>
        <Use href="#s" transform="rotate(10) scale(1.6)"></Use>
      </G>
      <Circle r="3000" fill="url(#a)"></Circle>
      <G fill="url(#a)" opacity="0.5">
        <Circle r="2000"></Circle>
        <Circle r="1800"></Circle>
        <Circle r="1700"></Circle>
        <Circle r="1651"></Circle>
        <Circle r="1450"></Circle>
        <Circle r="1250"></Circle>
        <Circle r="1175"></Circle>
        <Circle r="900"></Circle>
        <Circle r="750"></Circle>
        <Circle r="500"></Circle>
        <Circle r="380"></Circle>
        <Circle r="250"></Circle>
      </G>
      <Use href="#g" transform="rotate(10)"></Use>
      <Use href="#g" transform="rotate(120)"></Use>
      <Use href="#g" transform="rotate(240)"></Use>
      <Circle r="3000" fill="url(#a)" fillOpacity="0.1"></Circle>
    </Svg>
  );
}

export default Background;
