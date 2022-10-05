import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [textAdd,SetTextAdd] = useState("")

  const [dataList, setDataList] = useState([])

  return (
    <View style={styles.container}>
      <View style={{flex:0.3, margin:50}}> 
        <TextInput placeholder='Nhập công việc cần làm..' style={{height:40, width:200, borderWidth:2, margin:10}}
        onChangeText={(text) => SetTextAdd(text)}></TextInput>
        <TouchableOpacity style={{borderWidth:1, backgroundColor:'gray'}} onPress={() => setDataList([...dataList,textAdd])}>
        <Text style={{marginLeft:35,color:'black', fontSize:20, fontWeight:'800'}}>
            Thêm công việc</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:0.7, borderWidth:2, width:250}}>
        <FlatList data={dataList}
        renderItem={({item,index}) =>{
          return(
          <View style={{flex:1, flexDirection:'row', margin:5, paddingRight:10}}>
            <Text>{index+1}.  </Text>
            <Text style={{fontWeight:'700'}}>{item}      </Text>
            <TouchableOpacity onPress={() => {
              const listFlat = [...dataList]
              listFlat.splice(index,1) 
              setDataList(listFlat)
            }}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          )         
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
