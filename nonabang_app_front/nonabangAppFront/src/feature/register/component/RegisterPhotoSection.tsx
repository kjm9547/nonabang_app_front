import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import {  useState } from "react"
import { COLOR } from "../../../colors/colors"
import { ImagePicker } from "../../../components/ImagePicker" 
import { SubTitle } from "../../../components/SubTitle"
import { Line } from "../../../components/Line"

export const RegisterPhoto = () => {
    const [photoData, setPhotoData] = useState([{ id: '0', value: '' }]);
    const photoHandler = (data: any) => {
        const array = [...photoData]
        array.unshift({ id: `${array.length + 1}`, value: data })
        setPhotoData(array)
        console.log(photoData)
    }
    const PhotoCardView = ({ item }: any) => {
        console.log("item", item.value.assets)
        if (item.id == 0) {
            return (
                <View style={styles.photoSelectView}>
                    <View style={styles.photoSelectIcon}>

                        <Text style={{ fontSize: 26, color: COLOR.CARDBACKGROUND_WHITE }}>+</Text>
                    </View>
                    <ImagePicker photoHandler={photoHandler} />
                </View>
            )
        } else {
            return (
                <View style={styles.photoSelectView}>
                    <Image
                        style={{ width: "100%", height: "100%",borderRadius: 25}}
                        source={{ uri: item.value.assets[0].uri }} />
                    
                </View>
            )
        }
    }
    return (
        <View style={{ padding: 15, height: 220, }}>
            <SubTitle title="방 사진" />
            <Line/>
            <View >
                <FlatList
                    data={photoData}
                    contentContainerStyle={{ height: "98%", justifyContent: "center" ,marginTop:10}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <PhotoCardView item={item} />)}>
                </FlatList>
            </View>
        </View>
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