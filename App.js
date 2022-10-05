import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import ToDoList from './src/ToDoList';
import AddWork from './src/AddWork';

export default function App() {
  const [text,SetText] = useState("")

  const [dataList, setDataList] = useState([])

  return (
    <View style={styles.container}>
      <View style={{flex:0.3}}> 
        <TextInput placeholder='Nhập công việc cần làm..'
        onChange={item => SetData(item)}></TextInput>
        <TouchableOpacity style={{borderWidth:1}} onPress={() => setDataList([...dataList,text])}>
        <Text style={{marginLeft:5,color:'black', fontSize:20, fontWeight:'800'}}>
            Thêm công việc</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.7}}>
        <FlatList data={dataList}
        renderItem={({item,index}) =>{
          <View>
            <Text>{index+1}</Text>
            <Text>{item}</Text>
          </View>
        }}>

        </FlatList>
      </View>
    </View>
    
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
