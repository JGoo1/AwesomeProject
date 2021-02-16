import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/Detail'
import SettingScreen from './screens/Setting'
import HomeScreen from './screens/Home'
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home'}}/>           
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            )
          }}/>                     
        <Stack.Screen name="Setting" component={SettingScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};