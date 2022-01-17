import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import Home from './homeNav';
import Trending from './trendNav';
import { Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'gray' }}
                  source={require('../assets/home.png')}
                />
              </View>
            ),
          }}
          name="Coin"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{ width: 25, height: 25, tintColor: focused ? 'blue' : 'gray' }}
                  source={require('../assets/market.png')}
                />
              </View>
            ),
          }}
          name="Trends"
          component={Trending}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
