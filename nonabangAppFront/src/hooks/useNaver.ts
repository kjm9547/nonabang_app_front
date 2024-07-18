import NaverLogin, { GetProfileResponse, NaverLoginResponse } from "@react-native-seoul/naver-login"
export const useNaver = () => {
    const consumerKey = 'UmO1uCmuKruy5Dh6e6o0';
    const consumerSecret = 'TtGvVv2Ecw';
    const appName = 'nonabangAppFront';
    const serviceUrlSchemeIOS = 'org.reactjs.native.example.nonabangAppFront';
    const naverInitialize = () => {
        NaverLogin.initialize({
            appName,
            consumerKey,
            consumerSecret,
            serviceUrlSchemeIOS,
            disableNaverAppAuthIOS: true,
        });
    }
    const naverLogin = async (): Promise<any> => {
        const { failureResponse, successResponse } = await NaverLogin.login();
        return { failureResponse, successResponse }
    };

    return {
        naverInitialize,
        naverLogin
    }
}