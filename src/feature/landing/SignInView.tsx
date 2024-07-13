import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { COLOR } from "../../colors/colors"
import { LoginButton } from "../../components/LoginButton"
import { useState } from "react"

export const SignInView = () => {
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.4,alignItems:"center"}}>
                {/* header */}
                <Pressable style={{flex:0.5,width:"100%"}}> 
                <Text>{'<'}</Text>
                </Pressable>
                
                <Image 
                    style={{}}
                    source={require("../../assets/img/nonabangLogoTest.png")}/>
                <Text style={{fontWeight:"bold",fontSize:22,textAlign:"center"}}>간편하게 가입하고 {'\n'}다양한 서비스를 이용해주세요.</Text>
            </View>
            <View style={{flex:0.2,alignItems:"center"}}>
                {/* input section */}
                <TextInput
                    style={styles.inputBox}
                    value={id}
                    placeholderTextColor={COLOR.TEXT_LIGHTGRAY}
                    placeholder="id를 입력해주세요"
                    onChangeText={(text)=>{setId(text)}}
                />
                <TextInput 
                    style={styles.inputBox}
                    value={pw}
                    placeholderTextColor={COLOR.TEXT_LIGHTGRAY}
                    placeholder="pw를 입력해주세요"
                    onChangeText={(text)=>{setPw(text)}}
                />
                <Text>계정이 없으신가요? <Text style={{color:COLOR.BUTTON_BLACK}}>회원가입</Text></Text>
            </View>
            <View style={{alignItems:"center",flex:0.4,justifyContent:"center"}}>
                {/* btn section */}
                <LoginButton title="구글" image="" onPressLogButton={()=>{}}/>
                <LoginButton title="카카오" image="" onPressLogButton={()=>{}}/>
                <LoginButton title="노나방으" image="" onPressLogButton={()=>{}}/>
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
        borderRadius:15,
        paddingLeft:20,
        marginBottom:8
    }
})