import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../colors/colors"
import LottieView from "lottie-react-native"
import { Margin } from "../../components/Margin"
import { useEffect, useRef } from "react"
import { useNavigation } from "@react-navigation/native"

export const LandingView = () => {
    const animationRef = useRef<LottieView>(null);
    const navigation = useNavigation<any>()
    useEffect(() => {
      animationRef.current?.play();
  
      // Or set a specific startFrame and endFrame with:
      animationRef.current?.play(40, 98);
    }, []);
    const onPressStartButton = () => {
        navigation.navigate("SignIn")
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.6,}}>
                <Margin height={50}/>
                    <LottieView 
                        ref={animationRef}
                        source={require("../../assets/lottie/logoLottie.json")}
                        style={{width:"150%", height:"130%",alignSelf:"center",marginTop:-150}}
                        autoPlay
                        loop/>
            </View> 
            <View style={{flex:0.2,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:22,fontWeight:'bold',textAlign:"center"}}>
                    양도가 필요한 방을{"\n"} 공유해보세요.</Text>
            </View>
            <View style={{flex:0.2,alignItems:"center",}}>
                <TouchableOpacity
                    onPress={onPressStartButton} 
                    style={{
                        borderWidth:1,
                        height:50,
                        width:250,
                        borderRadius:15,
                        backgroundColor:COLOR.BUTTON_BLACK,
                        alignItems:"center",
                        justifyContent:"center"}}>
                    <Text style={{color:"white",fontSize:22}}>시작하기</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:COLOR.MAIN_ORANGE,
        flex:1
    }
})
