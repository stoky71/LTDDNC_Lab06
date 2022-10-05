import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function ToDoList({item}) {
  return (
    <View>
        <Text>{item.value}</Text>
    </View>
  );
}

