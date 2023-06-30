import React, { useState } from 'react';
import { View, Button } from 'react-native';

const ToggleButton = () => {
  const [buttonState, setButtonState] = useState(false);

  const handleToggle = () => {
    console.log(buttonState);
    setButtonState(!buttonState);
  };

  return (
    <View>
      <Button
        title={buttonState ? 'LIGHT ON' : 'LIGHT OFF'}
        onPress={handleToggle}
        color={buttonState ? '#841584' : '#2196F3'}
        accessibilityLabel="Toggle Button"
      />
    </View>
  );
};

export default ToggleButton;
