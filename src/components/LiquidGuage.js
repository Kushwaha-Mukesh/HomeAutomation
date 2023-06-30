import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiquidGuage = ({ percentage }) => {
  const liquidColor = '#00AEEF';
  const containerStyle = {
    width: 250,
    height: 250,
    borderRadius: 200,
    backgroundColor: '#E6E6E6',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    marginBottom: 20,
  };

  const liquidStyle = {
    width: '100%',
    height: `${percentage}%`,
    backgroundColor: liquidColor,
  };

  return (
    <View style={styles.container}>
      <View style={containerStyle}>
        <View style={liquidStyle} />
      </View>
      <Text style={styles.label}>{`${percentage}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default LiquidGuage;


// import React, { useState } from "react";
// // import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Animated,
//   TouchableOpacity,
// } from "react-native";
// import LiquidProgress from "react-native-liquid-progress";

// export default function LiquidGauge() {
//   const [value, setValue] = useState(0);
//   return (
//     <View style={styles.container}>
//       <LiquidProgress
//         backgroundColor={"black"}
//         frontWaveColor={"blue"}
//         backWaveColor={"skyblue"}
//         fill={value}
//         size={290}
//         customMask={<View style={{ backgroundColor: "red", width: 290, height: 290 }}></View>}
//       >
//         <Animated.View style={styles.row}>
//           <Text style={styles.text}>{(value * 100).toFixed(2)}%</Text>
//         </Animated.View>
//       </LiquidProgress>
//       <View style={styles.buttonLayer}>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => setValue(Math.random())}
//         >
//           <Text style={styles.buttonText}>Random</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.title}>Liquid Progress </Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   row: {
//     alignSelf: "center",
//     flexDirection: "row",
//     height: 70,
//   },
//   text: {
//     color: "white",
//     fontSize: 47,
//   },
//   buttonLayer: { flex: 0.25, flexDirection: "row" },
//   button: {
//     width: 100,
//     height: 40,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 10,
//     margin: 30,
//     elevation: 10,
//   },
//   buttonText: { fontSize: 15, color: "white" },
//   title: { fontSize: 40, flex: 0.5, color: "gray" },
// });