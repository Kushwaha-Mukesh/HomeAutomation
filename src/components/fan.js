import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const MySlider = () => {
  const [value, setValue] = useState(0);

  const handleValueChange = (val) => {
    setValue(val);
    console.log(val);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fan</Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={0}
        maximumValue={4}
        value={value}
        onValueChange={handleValueChange}
        minimumTrackTintColor="#3f3f3f"
        maximumTrackTintColor="#b3b3b3"
        thumbTintColor="rgb(252, 228, 149)"
      />
      <Text style={styles.valueText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 24
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 40,
    marginBottom: 40,
    borderRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  slider: {
    width: 300,
    marginTop: 20,
    marginBottom: 20
  },
  valueText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default MySlider;
