import React, { useState } from 'react';
import { StyleSheet, Dimensions, Modal, SafeAreaView, TouchableOpacity, ScrollView, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import RootTabs from '../tabNavigation/RootTabs'

import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'
import ModalBody from '../components/ModalBody'

const windowHeight = Dimensions.get('window').height

const Browse = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.title}>
          <Text style={styles.bigBlue}>Browse</Text>
        </View>
        <RootTabs />
      </ScrollView>
      <TouchableOpacity style={styles.filterButton} onPress={() => {
        setModalVisible(true);
      }}>
        <Octicons name="settings" size={24} color="white" />
        <Text style={styles.filterLabel}>Sort and Filter</Text>
      </TouchableOpacity>

      <Modal
        statusBarTranslucent
        animationType="slide"
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalHeader onPress={() => { setModalVisible(!modalVisible); }} />
            <ModalBody />
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );

}

export default Browse

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    flex: 1,
  },
  bigBlue: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Roobert-bold',
    paddingTop: 10
  },
  red: {
    color: 'red',
  },
  title: {
    height: windowHeight / 9,

  },
  filterButton: {
    backgroundColor: '#4C4C4C',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    height: 30,
    bottom: 20,
    right: 12,
    borderRadius: 6
  },
  filterLabel: {
    paddingLeft: 5,
    fontFamily: 'Roobert',
    color: 'white',
    fontSize: 15
  },
  modalView: {
    backgroundColor: "black",
    height: windowHeight,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    backgroundColor: 'green'
  }
});
