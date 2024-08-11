import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import { useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR } from "../../colors/colors"
import { ImagePicker } from "../../components/ImagePicker"
export const RegisterDetailView = () => {
    //상세주소, 방사진, 소개글, 월세정보, 옵션, 방 정보(평수, 층, 엘리베이터) 입력 추가
    const [photoData, setPhotoData] = useState([]);
    const SubTitle = ({ title }: any) => {
        return (<Text style={styles.fontSubTitle}>{title}</Text>)
    }
    const Line = () => {
        return (
            <View style={{ borderWidth: 0.3, borderColor: COLOR.BORDERSHADOW_BLACK, width: "75%", marginTop: 5 }} />
        )
    }
    return (
        <SafeAreaView>
            <BackArrowHeader title="정보 입력" />
            <View>
                <View style={{ padding: 15, flexDirection: "row" }}>
                    <Icon name="meeting-room" size={45} color={COLOR.MAIN_ORANGE} />
                    <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
                        추가 정보를 입력하고 {'\n'}방을 공유해보세요.
                    </Text>
                </View>
                <View style={{ padding: 15, height: 200, }}>
                    <SubTitle title="방 사진" />
                    <Line />
                    <View style={{ height: "100%", justifyContent: "center" }}>
                        <View style={styles.photoSelectView}>
                            <View style={styles.photoSelectIcon}>
                                <Text style={{ fontSize: 26, color: COLOR.CARDBACKGROUND_WHITE }}>+</Text>
                            </View>
                            <ImagePicker />
                        </View>

                    </View>
                </View>
                <View style={{ padding: 15 }}>
                    <SubTitle title="상세 주소" />
                    <Line />
                    <View style={styles.addressBox}>
                        <Text>이전 페이지에서 입력한 주소 정보</Text>
                    </View>
                    <View style={styles.addressBox}>
                        <Text>사용자가 입력할 상세 정보</Text>
                    </View>

                </View>
                <View style={{ padding: 15 }}>
                    <SubTitle title="방 사진" />
                    <Line />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    addressBox: {
        borderWidth: 1,
        marginTop:10
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
        alignItems: "center"
    },
    photoSelectIcon: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        position: "absolute",
        height: "30%",
        width: "38%"
    }
})