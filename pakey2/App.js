import {createSwitchNavigator, createStackNavigator} from 'react-navigation';
import LoginScreen from './src/LoginScreen'
import HouseScreen from './src/HouseScreen'
import RegisterScreen from './src/RegisterScreen'

const AppStack = createStackNavigator({ House: HouseScreen })
const AuthStack = createStackNavigator({ Login: LoginScreen, Register: RegisterScreen });

export default createSwitchNavigator({
  App: AppStack,
  Auth: AuthStack
},
{
  initialRouteName: 'Auth'
})