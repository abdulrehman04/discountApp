import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fc9557',
      alignItems: 'center',
      justifyContent: 'center',
      // color: 'sandybrown'
    },
  });

export function HomeScreen({navigation}) {

    const [orig, setOrig] = useState('');
    const [percent, setPercent] = useState('');

    var discountAmount = 0
    var newAmount = 0
  return (
    <View style={styles.container}>
      <TextInput style= {{borderColor: '#fff', color: 'black', backgroundColor: 'white', width: 300, height: 50, borderRadius: 9, paddingLeft: 8}}
        placeholder='Original Price'
        keyboardType='numeric'
        value = {orig}
        onChangeText = {(val) => {
          setOrig(val);
        }}
        >
        
      </TextInput>
  
  
      <Text></Text>
  
  
      <TextInput style= {{borderColor: '#fff', color: 'black', backgroundColor: 'white', width: 300, height: 50, borderRadius: 9, paddingLeft: 8}}
        placeholder='Discount Percentage'
        keyboardType='numeric'
        value = {percent}
        onChangeText = {(val) => {
          setPercent(val);
        }}
        >
      </TextInput>
  
  
      <Text/>
      <Text/>
  
  
      <View style={{height: 50, width: 250}}>
        <Button color='#212121' title='Get me the Price!' onPress={()=>{
          if(Number(orig)<0){
            Alert.alert(`Invalid Amount Entered`)
          }
          else if(Number(percent)>100 || Number(percent)<0){
            Alert.alert(`Invalid Percentage`)
          }
          else{
            discountAmount = (Number(percent)/100.0)*Number(orig);
            newAmount = Number(orig) - discountAmount;

            navigation.navigate('Details', {
              result:{
                'original': orig,
                'discountAmount': discountAmount,
                'discount': percent,
                'final': newAmount,
              }
            });

            setOrig('');
            setPercent('');
          }
        }}></Button>
      </View>
  
  
    </View>
  );
  }