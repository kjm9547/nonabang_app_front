import { FlatList, SafeAreaView, Text, View } from "react-native"
import { TouchableCard } from "../../components/ToucahbleCard"
import { useNavigation } from "@react-navigation/native"

export const MainView = () => {
    const navigation = useNavigation<any>()
    const keyword = ["룸메 찾기","방 등록","텍스트 미정1","텍스트 미정2"]
    const iconKeyword = []
    const onPressCard = (text:string) =>{
        if(text == "룸메 찾기") {
            console.log(1)
            navigation.navigate('MainStack',{screen:'SearchMate'})
        }
        else if(text == "방 등록") {
            console.log(2)
            // navigation.navigate("AddRoomPage")
        }
        else if(text == "텍스트 미정1") {
            console.log(3)
            // navigation.navigate("AddRoomPage")
        }
        else if(text == "텍스트 미정2") {
            console.log(4)
            // navigation.navigate("AddRoomPage")
        }
    }
    return(
        <SafeAreaView style={{flex:1}}>
        <View style={{flex:1,borderWidth:1}}>
            <View style={{flex:0.35,borderWidth:1}}>

            </View>
            <View style={{flex:0.65,borderWidth:1,flexDirection:"column"}}>
                <FlatList
                    scrollEnabled={false}
                    data={keyword}
                    numColumns={2}
                    renderItem={({index})=>{return(
                        <TouchableCard 
                        title={keyword[index]}
                        onPressCard={onPressCard}
                        width={180}
                        height={180}
                        marginRight={10}
                        borderRadius={25}/>
                    )}}
                    />
                
            </View>
            
            
        </View>
        </SafeAreaView>
    )
}