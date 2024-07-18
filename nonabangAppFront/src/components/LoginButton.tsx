import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../colors/colors"
import { GoogleSignin, GoogleSigninButton, isErrorWithCode, statusCodes } from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react"
import NaverLogin, { GetProfileResponse, NaverLoginResponse } from "@react-native-seoul/naver-login"
import { useGoogle } from "../hooks/useGoogle"
import { useNaver } from "../hooks/useNaver"
// import  KakaoLogin from '@react-native-seoul/kakao-login';
type props = {
  title: string,
  image: string,
  onPressLogButton: () => void
}
const {
  gogogleSignIn,
  googleConfig,
} = useGoogle()
const {
  naverInitialize,
  naverLogin,
} = useNaver()

const [success, setSuccessResponse] =
  useState<NaverLoginResponse['successResponse']>();

const [failure, setFailureResponse] =
  useState<NaverLoginResponse['failureResponse']>();
const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

export const LoginButton = ({
  title,
  image,
  onPressLogButton }: props) => {
  useEffect(() => {
    googleConfig()
    naverInitialize()
  }, [])
  const login = (key: string) => {
    if (key == "구글") {
      return gogogleSignIn
    }
    else if (key == "네이버") {
      return naverLogin
    }
  }
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
        backgroundColor: title == "구글" ? "white" : title == "네이버" ? "yellow" : COLOR.BUTTON_BLACK,
      }}
        onPress={() => { login(title) }}
      >
        <Text style={{
          color: title == "노나방으" ? "white" : COLOR.BUTTON_BLACK,
          fontSize: 16,
          fontWeight: "bold"
        }}>{title}로 계속하기</Text>
      </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  LoginButtonStyle: {

  }
})