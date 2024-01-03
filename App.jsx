import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from './src/screen/Splash';
import { Home } from './src/screen/Home';
import { Surat } from './src/screen/Surah';
import { Detail } from './src/screen/Detail';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Surat" component={Surat} options={{
          headerShown: false,
          headerStyle: { elevation: 0, borderBottomWidth: 0.5 },
        }} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={({ route }) => ({
            title: "Surat " + route.params.surat,
            headerStyle: { elevation: 0, borderBottomWidth: 0.5 },
            headerShown: false
          })}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;