import { Text, TextInput, View } from "react-native"
import { SubTitle } from "../../../components/SubTitle"
import { COLOR } from "../../../colors/colors"
import { Line } from "../../../components/Line"

export const RoomOptionSection = () =>{
    return(
        <View style={{ padding: 15 }}>
            <SubTitle title="옵션 정보"/>
            <Line/>
            <Text style={{fontSize:15,color:COLOR.BUTTON_BLACK,marginVertical:5}}>옵션 정보를 선택해주세요.</Text>
            <View style={{
                height:100,
            }}>
                <View style={{borderWidth:1,width:50,height:50,borderRadius:25,}}>
            {/* 모달 버튼 추가하기  */}
                </View>

            </View>
        </View>
    )
}