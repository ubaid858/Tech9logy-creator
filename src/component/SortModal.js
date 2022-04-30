import React from 'react'
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native'

//styles
import { DP } from 'global/Constant'

const SortModal = ({ visibility, onClose, asending, desending }) => {
    return (
        <Modal
            visible={visibility}
            transparent={true}
            onRequestClose={onClose}
            animationType="fade"
        >
            <TouchableOpacity
                activeOpacity={1}
                onPress={onClose}
                style={styles.modal}>
                <View style={styles.view}>
                    <Text

                        onPress={() => {
                            asending()
                            onClose()
                        }}
                        style={styles.text}>Asending Order</Text>
                    <Text
                        onPress={() => {
                            desending()
                            onClose()
                        }}
                        style={styles.text}>Desending Order</Text>
                </View>
            </TouchableOpacity>

        </Modal>
    )
}

export default SortModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#00000030',
        alignItems: 'flex-end'
    },
    view: {
        height: DP(100),
        backgroundColor: '#FFF',
        marginTop: DP(15),
        marginRight: DP(20),
        borderRadius: DP(15),
        paddingTop: DP(10)
    },
    text: {
        marginHorizontal: DP(10),
        height: DP(30),
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})