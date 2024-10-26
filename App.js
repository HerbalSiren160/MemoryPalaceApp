import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';

import HomeScreen from './src/screens/HomeScreen';
import ExercisesScreen from './src/screens/ExercisesScreen';
import StoriesScreen from './src/screens/StoriesScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';
import DatabaseScreen from './src/screens/DatabaseScreen';

SystemUI.setBackgroundColorAsync('#0a0a0a');
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {backgroundColor: '#000'},
          headerTitleStyle: {color: '#fafafa'},
          headerTintColor: '#fafafa',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Memory Palace',
            headerTitleStyle: {color: '#fafafa', fontSize: 24, fontWeight: 'bold'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Exercises" component={ExercisesScreen} />
        <Stack.Screen name="Stories" component={StoriesScreen} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} />
        <Stack.Screen name="Database" component={DatabaseScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
