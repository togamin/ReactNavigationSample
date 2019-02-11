import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Btn from '../components/Btn';

class Screen01 extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>スクリーン①</Text>
        <Btn onPress={()=>this.props.navigation.navigate('Screen02')}>→</Btn>
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
export default Screen01;