import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { COLOR } from "../../colors/colors"
import { LoginButton } from "../../components/LoginButton"
import { useState } from "react"

export const SignInView = () => {
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    return(
        <SafeAreaView style={styles.container}>
            <View style={{borderWidth:1,flex:0.2}}>
                {/* header */}
            </View>
            <View style={{borderWidth:1,flex:0.4}}>
                {/* input section */}
                <TextInput
                    style={styles.inputBox}
                    value={id}
                    placeholder="id를 입력해주세요"
                    onChangeText={(text)=>{setId(text)}}
                />
                <TextInput 
                    style={styles.inputBox}
                    value={pw}
                    placeholder="pw를 입력해주세요"
                    onChangeText={(text)=>{setPw(text)}}
                />
            </View>
            <View style={{borderWidth:1,alignItems:"center",flex:0.4,justifyContent:"center"}}>
                {/* btn section */}
                <LoginButton title="구글" image="" onPressLogButton={()=>{}}/>
                <LoginButton title="카카오" image="" onPressLogButton={()=>{}}/>
                <LoginButton title="노나방" image="" onPressLogButton={()=>{}}/>
                <Text>계정이 없으신가요? 회원가입</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLOR.MAIN_ORANGE
    },
    inputBox:{
        borderWidth:1,
        width:"70%",
        height:50,
        alignSelf:"center",
        backgroundColor:"white",
        borderRadius:20,
        paddingLeft:20,
        marginBottom:8
    }
})