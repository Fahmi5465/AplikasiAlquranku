import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import Number from '../img/number.png';

export class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ayat: [],
        };
    }

    componentDidMount() {
        const params = this.props.route.params;
        fetch('https://api.npoint.io/99c279bb173a6e28359c/surat/' + params.id)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ ayat: data });
            })
            .catch((error) => console.error('Error:', error));
    }

    keyExtractor = (item, key) => key.toString();
    renderItem = ({ item }) => {
        return (
            <View style={styles.listItem}>
                <ImageBackground style={styles.number} source={Number}>
                    <Text style={{ fontSize: 10, color: '#000000' }}>{item.nomor}</Text>
                </ImageBackground>
                <View style={styles.content}>
                    <Text style={styles.ayat}>{item.ar}</Text>
                    <Text style={{ fontSize: 14, color: 'orange' }}>{item.id}</Text>
                </View>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.ayat}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 10,
        borderColor: 'orange',
        borderStyle: 'solid',
        borderWidth: 6,
        borderRadius: 10,
        flex: 1,
    },
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    number: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        marginLeft: 10,
        flex: 1,
    },
    ayat: {
        textAlign: 'right',
        fontSize: 20,
        marginBottom: 10,
        color: '#333',
    },
});

export default Detail;
