import { StyleSheet, Text, View } from "react-native"
import { COLOR } from "../../colors/colors"

export const MainBodybottom = () => {
    const TouchbleCard = ({title}:any) => {
        return(
            <View style={styles.cardStyle}>
                <View style={styles.iconCircle}/>
                <Text>{title}</Text>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.card}>
            <TouchbleCard title="찜 목록"/>
            </View>
            <View style={styles.card}>
                <TouchbleCard title="커뮤니티"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingTop:20
    },
    card:{
        flex:0.5,
        
        alignItems:"center"
    },
    cardStyle:{
        borderWidth:1,
        borderColor:COLOR.BORDERSHADOW_BLACKLIGHT,
        backgroundColor:COLOR.BACKGROUND_WHITE_DOWN,
        alignItems:"center",
        borderRadius:20,
        height:"60%",
        width:"90%",
        justifyContent:"center"
    },
    iconCircle:{
        width:60,
        height:60,
        borderRadius:35,
        marginBottom:20,
        backgroundColor:COLOR.MAINICONBGCOLOR_RED
    }
})