import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLOR } from "../../colors/colors"
import { useNavigation } from "@react-navigation/native"
import { useRegister } from "../../hooks/useRegister"
import { useEffect, useState } from "react"
import { RegisterAddressView } from "./RegisterAddressView"

export const ResistView = () => {
    const data = ["원룸", "오피스텔", "주택", "아파트"]
    const icon = ["house", "location-city", "home-work", "apartment"]
    const navigation = useNavigation<any>()
    const {
        setRoomType
    } = useRegister()
    const onPressItemPress = ({ item }: any) => {
        setRoomType(item)
        navigation.navigate("Register",{screen:"RegisterAddress"})
    }
    return (    
                 <SafeAreaView>
                <BackArrowHeader title="등록하기" />
                <View style={{ width: 360, alignSelf: "center", paddingLeft: 10, paddingTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>어떤 방을 찾으세요?</Text>
                </View>
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    keyExtractor={(i) => (`${i}`)}
                    horizontal={false}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    renderItem={({ item, index }) => (
                        <View style={styles.itemCardContainer}>
                            <TouchableOpacity
                                style={styles.itemCard}
                                onPress={() => { onPressItemPress(item) }}>
                                <View style={styles.cardBackground}>
                                    <Icon name={icon[index]} size={26} color={COLOR.MAIN_ORANGE} />
                                </View>
                                <Text style={{ fontWeight: 700 }}>{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: "80%"
    },
    itemCardContainer: {
        width: 180,
        height: 200,
        padding: 10
    },
    itemCard: {
        borderWidth: 0.7,
        borderRadius: 20,
        width: '100%',
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLOR.BORDERSHADOW_BLACKLIGHT,
        backgroundColor: COLOR.CARDBACKGROUND_WHITE
    },
    cardBackground: {
        borderRadius: 25,
        width: 50,
        height: 50,
        backgroundColor: COLOR.MAINICONBGCOLOR_RED,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    }
})