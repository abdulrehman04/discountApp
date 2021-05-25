import {HomeScreen} from './Home';
import {History} from './History';
import {DetailsScreen} from './DetailsScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options = {({navigation}) => ({
          headerRight: ()=>(
            <Icon.Button
              color = 'black'
              name = 'history'
              onPress = {()=>{navigation.navigate('History')}}
              backgroundColor = 'white'
            >
            </Icon.Button>
          )
        })}/>
        <Stack.Screen name="History" component={History} options = {({navigation}) => ({})}/>
        <Stack.Screen name="Details" component={DetailsScreen} options = {({navigation}) => ({})}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;