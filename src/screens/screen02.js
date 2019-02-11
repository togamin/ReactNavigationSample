import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Screen02 extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>スクリーン②</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Screen02;