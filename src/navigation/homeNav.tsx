import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Home from '../screens/home/Home';
import Details from '../screens/details/Detail';

export type RootStackParams = {
  Home: any;
  Details: any;
  Detail: {
    name: string;
    id: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default Navigation;
