import { FlatList, SafeAreaView, Text, View } from "react-native"
import { BackArrowHeader } from "../../components/BackArrowHeader"
import { TouchableCard } from "../../components/ToucahbleCard"
import { COLOR } from "../../colors/colors"

export const ResistView = () => {
    const data = ["원룸","오피스텔","주택","아파트"]
    return (
        <SafeAreaView>
            <BackArrowHeader title="등록하기"/>
            <View>
                <Text>등록</Text>
            </View>
            <FlatList
                data={data}
                scrollEnabled={false}
                keyExtractor={(i)=>(`${i}`)}
                horizontal={false}
                numColumns={2}
                contentContainerStyle={{alignItems:"center"}}
                renderItem={({item,index})=>(
                    <View style={{width:180,height:200,borderWidth:1,borderColor:COLOR.BORDERSHADOW_BLACKLIGHT}}>
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}