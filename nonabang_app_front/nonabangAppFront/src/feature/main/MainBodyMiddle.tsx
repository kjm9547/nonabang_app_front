import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/colors"
import  Icon from "react-native-vector-icons/FontAwesome"

export const MainBodyMiddle = () => {
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
                <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",flex:0.8,width:'100%'}}>
                    {[...Array(4)].map(()=>{
                        return(
                            <View style={{width:70,height:70,borderRadius:55,marginLeft:10,alignItems:"center",justifyContent:"center",backgroundColor:COLOR.MAINICONBGCOLOR_RED,}}>
                                <Icon name="building" size={22} color={COLOR.MAIN_ORANGE}/>
                            </View>
                        )
                    })}
                </View>
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
        backgroundColor:COLOR.CARDBACKGROUND_WHITE
    }
})