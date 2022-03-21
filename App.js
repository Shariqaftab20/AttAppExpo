// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import AdminScreen from './screen/AdminScreen';
import SignInScreen from './screen/SignInScreen';
import SignUpScreen from './screen/SignUpScreen';
import ConfirmEmailScreen from './screen/ConfirmEmailScreen';
import ForgotPasswordScreen from './screen/ForgotPasswordScreen';
import NewPasswordScreen from './screen/NewPasswordScreen';
import AnimButton from './screen/AnimButton';
import CompanyLogIn from './screen/CompanyLogIn';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown: false,
      }
      }>
        <Stack.Screen options={{ title: '' }} name="Home" component={HomeScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Anim" component={AnimButton} />
        {/* <Stack.Screen name="Company" component={CompanyLogIn} /> */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;