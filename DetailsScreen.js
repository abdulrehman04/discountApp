import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
// import './HistoryItem';
import HistoryItem from './HistoryItem';

export function DetailsScreen ({route, navigation}) {
  var data = route.params.result;
  console.log(data);
  return (
    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fc9557', }}>

      <Text style = {styles.headingStyle}>Original Amount</Text>
      <TextInput style= {styles.textFieldStyle}
        editable = {false}
        value = {data['original']}>
      </TextInput>

      <Text style = {styles.headingStyle}>Discount Percentage</Text>
      <TextInput style= {styles.textFieldStyle}
        editable = {false}
        value = {data['discount']}>
      </TextInput>

      <Text style = {styles.headingStyle}>You Save</Text>
      <TextInput style= {styles.textFieldStyle}
        editable = {false}
        value = {data['discountAmount'].toString()}>
      </TextInput>

      <Text style = {styles.headingStyle}>New Amount</Text>
      <TextInput style= {styles.textFieldStyle}
        editable = {false}
        value = {data['final'].toString()}>
      </TextInput>

      <View style={{height: 50, width: 330, paddingLeft: 80, marginTop: 80}}>
        <Button color='#212121' title='Add to History' onPress={()=>{
          var ite = new HistoryItem(data['original'], data['discountAmount'], data['final'].toString());
          global.historyList.push(ite);
          navigation.goBack(null);
          Alert.alert(`Added to History`)
        }}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingStyle: {marginLeft: 50, marginBottom: 5, fontSize: 22, color: 'white'},
  textFieldStyle:{borderColor: '#fff', color: 'black', backgroundColor: 'white', width: 300, height: 50, borderRadius: 9, paddingLeft: 8, marginLeft: 50, marginBottom: 20},
})