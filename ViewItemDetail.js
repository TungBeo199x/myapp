import React, { useState } from 'react';
import { StyleSheet,Text, View, Modal, Button } from 'react-native';

export default function ItemDetail(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const item = props.item;

    const openModal = () => {
        setModalVisible(true);
    }
    return (
        <View>
            <Text style={styles.item} onPress={openModal}>{item.email} and {item.age}</Text>
            <Modal
                animationType="slide"
                transparent={true}
                overFullScreen={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Email: {item.email}</Text>
                        <Text style={styles.modalText}>Age: {item.age}</Text>
                        <Text style={styles.modalText}>Id: {item.id}</Text>
                    </View>
                </View>
                <Button 
                title='Close' 
                onPress= {() => setModalVisible(!modalVisible)}
                color='#6C5C32' />
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 12,
      backgroundColor: '#50A8E3'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });