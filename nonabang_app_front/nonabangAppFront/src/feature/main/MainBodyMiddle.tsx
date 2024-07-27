import { StyleSheet, Text, View } from "react-native"

export const MainBodyMiddle = () => {
    return(
        <View style={styles.container}>
            <View style={styles.itemView}>
                <View style={{flex:0.1,borderWidth:1}}>
                    <Text>근처 방 찾기</Text>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        borderWidth:1
    },
    itemView:{
        borderWidth:1,
        height:"80%"
    }
})