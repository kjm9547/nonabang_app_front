import { Image, Text, View } from "react-native"
import { COLOR } from "../../colors/colors"
import LottieView from "lottie-react-native"

export const UserProfileCard = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center"
        }}>
            <View style={{ flex: 0.3,justifyContent:"center" }}>
                <Text style={{ fontSize: 24 }}>노나방에서{'\n'}룸메이트를 찾아보세요.</Text>
            </View>
            <View style={{ flex: 0.7 }}>
         
                
            
              
                
                <View style={{borderWidth:1,borderRadius:250,width:200,height:200,backgroundColor:"#ffffff00"}}>
                <LottieView
                    source={require("../../assets/lottie/mapLottie.json")}
                    autoPlay
                    resizeMode="cover"
                    style={{ alignSelf: "center",width:"100%", height:"100%",borderWidth:1,borderRadius:500,backgroundColor:'red' }}
                />
                    </View>
                    
                
                
            </View>
        </View>
    )
}