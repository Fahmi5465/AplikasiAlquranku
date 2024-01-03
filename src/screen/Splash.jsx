import React, { Component } from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import Logo from '../img/logo.png';
import BackgroundImage from '../img/background.jpg';

export class Splash extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
        };

        setTimeout(() => {
            this.setState({ isLogin: true });
            this.props.navigation.navigate('Home');
        }, 2500);
    }

    render() {
        return (
            <ImageBackground source={BackgroundImage} style={styles.background}>
                <View style={styles.container}>
                    <Image source={Logo} style={styles.logo} />
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'transparent',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default Splash;
