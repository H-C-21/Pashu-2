import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera, CameraType } from 'expo-camera';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';
import { COLORS } from '../../constants';

export default function ImagePickerExample() {
 
  const cameraRef = React.useRef(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(false);

  const [loading, setLoading] = useState(false);

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  function openCamera(){
    setCamera(true);
  } 

    async function submitImageHandler() {
        
        setLoading(true);

        if(!image){
            const {uri} = await cameraRef.current.takePictureAsync();    
            setImage(uri);
            setCamera(false)
        }

      
        // const base64Image = await FileSystem.readAsStringAsync(image, { encoding: FileSystem.EncodingType.Base64 });
        // const base64Contents = await FileSystem.readAsStringAsync(fileUri, { encoding: FileSystem.EncodingType.Base64 });
        const formData = new FormData();
        formData.append('image', {
            uri: image,
            name: 'image.png' // Adjust the image name as per your requirements
        });
        
        const options = {
            method: 'POST',
            url: 'https://detect-skin-disease.p.rapidapi.com/facebody/analysis/detect-skin-disease',
            headers: {
                'Content-Type': 'multipart/form-data', // Use 'multipart/form-data' for form data requests
                'X-RapidAPI-Key': 'b4612350a1msh7934fd66a3eb1ffp18d59ajsn4792b10abe05',
                'X-RapidAPI-Host': 'detect-skin-disease.p.rapidapi.com'
            },
            data: formData
        };

        try {
            const response = await axios.request(options);
            setLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error(image);
        }
        setLoading(false);
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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    
    {!camera && !image &&
      <View>
      <View>
        <Button title="Pick an image from camera roll" onPress={pickImage} color={COLORS.tertiary}/>
      </View>

      <View className = "mt-4">
      <Button title="Take Picture Now" onPress={openCamera} color={COLORS.tertiary} />
      </View>
      </View>
    }
       {image && <Image source={{ uri: image }} style={{ width: 600, height: 500 }} />} 

       {camera && 
       <View>
        <Camera ref={cameraRef}  type={type} style={{width: 600, height: 500}}>
        </Camera>
        </View>
       }

       {!loading ? ((camera || image) && (
        <View className="mt-4">
        <Button title="Submit" onPress={submitImageHandler} style={{marginTop: '3rem'}} color={COLORS.tertiary} /> 
        <Button title="Go Back" onPress={()=>{setCamera(false); setImage(false)}} style={{marginTop: '2rem'}} color={COLORS.tertiary}/>
        </View>
       )) : (
        <ActivityIndicator animating={true} color={COLORS.secondary} style={{marginTop: '2rem', width: '4rem'}} size={'large'} />
       )
       }
       

      <View >

      
    </View>
    </View>
  );
}
