import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import React, { useState } from 'react';
import { ScrollView } from "react-native-gesture-handler";

const HeartScreen = ({ navigation }) => {

  const [isYesSelected, setIsYesSelected] = useState(false);
  const [orgsModalVisible, setOrgsModalVisible] = useState(false);
  const [eventsModalVisible, setEventsModalVisible] = useState(false);

  const handleToggle = (value) => {
    setIsYesSelected(value);
  };

  const handleCloseOrgsModal = () => {
    setOrgsModalVisible(false);
  };

  const openOrgsModal = () => {
    setOrgsModalVisible(true);
  };

  const handleCloseEventsModal = () => {
    setEventsModalVisible(false);
  };

  const openEventsModal = () => {
    setEventsModalVisible(true);
  };


  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleToggle(true)}
          style={[
            styles.toggleButton,
            { backgroundColor: isYesSelected ? '#FF392E' : 'gray' },
          ]}
        >
          <Text style={styles.toggleText}>Organizations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => handleToggle(false)}
          style={[
            styles.toggleButton,
            { backgroundColor: isYesSelected ? 'gray' : '#FF392E' },
          ]}
        >
          <Text style={styles.toggleText}>Events</Text>
        </TouchableOpacity>
      </View>
      <View>
        {isYesSelected ? (
          <TouchableOpacity style={styles.filterButton} onPress={openOrgsModal}>
            <Text> Filter Orgs </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.filterButton} onPress={openEventsModal}>
            <Text> Filter Events </Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={orgsModalVisible}
        onRequestClose={handleCloseOrgsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text> need to put in liked orgs</Text>
            <TouchableOpacity
              onPress={handleCloseOrgsModal}
              style={styles.bottombutton1}
            >
              <Text style={styles.bottombuttontext1}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={eventsModalVisible}
        onRequestClose={handleCloseEventsModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <Text> need to put in liked events</Text>
            <TouchableOpacity
              onPress={handleCloseEventsModal}
              style={styles.bottombutton1}
            >
              <Text style={styles.bottombuttontext1}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView>
        {isYesSelected ? (
          <Text>Organizations Content</Text>
        ) : (
          <Text>Events Content</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "black",
    height: 30,
  },
  toggleButton: {
    flex: 1,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  toggleText: {
    color: 'white',
    fontSize: 16,
  },
  filterButton: {
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: "red",
  },
  bottombuttontext1: {
    color: "#FF392E",
    fontSize: 16,
    fontWeight: "bold",
  },
  bottombutton1: {
    backgroundColor: "#E6E6E6",
    borderRadius: 15,
    marginTop: "3%",
    padding: "3%",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    height: "75%",
  },
  modalButton: {
    backgroundColor: "red",
    borderRadius: 15,
    marginTop: "3%",
    padding: "3%",
    alignItems: "center",
  }
});

export default HeartScreen;
