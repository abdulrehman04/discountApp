import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <TextInput style= {{borderColor: '#fff', color: 'black', backgroundColor: 'white', width: 300, height: 50, borderRadius: 9, paddingLeft: 8}} placeholder='Original Price' keyboardType='numeric'>
        
      </TextInput>
      <Text></Text>
      <TextInput style= {{borderColor: '#fff', color: 'black', backgroundColor: 'white', width: 300, height: 50, borderRadius: 9, paddingLeft: 8}} placeholder='Discount Percentage'  keyboardType='numeric'>
        
      </TextInput>
      <Text/>
      <Text/>
      <View style={{height: 50, width: 250, borderRadius: 10}}>
        <Button color='#212121' title='Get me the Price!'></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc9557',
    alignItems: 'center',
    justifyContent: 'center',
    // color: 'sandybrown'
  },
});
