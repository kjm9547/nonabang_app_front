import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import Postcode,{} from '@actbase/react-daum-postcode';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState } from "react";
import { COLOR } from "../../colors/colors";
import { useNavigation } from "@react-navigation/native";
export const RegisterAddressView = () => {
   const navigation = useNavigation<any>()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackArrowHeader title="주소검색" />
            <GooglePlacesAutocomplete
            fetchDetails={true}
      placeholder='주소를 검색해주세요. 예) 부산 광역시 수영구'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        navigation.navigate("RegisterDetail")
      }}
      styles={{textInput:{borderBottomWidth:1,borderBottomColor:COLOR.BORDERSHADOW_BLACKLIGHT},}}
      query={{
        key: 'AIzaSyCjQsMWoaI1dEMf_Glzr1r_P21GllNa3hM',
        language: 'ko',
        components:"country:kr"
      }}
    />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        flex: 1,
        height: "100%"
    },
    inputbox:{
        borderWidth:1
    },
})