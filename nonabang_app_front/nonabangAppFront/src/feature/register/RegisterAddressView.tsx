import { Pressable, SafeAreaView, StyleSheet, TextInput, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import Postcode,{} from '@actbase/react-daum-postcode';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export const RegisterAddressView = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BackArrowHeader title="주소검색" />
            <GooglePlacesAutocomplete
            fetchDetails={true}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        console.log("???");
      }}
      styles={{textInput:{borderWidth:1},container:{borderWidth:1}}}
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
    }
})