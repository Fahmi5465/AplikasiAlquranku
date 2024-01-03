import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Alquran from '../img/alquran.png'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={Alquran} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate("Surat")}
                    activeOpacity={0.7}  // Tambahkan prop activeOpacity di sini
                >
                    <Text style={styles.textButton}>Baca Sekarang</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "contain",
        marginBottom: 40,
    },
    button: {
        // borderColor: "black",
        // borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: "70%",
        marginBottom: 10,
        backgroundColor: "orange",  
    },
    textButton: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'monospace',
        color: '#333'
    }
})

export default Home
