import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

class Btn extends React.Component{
  render(){
    const {onPress} = this.props;
    return(
      <TouchableHighlight style = {styles.container} onPress={onPress} underlayColor='transparent'>
        <View style = {styles.btn}>
          <Text style = {styles.btnText}>{this.props.children}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    borderRadius:27,
  },
  btn:{
    width:54,
    height:54,
    borderRadius:27,
    backgroundColor:'#333366',
    //ボタン内のコンテンツの配置
    alignItems: 'center',
    justifyContent: 'center',
    //影
    shadowColor:'#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },
  btnText:{
    fontSize:27,
    fontWeight:'bold',
    color:'#fff',
  }
});

export default Btn;