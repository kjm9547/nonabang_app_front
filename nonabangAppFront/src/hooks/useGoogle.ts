import { GoogleSignin, isErrorWithCode, statusCodes } from "@react-native-google-signin/google-signin";

export const useGoogle = () =>{
    const googleConfig = () =>{
        GoogleSignin.configure({
            webClientId: '209891741352-hst6oqhdbc8bdnns016nboh5m9t1njaq.apps.googleusercontent.com',
              iosClientId: '209891741352-hst6oqhdbc8bdnns016nboh5m9t1njaq.apps.googleusercontent.com', //파이어베이스 서버 이용을 안할경우 필요한듯
          });
    }
    const gogogleSignIn = async () => {
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
    return{
        googleConfig,
        gogogleSignIn
    }
}