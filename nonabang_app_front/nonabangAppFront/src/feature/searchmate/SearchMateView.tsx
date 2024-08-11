import { Text, View } from "react-native"
import NaverMapView,{} from 'react-native-nmap'
export const SearchMateView = () => {
    return(
        <View style={{borderWidth:1,flex:1}}>  
            <Text>?</Text>
            <NaverMapView style={{flex:1,}}/>
        </View>
    )
}