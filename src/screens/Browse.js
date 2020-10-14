import React, { useState } from 'react';
import { StyleSheet, Dimensions, Modal, SafeAreaView, TouchableHighlight, TouchableOpacity, ScrollView, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Categories from '../tabNavigation/Categories'
import LiveChannels from '../tabNavigation/LiveChannels'

import Header from '../components/Header'
import ModalHeader from '../components/ModalHeader'
import ModalBody from '../components/ModalBody'

const windowHeight = Dimensions.get('window').height;
const RouteConfigs = {
  Categories: Categories,
  Channels: LiveChannels
}



const RootTabs = createAppContainer(createMaterialTopTabNavigator(RouteConfigs, {
  tabBarOptions: {
    upperCaseLabel: false,
    activeTintColor: '#6441a5',
    inactiveTintColor: 'white',
    activeBackgroundColor: 'black',
    inactiveBackgroundColor: 'black',
    style: {
      borderTopColor: 'black',
      backgroundColor: 'black',
    },
    indicatorStyle: {
      backgroundColor: '#6441a5'
    },
    labelStyle: {
      fontFamily: 'Roobert-bold',
      fontSize: 14,
      alignItems: 'flex-start'
    },
    tabStyle: {
      width: 120,
    },
  },
}));


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

export default Browse;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: 'black',
    flex: 1,
  },
  scrollView: {
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
