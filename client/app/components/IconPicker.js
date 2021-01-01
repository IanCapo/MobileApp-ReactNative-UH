import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import colors from "../utilities/colors";
import Icon from "./Icon";

function IconPicker ({ onPress, style }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [myIcon, setMyIcon] = useState("foot-print");

  const icons = [
    "baby-carriage",
    "beach",
    "cake-variant",
    "castle",
    "car-child-seat",
    "duck",
    "face",
    "foot-print",
    "human-pregnant"
    ]

    const handleSelection = (icon) => {
      setMyIcon(icon)
      onPress(icon)
    }

  return (
    <View style={[styles.centeredView], style}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#ffffff" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Icon style={styles.closeIcon} name="close" backgroundColor={"#ffff"} size={30} />
            </TouchableOpacity>
            <View style={ styles.iconContainer }>
            {icons.map((icon, index) => (
              <Icon style={styles.icon} name={icon} size={40} backgroundColor={myIcon === icon ? colors.green : colors.yellow } key={icon+index} onPress={() => handleSelection(icon)} />
            ))}
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Pick icon</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  closeIcon: {
    width: 30,
    height: 30,
    alignSelf: "flex-end"
  },
  icon: {
    margin: 10,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  modalView: {
    width: "90%",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
   
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: colors.secondary,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingRight: 12,
    paddingLeft: 12
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default IconPicker;