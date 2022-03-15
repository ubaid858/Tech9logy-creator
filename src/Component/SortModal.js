import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity } from 'react-native'
import { Colors } from 'global/index'
import { DP } from 'global/Constant'

const SortModal = ({
    visibility,
    onRequestClose,
    sortByFirstName,
    sortByLastName

}) => {
    return (
        <Modal
            visible={visibility}
            onRequestClose={onRequestClose}
            transparent={true}
        >
            <Pressable
                onPress={onRequestClose}
                style={styles.modalView}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.sortView}>
                    <Text style={styles.sortText}>Sort By</Text>
                    <Text
                        onPress={() => {
                            sortByFirstName()
                            onRequestClose()
                        }}
                        style={styles.nameText}>First Name</Text>
                    <Text
                        onPress={() => {
                            sortByLastName()
                            onRequestClose()
                        }}
                        style={styles.nameText}>Last Name</Text>
                </TouchableOpacity>
            </Pressable>

        </Modal>
    )
}

export default SortModal

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: '#00000014',
        alignItems: "flex-end"
    },
    sortView: {
        backgroundColor: Colors.WHITE,
        height: DP(150),
        marginTop: DP(30),
        marginRight: DP(20),
        borderRadius: DP(6),
        elevation: DP(3),
        paddingHorizontal: DP(10)
    },
    sortText: {
        marginTop: DP(10),
        fontWeight: "bold"
    },
    nameText: {
        paddingHorizontal: DP(10),
        marginTop: DP(15),
        fontWeight: "500"
    }

})