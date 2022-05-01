import React, { useState, useEffect, useRef } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';


function Detector() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [openCamera, setOpenCamera] = useState(false)
    const [image, setImage] = useState(null)
    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(()=>{
        console.log(openCamera)
    },[openCamera])

    

    const takePicture = async ()=>{
        if (cameraRef.current) {
            const options = { quality: 0.7, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            console.log(data.uri)
            setImage(data.uri)
            setOpenCamera(false)
          }
    }
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        <Button title="Open Camera" onPress={()=>{
            setOpenCamera(true)
        }}/>
        {openCamera && <View style={styles.container}>
            <Camera ref={cameraRef} style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    
                    onPress={() => {
                        console.log(type)
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={styles.text}> Flip </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={takePicture}
                >
                    <Text style={styles.text}>Take Picture</Text>
                </TouchableOpacity>
            </View>
            </Camera>
        </View>}
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:"100%",
      paddingBottom:150,
      
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
    },
    button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });

export default Detector