import { FlatList, Text, TextInput, View } from "react-native"
import { SubTitle } from "../../../components/SubTitle"
import { COLOR } from "../../../colors/colors"
import { Line } from "../../../components/Line"

export const ManageInfoSection = () => {
    const infoList = ["보증금", "월세"];

    return (
        <View style={{ padding: 15 }}>
            <SubTitle title="관리정보" />
            <Line />
            <Text style={{ fontSize: 15, color: COLOR.BUTTON_BLACK, marginVertical: 5 }}>관리비와 방 정보를 기입해주세요.</Text>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "row", height: 40, flex: 1, alignItems: "center" }}>
                    {
                        infoList.map((value) => (
                            <>
                                <View style={{ flex: 0.35 }}>
                                    <Text style={{ fontWeight: 700 }}>{value}</Text>
                                </View>
                                <View style={{ flex: 0.45 }}>
                                    <TextInput
                                        multiline
                                        style={{
                                            width: "95%",
                                            height: "90%",
                                            padding: 5,
                                            borderWidth: 1,
                                            borderColor: COLOR.BORDERSHADOW_BLACKLIGHT,
                                            borderRadius: 8
                                        }}
                                        placeholder="방의 위치, 연식, 등 알아서 해봐"
                                    />
                                </View>
                                <View style={{ flex: 0.2 }}>
                                    <Text>만원</Text>
                                </View>
                            </>
                        ))
                    }
                </View>
            </View>
            <View style={{ flexDirection: "row", height: 40, flex: 1 ,alignItems: "center" }}>
                    {
                        [...new Array(2)].map((value,index) => (
                            <>
                                <View style={{ flex: 0.35 }}>
                                    <Text style={{ fontWeight: 700 }}>{index ==0?'전체':'현재'}층 수</Text>
                                </View>
                                <View style={{ flex: 0.45 }}>
                                    <TextInput
                                        multiline
                                        style={{
                                            width: "95%",
                                            height: "90%",
                                            padding: 5,
                                            borderWidth: 1,
                                            borderColor: COLOR.BORDERSHADOW_BLACKLIGHT,
                                            borderRadius: 8
                                        }}
                                        placeholder="방의 위치, 연식, 등 알아서 해봐"
                                    />
                                </View>
                                <View style={{ flex: 0.2 }}>
                                    <Text>층</Text>
                                </View>
                            </>
                        ))
                    }
                </View>
            </View>
            )
}