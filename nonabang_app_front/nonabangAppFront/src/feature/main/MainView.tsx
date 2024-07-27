import { FlatList, SafeAreaView, Text, View } from "react-native"
import { TouchableCard } from "../../components/ToucahbleCard"
import { useNavigation } from "@react-navigation/native"
import { UserProfileCard } from "../userprofile/UserProfileCard"
import { COLOR } from "../../colors/colors"
import { MainBodyTop } from "./MainBodyTop"
import { MainBodyMiddle } from "./MainBodyMiddle"
import { MainBodybottom } from "./MainBodyBottom"

export const MainView = () => {
    const navigation = useNavigation<any>()
    const keyword = ["룸메찾기", "방 등록", "찜한 방", "커뮤니티"]
    const iconKeyword = []
    const onPressCard = (text: string) => {
        if (text == "룸메찾기") {
            console.log(1)
            navigation.navigate('MainStack', { screen: 'SearchMate' })
        }
        else if (text == "방 등록") {
            console.log(2)
            // navigation.navigate("AddRoomPage")
        }
        else if (text == "찜한 방") {
            console.log(3)
            // navigation.navigate("AddRoomPage")
        }
        else if (text == "커뮤니티") {
            console.log(4)
            // navigation.navigate("AddRoomPage")
        }
    }
    const MainHeader = () => {
        return (
            <View style={{ flex:1,flexDirection:"row",backgroundColor:"" ,}}>
                <View style={{flex:0.8,paddingHorizontal:15,justifyContent:"center"}}>
                <Text style={{ fontSize: 18,fontWeight:600 }}>광안동 1075-16</Text>
                </View>
                <View style={{flex:0.2,paddingHorizontal:15,justifyContent:"center"}}>
                    <View style={{borderRadius:100,width:35,height:35,borderWidth:1,alignSelf:"center"}}></View>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, }}>
                <View style={{flex:0.06}}>
                <MainHeader />
                </View>
                <View style={{flex:0.94,}}>
                    <View style={{flex:0.4,}}>
                        {/* body top */}
                        <MainBodyTop onPressCard={onPressCard}/>
                    </View>
                    <View style={{flex:0.3}}>
                        {/* body middle */}
                        <MainBodyMiddle/>
                    </View>
                    <View style={{flex:0.3}}>
                        {/* body bottom */}
                        <MainBodybottom/>
                    </View>
                </View>
                    
                
               
            </View>
        </SafeAreaView>
    )
}