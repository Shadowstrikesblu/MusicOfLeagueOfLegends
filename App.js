import LoginScreen from './app/screens/LoginScreen';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './app/router/router';
import MyFooter from './app/components/MyFooter';
import Dashboard from './app/screens/DashboardScreen';
import LoginForm from './app/screens/LoginForm';
import RegisterForm from './app/screens/RegisterForm';
import MyHeader from './app/components/MyHeader';
import AccountScreen from './app/screens/AccountScreen';


const Stack = createNativeStackNavigator();
// Afficher le header et le footer seulement si connecté donc pas sur le login screen

export default function App (){
      return (
            <NavigationContainer>
                  <Stack.Navigator>
                        <Stack.Screen
                              name="Welcome"
                              component={LoginScreen}
                              options={{ headerShown: false }}
                        />
                        <Stack.Screen
                              name="Dashboard"
                              component={Dashboard}
                              options={{
                                    headerShown: true,
                                    header: () => <MyHeader />,
                              }}
                        />
                        <Stack.Screen
                              name="LoginForm"
                              component={LoginForm}
                              options={{ headerShown: true,
                                    header: () => <MyHeader />,
                              }}
                        />
                        <Stack.Screen
                              name="RegisterForm"
                              component={RegisterForm}
                              options={{ headerShown: true,
                                    header: () => <MyHeader />,
                              footerShown: true }}
                        />
                        <Stack.Screen
                              name="Account"
                              component={AccountScreen}
                              options={{ headerShown: true,
                                    header: () => <MyHeader />,
                              footerShown: true }}
                        />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}



