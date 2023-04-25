import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';

function Complete() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>{count}</Text>
      </Pressable>
    </View>
  );
}

export default Complete;
