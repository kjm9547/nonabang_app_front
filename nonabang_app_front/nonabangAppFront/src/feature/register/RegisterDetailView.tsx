import { FlatList, Image, Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR } from "../../colors/colors"
import { RegisterPhoto } from "./component/RegisterPhotoSection"
import { ResgisterAddressSection } from "./component/RegisterAddressSection"
import { RegisterIntroTextSection } from "./component/RegisterIntroTextSection"
import { GestureHandlerRootView, TouchableWithoutFeedback } from "react-native-gesture-handler"
import { ManageInfoSection } from "./component/ManagetInfoSection"
import { RoomOptionSection } from "./component/RoomOptionSection"

export const RegisterDetailView = () => {
    //상세주소, 방사진, 소개글, 월세정보, 옵션, 방 정보(평수, 층, 엘리베이터) 입력 추가
    
    
    
    const SubTitle = ({ title }: any) => {
        return (<Text style={styles.fontSubTitle}>{title}</Text>)
    }
  
  
    const RegisterHeader = () => {
        return (
            <View style={{ padding: 15, flexDirection: "row" }}>
                <Icon name="meeting-room" size={45} color={COLOR.MAIN_ORANGE} />
                <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
                    추가 정보를 입력하고 {'\n'}방을 공유해보세요.
                </Text>
            </View>
        )
    }
    
    return (
        <GestureHandlerRootView>
        <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <BackArrowHeader title="정보 입력" />
            <ScrollView>
                <RegisterHeader />
                <RegisterPhoto/>
                <ResgisterAddressSection/>
                <RegisterIntroTextSection/>
                {/* <View style={{ padding: 15 }}>
                    <SubTitle title="상세 주소" />
                    <Line />
                    <View style={styles.addressBox}>
                        <Text>{getAddress()}</Text>
                    </View>
                    <View style={styles.addressBox}>
                        <Text>사용자가 입력할 상세 정보</Text>
                    </View>

                </View>
                <View style={{ padding: 15 }}>
                    <SubTitle title="방 사진" />
                    <Line />
                </View> */}
                <ManageInfoSection/>
                <RoomOptionSection/>
                <View style={{height:300,alignItems:"center"}}>
                    <View  style={{
                        top:70,
                        backgroundColor:COLOR.MAIN_ORANGE,
                        width:150,
                        height:45,
                        borderRadius:20,
                        alignItems:"center",
                        justifyContent:"center"}}>
                        <Text style={{color:COLOR.BUTTON_BLACK,fontSize:20,fontWeight:600}}>등록</Text>
                    </View>
                </View>
            </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    addressBox: {
        borderWidth: 1,
        marginTop: 10
    },
    fontSubTitle: {
        fontSize: 16,
        fontWeight: "800"
    },
    photoSelectView: {
        borderWidth: 1,
        borderColor: COLOR.BACKGROUND_WHITE_DOWN,
        height: "90%",
        width: 120,
        borderRadius: 20,
        backgroundColor: COLOR.BORDERSHADOW_BLACKLIGHT,
        justifyContent: "center",
        alignItems: "center",
    },
    photoSelectIcon: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        position: "absolute",
        height: "30%",
        width: "38%"
    },
    submitButton: {

    }
})