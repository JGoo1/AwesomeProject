import * as React from 'react';
import { Button, Text, View } from 'react-native';

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to Setting"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    );
  }
  

  export default DetailsScreen;