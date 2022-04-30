import React from 'react'
import { StyleSheet, Text, View, Modal, Image } from 'react-native'

const ImageModal = ({ onClose, visibility, imageUrl }) => {
    return (
        <Modal
            visible={visibility}
            transparent={false}
            onRequestClose={onClose}
            animationType="fade"
        >
            <View style={{ flex: 1, backgroundColor: '#00000020' }}>
                <Image
                    source={{ uri: imageUrl }}
                    resizeMode="contain"
                    style={{ height: '100%', width: '100%' }}
                />
            </View>
        </Modal>
    )
}

export default ImageModal

const styles = StyleSheet.create({})