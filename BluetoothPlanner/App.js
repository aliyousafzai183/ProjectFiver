import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// importing Screens
import PlanPage from './screens/planPage';
import MainPage from './screens/mainPage';

// Main Screen
const plan = [
  {
      'no': 1,
      'start': '2:30 AM',
      'stop': '9:30 PM',
      'monday': false,
      'tuesday': false,
      'wednesday': false,
      'thursday': false,
      'friday': false,
      'saturday': false,
      'sunday': false,
  },

];

const MainScreen = ({ navigation}) => {
  return (
    <MainPage navigation={navigation} plan={plan}/>
  )
}

// AddPlan Screen
const AddPlanScreen = ({ navigation ,plan}) => {

  return (
    <PlanPage navigation={navigation} plan={plan}/>
  )
}

// Navigation Screen
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="planPage"
          component={AddPlanScreen}
          options={{
            title: 'Go Back',
            headerStyle: {
              backgroundColor: '#3D49C7',
            },
            headerTintColor: '#ffff',
            headerTitleStyle: {
              fontSize: 20
            },
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;