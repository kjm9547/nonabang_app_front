import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../colors/colors"
import {GoogleSignin,GoogleSigninButton,isErrorWithCode,statusCodes} from "@react-native-google-signin/google-signin"
import { useEffect, useState } from "react"
// import  * as KakaoLogin from '@react-native-seoul/kakao-login';
type props = {
    title:string,
    image:string,
    onPressLogButton:()=>void
}
GoogleSignin.configure({
    webClientId: '209891741352-hst6oqhdbc8bdnns016nboh5m9t1njaq.apps.googleusercontent.com',
      iosClientId: '209891741352-hst6oqhdbc8bdnns016nboh5m9t1njaq.apps.googleusercontent.com', //파이어베이스 서버 이용을 안할경우 필요한듯
  });
  const [state,setState] = useState<any>()
//   const login = () => {
//     KakaoLogin.login().then((result) => {
//         console.log("Login Success", JSON.stringify(result));
//         getProfile();
//     }).catch((error) => {
//         if (error.code === 'E_CANCELLED_OPERATION') {
//             console.log("Login Cancel", error.message);
//         } else {
//             console.log(`Login Fail(code:${error.code})`, error.message);
//         }
//     });
// };
  
// const getProfile = () => {
//     KakaoLogin.getProfile().then((result) => {
//         console.log("GetProfile Success", JSON.stringify(result));
//     }).catch((error) => {
//         console.log(`GetProfile Fail(code:${error.code})`, error.message);
//     });
// };

export const LoginButton = ({
    title,
    image,
    onPressLogButton}:props) => {
        const _signIn = async () => {
            try {
              await GoogleSignin.hasPlayServices();
              const userInfo = await GoogleSignin.signIn();
              console.log(userInfo)
              
            } catch (error) {
              if (isErrorWithCode(error)) {
                switch (error.code) {
                  case statusCodes.SIGN_IN_CANCELLED:
                    // user cancelled the login flow
                    break;
                  case statusCodes.IN_PROGRESS:
                    // operation (eg. sign in) already in progress
                    break;
                  case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    // play services not available or outdated
                    break;
                  default:
                  // some other error happened
                }
              } else {
                // an error that's not related to google sign in occurred
              }
            }
          };
    return(
        <>
            <TouchableOpacity style={{
                 width:"70%",
                 height:60,
                 alignItems:"center",
                 justifyContent:"center",
                 borderWidth:0.8,
                 borderRadius:20,
                 marginBottom:6,
                 borderColor:COLOR.BORDERSHADOW_BLACK,
                 backgroundColor:title=="구글"?"white":title=="카카오"?"yellow":COLOR.BUTTON_BLACK,
            }}
                onPress={_signIn}
            >
                <Text style={{
                    color:title=="노나방으"?"white":COLOR.BUTTON_BLACK,
                    fontSize:16,
                    fontWeight:"bold"}}>{title}로 계속하기</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    LoginButtonStyle:{
       
    }
})