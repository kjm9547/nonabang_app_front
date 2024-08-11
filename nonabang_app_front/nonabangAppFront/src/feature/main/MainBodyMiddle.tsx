import { FlatList, StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/colors"
import  Icon from "react-native-vector-icons/MaterialIcons"

export const MainBodyMiddle = () => {
    const data = ["원룸","오피스텔","주택","아파트"]
    const icon = ["house","location-city","home-work","apartment"]
    return(
        <View style={styles.container}>
            <View style={styles.itemView}>
                <View style={{
                    flex:0.2,
                    paddingHorizontal:20,
                    paddingTop:20,
                    }}>
                    <Text style={{fontSize:18,fontWeight:800,color:COLOR.BUTTON_BLACK}}>근처 방 찾기</Text>
                </View>
                <FlatList 
                    contentContainerStyle={styles.listContainer}
                    data={data}
                    renderItem={({item,index})=>(
                            <><View style={styles.listItem}>
                                <Icon name={icon[index]} size={28} color={COLOR.MAIN_ORANGE}/>
                            </View>
                            <View style={{alignItems:"center",marginLeft:10,marginTop:8}}>
                            <Text style={{fontWeight:600,}}>{item}</Text>
                            </View>
                            </>
                    )}
                    >
                   
                </FlatList>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:15,
        
        
    },
    itemView:{
        borderWidth:0.6,
        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
        height:"80%",
        borderRadius:20,
        backgroundColor:COLOR.BACKGROUND_WHITE_DOWN
    },
    listContainer:{
        flexDirection:"row",alignItems:"center",justifyContent:"center",flex:0.8,width:'100%'
    },
    listItem:{
        width:70,
        height:70,
        borderRadius:55,
        marginLeft:10,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLOR.MAINICONBGCOLOR_RED,
        
    }
})