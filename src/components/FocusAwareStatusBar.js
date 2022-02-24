import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'global/index';

const FocusAwareStatusBar = ({ isLightBar, isTopSpace, isTransparent }) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused();

  return <View style={{
    paddingTop: isTopSpace ? insets.top : 0,
    backgroundColor: isTransparent ? 'transparent' : Colors.WHITE
  }}>
    {
      isFocused &&
      <StatusBar
        //backgroundColor only work in android
        backgroundColor={isTransparent ? 'transparent' : Colors.WHITE}
        barStyle={isLightBar ? 'light-content' : 'dark-content'}
      />
    }
  </View>
};

export default FocusAwareStatusBar;