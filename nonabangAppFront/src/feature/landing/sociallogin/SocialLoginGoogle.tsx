import { Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../../colors/colors"
import { useGoogle } from "../../../hooks/useGoogle"
import { useEffect } from "react"
import { GoogleSigninButton } from "@react-native-google-signin/google-signin"


const {
    gogogleSignIn,
    googleConfig,
} = useGoogle()

export const SocialLoginGoogle = () => {
    useEffect(() => {
        googleConfig()

    }, [])
    return (
        <>
            <TouchableOpacity style={{
                width: "70%",
                height: 60,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 0.8,
                borderRadius: 20,
                marginBottom: 6,
                borderColor: COLOR.BORDERSHADOW_BLACK,
                backgroundColor: "white",
                flexDirection: "row"
            }}
                onPress={() => { gogogleSignIn() }}>
                <View style={{ flex: 0.25 }}>
                    <GoogleSigninButton
                        style={{ borderWidth: 10, borderColor: 'white' }}
                        size={GoogleSigninButton.Size.Icon}/>
                </View>
                <View style={{ flex: 0.65, }}>
                    <Text style={{
                        color: COLOR.BUTTON_BLACK,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}>구글로 계속하기</Text>
                </View>
            </TouchableOpacity>
        </>
    )
}