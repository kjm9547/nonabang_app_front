import LottieView from "lottie-react-native"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type props ={
    title:any,
    width:any,
    height:any,
    onPressCard:(props:any)=>void,
    marginRight:any,
    borderRadius:any
}
export const TouchableCard = ({
    title,
    width,
    height,
    onPressCard,
    marginRight,
    borderRadius
}: props) => {
    return (
        <TouchableOpacity style={{
            borderWidth:1,
            width:width,
            height:height,
            marginRight:marginRight,
            borderRadius:borderRadius
        }}
        onPress={()=>{onPressCard(title)}}
        >
             <LottieView
                    source={require("../assets/lottie/mapLottie.json")}
                    autoPlay
                    resizeMode="cover"
                    style={{ alignSelf: "center",width:"100%", height:"100%",borderWidth:1,borderRadius:500,backgroundColor:'red' }}
                />
            <Text>{title}</Text>
        </TouchableOpacity>

    )
}

