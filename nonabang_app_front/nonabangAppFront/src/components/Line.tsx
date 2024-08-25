import { View } from "react-native"
import { COLOR } from "../colors/colors"

export const Line = () => {
    return (
        <View style={{ borderWidth: 0.3, borderColor: COLOR.BORDERSHADOW_BLACK, width: "75%", marginTop: 5 }} />
    )
}