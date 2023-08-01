import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../Screens/AccountScreen';
import Home from '../Screens/Home';
import Inbox from '../Screens/Inbox';
import Order from '../Screens/Order';
import BottomTab from './TabsNavigator';

const Stack = createStackNavigator();

function MyStack() {
    
  return (
    
    <Stack.Navigator 
    initialRouteName='Home'
    screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="Inbox" component={Inbox} />
      <Stack.Screen name='Order' component={Order} />
      <Stack.Screen name='Account' component={AccountScreen} />
    </Stack.Navigator>
  );
}
export default MyStack;