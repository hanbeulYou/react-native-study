import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
  // Platform,
} from 'react-native';
// type이 없어서 직접 만들어줘야함ㅠ
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

// Platform.OS 을 활용해 'android'인지 확인 가능
// children이 있는 컴포넌트들은 React.FC type 처리해주는거 추천
const DismissKeyboardView: React.FC<{style?: StyleProp<ViewStyle>}> = ({
  children,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
