import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView, ScrollView, Text, View } from 'react-native';

const Categories = (props) => (
    <View style = {styles.container}>
        <Text>Hola</Text>
    </View>
)

export default Categories;


const styles = StyleSheet.create({
    container: {
      display:'flex',
      alignItems: 'center',
      paddingLeft: 12,
      paddingRight: 12,
      backgroundColor: 'red',
      flex: 1,
    },
  });
  