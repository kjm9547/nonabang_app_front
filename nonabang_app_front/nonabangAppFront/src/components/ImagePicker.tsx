import { Text, TouchableOpacity, View } from "react-native"
import {launchImageLibrary} from 'react-native-image-picker';
export const ImagePicker = () => {
    const onPressPicker = async() => {
        const result = await launchImageLibrary({
            mediaType:"photo",
            quality:1
        });
    }
    
    return(
            <TouchableOpacity
                style={{flex:1}}
                onPress={onPressPicker}>
                </TouchableOpacity>
    )
}