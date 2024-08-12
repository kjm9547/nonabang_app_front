import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import { useEffect, useState } from "react"
import Icon from 'react-native-vector-icons/MaterialIcons'
import { COLOR } from "../../colors/colors"
import { ImagePicker } from "../../components/ImagePicker"
import { useRegister } from "../../hooks/useRegister"

export const RegisterDetailView = () => {
    //상세주소, 방사진, 소개글, 월세정보, 옵션, 방 정보(평수, 층, 엘리베이터) 입력 추가
    const [photoData, setPhotoData] = useState([{ id: '0', value: '' }]);
    useEffect(() => { console.log(getAddress()) }, [])
    const { getAddress } = useRegister()
    const SubTitle = ({ title }: any) => {
        return (<Text style={styles.fontSubTitle}>{title}</Text>)
    }
    const Line = () => {
        return (
            <View style={{ borderWidth: 0.3, borderColor: COLOR.BORDERSHADOW_BLACK, width: "75%", marginTop: 5 }} />
        )
    }
    const SubmitButton = () => {
        return (
            <View style={styles.submitButton}>

            </View>
        )
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
    const RegisterPhoto = () => {
        const photoHandler = (data: any) => {
            const array = [...photoData]
            array.unshift({ id: `${array.length + 1}`, value: data })
            setPhotoData(array)
            console.log(photoData)
        }
        const PhotoCardView = ({ item }:any) => {
            
            if (item.id == 0) {
                return (
                    <View style={styles.photoSelectView}>
                        <View style={styles.photoSelectIcon}>
                            <Text style={{ fontSize: 26, color: COLOR.CARDBACKGROUND_WHITE }}>+</Text>
                        </View>
                        <ImagePicker photoHandler={photoHandler} />
                    </View>
                )
            }else{
                return(
                <View style={styles.photoSelectView}>
                <View style={styles.photoSelectIcon}>
                    <Text style={{ fontSize: 26, color: COLOR.CARDBACKGROUND_WHITE }}>???</Text>
                </View>
                <ImagePicker photoHandler={photoHandler} />
            </View>
            )
            }
        }
        return (
            <View style={{ padding: 15, height: 200, }}>
                <SubTitle title="방 사진" />
                <Line />
                <View >
                    <FlatList
                        data={photoData}
                        contentContainerStyle={{ height: "100%", justifyContent: "center" }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <PhotoCardView item={item} />)}>
                    </FlatList>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <BackArrowHeader title="정보 입력" />
            <View>
                <RegisterHeader />
                <RegisterPhoto />
                <View style={{ padding: 15 }}>
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
                </View>
            </View>
            <SubTitle />
        </SafeAreaView>
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