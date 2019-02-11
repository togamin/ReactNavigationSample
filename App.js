import { createAppContainer,createStackNavigator } from 'react-navigation';
import Screen01 from './src/screens/screen01';
import Screen02 from './src/screens/screen02';

const App = createStackNavigator({
  Home:    {screen: Screen01},
  Screen02:{screen: Screen02},
},{
  defaultNavigationOptions:{
    //ヘッダーの文字
    headerTitle:'スクリーン①',
    headerTintColor:'#fff',
    //ヘッダーのスタイル
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#333366',
    },
    //ヘッダータイトルのスタイル
    headerTitleStyle:{
      color:'#fff',
    },
  },
});
export default createAppContainer(App);
