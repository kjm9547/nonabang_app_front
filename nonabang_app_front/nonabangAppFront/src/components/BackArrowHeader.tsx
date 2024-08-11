import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR } from "../colors/colors"
import { useNavigation } from "@react-navigation/native"
type props = {
    title:string
}
export const BackArrowHeader = ({title}:props) => {
    const navigation = useNavigation<any>();
    return(
        <TouchableOpacity style={{flexDirection:"row",
        alignItems:"center",
        height:35,
        borderBottomWidth:0.6,
        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
        }}
        onPress={()=>{navigation.pop()}}
        >
            <Icon name = "arrow-back-ios" size={16} style={{left:5,position:"absolute"}}/>
            <View style={{width:"100%"}}>
                <Text style={{textAlign:"center",fontSize:16}}>
                    {title}
                </Text>
            </View>
            
            
            
        </TouchableOpacity>
    )
}