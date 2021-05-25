import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { DataTable } from 'react-native-paper';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export function History({navigation}){
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Icon.Button
                color = 'black'
                name = 'close'
                onPress = {()=>{
                    global.historyList =[];
                    navigation.goBack(null);
                    Alert.alert(`History cleared successfully`)
                }}
                backgroundColor = 'white'
              >
              </Icon.Button>
              ),
        })
    });

    return (
        <View>
          <DataTable>
    <DataTable.Header>
      <DataTable.Title>Original Amount</DataTable.Title>
      <DataTable.Title numeric>Discount Amount</DataTable.Title>
      <DataTable.Title numeric>Final</DataTable.Title>
    </DataTable.Header>
    {global.historyList.map((e)=>{
        return     <DataTable.Row>
        <DataTable.Cell>{e.original}</DataTable.Cell>
        <DataTable.Cell numeric>{e.discount}</DataTable.Cell>
        <DataTable.Cell numeric>{e.final}</DataTable.Cell>
      </DataTable.Row>
    })}
    {/* <DataTable.Row>
      <DataTable.Cell>Frozen yogurt</DataTable.Cell>
      <DataTable.Cell numeric>159</DataTable.Cell>
      <DataTable.Cell numeric>6.0</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
      <DataTable.Cell numeric>237</DataTable.Cell>
      <DataTable.Cell numeric>8.0</DataTable.Cell>
    </DataTable.Row> */}
  </DataTable>
      </View>
    )
}
