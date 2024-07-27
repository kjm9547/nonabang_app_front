import { View } from "react-native"
import { MainView } from "../../feature/main/MainView"
import { COLOR } from "../../colors/colors"

export const MainScreen = () => {
    return(
        <View style={{backgroundColor:COLOR.BACKGROUND_WHITE_DOWN,flex:1}} >
        <MainView/>
        </View>
    )
}