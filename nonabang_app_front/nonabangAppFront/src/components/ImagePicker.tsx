import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import {launchImageLibrary} from 'react-native-image-picker';
export const ImagePicker = ({photoHandler}:any) => {
    const onPressPicker = async() => {
        const result = await launchImageLibrary({
            mediaType:"photo",
            quality:1
        });
        photoHandler(result)
    }
    useEffect(()=>{console.log("rendering")})
    return(
            <TouchableOpacity
                style={{width:"100%",height:"100%"}}
                onPress={()=>{onPressPicker()}}>
                    <Text>???</Text>
                </TouchableOpacity>
    )
}