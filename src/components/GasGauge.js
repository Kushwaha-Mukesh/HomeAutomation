import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, TextInput, Text, View } from 'react-native';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
  DangerPath
} from 'react-native-cool-speedometer';
const GasGauge = () => {
  const [value, setValue] = useState('0');

  return (
    <SafeAreaView>
      <View style={{marginBottom: 40}}>
        <Speedometer
           value={value}
           max={100}
           angle={180}
           fontFamily='squada-one'
        >
        <Background />
        <Arc/>
        <Needle/>
        <DangerPath />
        <Progress/>
        <Marks/>
        <Indicator />
        </Speedometer>
        <TextInput
            style = {styles.input}
            onChangeText={ num => setValue(num)}
            value = {value}
            keyboardType='numeric'
            />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
      borderWidth: 1,
      fontSize: 16,
      marginTop: 20
  }
})

export default GasGauge;
