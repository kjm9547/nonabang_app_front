import { Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { SocialLoginGoogle } from "./../sociallogin/SocialLoginGoogle"
import { SocialLoginNaver } from "./../sociallogin/SocialLoginNaver"
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"
import { COLOR } from "../../../colors/colors" 
import { LoginButton } from "../../../components/LoginButton"
import { useState } from "react"

type props={
    handlePresentModalPress:()=>void,
    isExpanded:any
}
export const BackDropView = ({
    handlePresentModalPress,
    isExpanded
}:props) => {
    const [id,setId] = useState('')
    const [pw,setPw] = useState('')
    const navigation = useNavigation()
    return(
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.4,alignItems:"center"}}>
                {/* header */}
                <Pressable 
                    style={{flex:0.5,width:"100%",paddingHorizontal:20}}
                    onPress={()=>{navigation.goBack()}}> 
                <Icon size={22} color={COLOR.BUTTON_BLACK} name="chevron-back"/>
                </Pressable>
                <Image 
                    style={{}}
                    source={require("../../../assets/img/nonabangLogoTest.png")}/>
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
                <Pressable>
                <Text>메인페이지 이동</Text>
                </Pressable>
            </View>
            <View style={{alignItems:"center",flex:0.4,justifyContent:"center"}}>
                {/* btn section */}
               <SocialLoginGoogle/>
               <SocialLoginNaver/>
                <LoginButton title="노나방으" image="" onPressLogButton={()=>{}}/>
                <TouchableOpacity onPress={handlePresentModalPress}>
                <Text>계정이 없으신가요? 회원가입</Text>
                </TouchableOpacity>
            </View>
            {isExpanded?<View style={{position:'absolute',backgroundColor:'#00000070',width:1000,height:1000,}}/>:null}
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
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
})