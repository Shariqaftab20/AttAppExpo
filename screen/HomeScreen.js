import React from 'react';
import { View, StyleSheet, ImageBackground, Text , Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import CustomButton from '../components/CustomButton';



//Body
const HomeScreen = ({ navigation }) => {

    const [errMsg, setErrMsg] = useState(null);
    const [location, setLocation] = useState(null);
    const [text, setText] = useState("Waiting...");

    const [hasCameraPermission, setCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrMsg('Permission to access location was denied.');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
            setCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);


    const GetLocation = async () => {
        if (errMsg) {
            setText(errMsg);
        } else if (location) {
            setText(JSON.stringify(location));
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if (hasCameraPermission === false) {
        return <Text>Gand Marao!</Text>
    }
    return <View style={styles.container}>
        <ImageBackground
            source={require("../assets/images/BG.jpg")}
            resizeMode="cover"
            style={{ flex: 1, justifyContent: 'flex-start', opacity: 0.5 }}
        >
            <View style={{ margin: 20 }}>

                <CustomButton text='Admin SighnUp' onPress={() => navigation.navigate('SignIn')} type="SECONDARY" />
                <CustomButton text='Take Attendence' onPress={() => pickImage()} type="SECONDARY" />
                <CustomButton text='Get Location' onPress={() => GetLocation()} type="SECONDARY" />
                {image && <Image source={{ uri: image }} style={{ height: 100, width: 100 }} />}
                <Text>{image}</Text>
                <Text>{text}</Text>
            </View>
        </ImageBackground>
    </View>
};
//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 50,
        //padding:20,
    },
    buttonStyle: {
        width: 100,
    }

});
//Export
export default HomeScreen;