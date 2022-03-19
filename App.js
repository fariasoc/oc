import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigation } from '@react-navigation/stack'
import Task from './src/Task'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task" >
        <Stack.Screen
          name="Task" 
          component={Task}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
