import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigator/tabs';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signUpScreen'
import AuthStack from './navigator/authStack';
import  AuthenticatedUserProvider  from './providers';
import  SafeAreaProvider  from 'react-native-safe-area-context';
import  RootNavigator  from './navigator/rootNavigator';

import RootStack from './navigator/rootStack';



const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    // <NavigationContainer>
    //     <AuthStack />
    // </NavigationContainer>
    // <AuthenticatedUserProvider>
    //   <SafeAreaProvider>
    //     <RootNavigator />
    //   </SafeAreaProvider>
    // </AuthenticatedUserProvider>
  );
};

export default App;
