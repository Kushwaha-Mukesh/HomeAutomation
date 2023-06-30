/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
} from 'react-native';

import React from 'react';
import MySlider from './src/components/fan';
import LightComponent from './src/components/LightComponent';
import GasGauge from './src/components/GasGauge';
import LiquidGuage from './src/components/LiquidGuage';


const App = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <LightComponent />
      <MySlider />
      <GasGauge />
      <LiquidGuage percentage={50} />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
