import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function AddWork({submitHandler}) {
    const [value, setValue] = useState("");

  const onChangeText = (text) => {
    setValue(text);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Input you work need to do!</Text>
        <TextInput placeholder='Add you task to do..' onChange={onChangeText}/>
      </View>
      <TouchableOpacity onPress={() =>{
        setValue(submitHandler(value))
      }}>
        <Text>Add task</Text>
      </TouchableOpacity>
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
