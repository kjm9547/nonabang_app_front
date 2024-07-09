import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../colors/colors"

type props = {
    title:string,
    image:string,
    onPressLogButton:()=>void
}
export const LoginButton = ({
    title,
    image,
    onPressLogButton}:props) => {
    return(
        <>
            <TouchableOpacity style={{
                 width:"70%",
                 height:60,
                 alignItems:"center",
                 justifyContent:"center",
                 borderWidth:0.8,
                 borderRadius:20,
                 marginBottom:6,
                 borderColor:COLOR.BORDERSHADOW_BLACK,
                 backgroundColor:title=="구글"?"white":title=="카카오"?"yellow":COLOR.BUTTON_BLACK,
            }}>
                <Text style={{color:title=="노나방"?"white":COLOR.BUTTON_BLACK}}>{title}로 계속하기</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    LoginButtonStyle:{
       
    }
})