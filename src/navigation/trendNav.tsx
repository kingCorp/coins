import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Trending from '../screens/trending/Trending';

export type RootStackParams = {
  Home: any;
  Details: any;
  Detail: {
    name: string;
    id: string;
  };
  Trending: any;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Trending">
      <Stack.Screen name="Trending" component={Trending} />
    </Stack.Navigator>
  );
};

export default Navigation;
