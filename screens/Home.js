import * as React from 'react';
import { Button, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Setting"
          onPress={() => navigation.navigate('Setting')}
        />
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({ 
            title: 'Updated!',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          })}
        />
      </View>
    );
  }

  export default HomeScreen;