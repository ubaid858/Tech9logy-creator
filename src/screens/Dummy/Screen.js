import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//npm imports

//styles & Services
import { styles } from './Style';
import * as service from './Service';

//global & redux
import { DP, IS_ANDROID } from 'global/constants';

//components
import FocusAwareStatusBar from 'components/FocusAwareStatusBar';

const Screen = ({ name, dispatch }) => {

  //state


  return (
    <View style={styles.container}>
      <FocusAwareStatusBar isLightBar={false} isTopSpace={true} isTransparent={true} />
    </View>
  )
}


export default Screen;