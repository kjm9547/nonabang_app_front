import LottieView from "lottie-react-native"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../colors/colors"

export const MainBodyTop = ({onPressCard}:any) => {
    
    const BackView = ({text}:any) => {
        
        if(text == "룸메찾기"){
            return(
                <>
                <Image 
                style={{width:"100%",height:"100%",borderRadius:25,position:"absolute"}}
                source={require("../../assets/img/mapImage.jpg")}/>
                <LottieView 
                    autoPlay
                    style={{zIndex:1,width:35,height:100,position:"absolute",top:15,left:25}}
                source={require("../../assets/lottie/mapLottie.json")}/>
                <LottieView 
                    autoPlay
                    style={{zIndex:1,width:50,height:100,position:"absolute",top:45,left:55}}
                source={require("../../assets/lottie/mapLottie.json")}/>
                <LottieView 
                    autoPlay
                    style={{zIndex:1,width:40,height:80,position:"absolute",top:45,left:105}}
                source={require("../../assets/lottie/mapLottie.json")}/></>
            )
        }
        else{
           return(
                <>
                <LottieView 
                    autoPlay
                    style={{zIndex:1,width:150,height:120,position:"absolute",top:25,left:15}}
                    speed={0.6}
                    source={require("../../assets/lottie/lottieRegister.json")}/>
                </>
            )
        }
    }
    const TouchableCard = ({
        title
    }: any) => {
        return (
            <TouchableOpacity 
                style={styles.touchableCard}
                onPress={()=>{onPressCard(title)}}
                >
               <BackView text={title}/>
                    <Text style={{top:150,fontSize:18,fontWeight:"bold"}}>{title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View
            style={styles.container}>
            <TouchableCard title="룸메찾기" />
            <TouchableCard title="내방등록" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        padding: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    touchableCard: {
        borderWidth: 0.6,
        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
        flex: 0.5,
        borderRadius: 25,
        marginRight: 10,
        height: "80%",
        alignItems:"center",
        backgroundColor:COLOR.CARDBACKGROUND_WHITE
    }
})