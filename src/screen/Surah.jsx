import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import Number from '../img/number.png';
import HeaderImage from '../img/header.png';

export class Surat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            surat: [],
        };
    }

    componentDidMount() {
        axios.get('https://api.npoint.io/99c279bb173a6e28359c/data').then((res) => {
            this.setState({ surat: res.data });
        });
    }

    keyExtractor = (item, key) => key.toString();

    renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.listItem}
            onPress={() =>
                this.props.navigation.navigate('Detail', {
                    id: item.nomor,
                    surat: item.nama,
                })
            }
        >
            <View style={styles.cardContainer}>
                <View style={styles.gradientCard}>
                    <ImageBackground style={styles.number} source={Number}>
                        <Text style={{ color: '#000000'}}>{item.nomor}</Text>
                    </ImageBackground>
                    <View style={styles.content}>
                        <View style={styles.flex}>
                            <Text style={styles.title}>{item.nama}</Text>
                            <Text style={styles.title}>{item.asma}</Text>
                        </View>
                        <Text style={styles.subtitle}>
                            {item.ayat} Ayat Arti: {item.arti}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerCard}>
                    <Image style={styles.headerImage} source={HeaderImage} />
                </View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.surat}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    listItem: {
        flex: 1,
    },
    cardContainer: {
        marginHorizontal: 16, 
        marginBottom: 5,
    },
    gradientCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 5,
        borderRadius: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: 'orange', 
    },
    headerCard: {
        backgroundColor: 'orange',  
        padding: 25,
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20,
    },
    headerImage: {
        width: 150, 
        height: 150, 
        resizeMode: 'cover',
        marginBottom: 10,
    },
    number: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
    },
    content: {
        marginLeft: 10,
        flex: 1,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333',
    },
    subtitle: {
        color: '#666',
    },
});

export default Surat;
