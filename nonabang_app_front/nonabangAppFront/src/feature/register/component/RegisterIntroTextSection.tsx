import { Text, TextInput, View } from "react-native"
import { SubTitle } from "../../../components/SubTitle"
import { COLOR } from "../../../colors/colors"
import { Line } from "../../../components/Line"

export const RegisterIntroTextSection=()=>{
    return(
        <View style={{ padding: 15 }}>
            <SubTitle title="소개글"/>
            <Line/>
            <Text style={{fontSize:15,color:COLOR.BUTTON_BLACK,marginVertical:5}}>방을 소개하는 글을 작성해주세요.</Text>
            <View style={{
                height:100,
            }}>
                <TextInput
                    multiline
                    style={{
                        height:"100%",
                        padding:5,
                        borderWidth:1,
                        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
                        borderRadius:8
                    }}
                    placeholder="방의 위치, 연식, 등 알아서 해봐"
                />

            </View>
        </View>
    )
}