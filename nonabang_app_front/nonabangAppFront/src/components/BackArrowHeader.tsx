import { Text, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR } from "../colors/colors"
export const BackArrowHeader = ({title}:any) => {
    return(
        <View style={{flexDirection:"row",
        alignItems:"center",
        height:35,
        borderBottomWidth:0.6,
        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
        
        }}>
            <Icon name = "arrow-back-ios" size={16} style={{left:5,position:"absolute"}}/>
            <View style={{width:"100%"}}>
                <Text style={{textAlign:"center",fontSize:16}}>
                    {title}
                </Text>
            </View>
            
            
            
        </View>
    )
}