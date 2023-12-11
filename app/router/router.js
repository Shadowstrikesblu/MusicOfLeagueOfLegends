import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from '../screens/DashboardScreen';
import MyHeader from '../components/MyHeader';
import MyFooter from '../components/MyFooter';
import LoginForm from '../screens/LoginForm';
import RegisterForm from '../screens/RegisterForm';
import LoginScreen from '../screens/LoginScreen';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function Router(props) {
    return(
        <NavigationContainer>
              <Stack.Navigator screenOptions={{headerShown: false }} >
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                    <Stack.Screen name='LoginForm' component={LoginForm} />
                    <Stack.Screen name='RegisterForm' component={RegisterForm} />
              </Stack.Navigator>
        </NavigationContainer>
  )


}