import { useRef, useState } from "react"
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { COLOR } from "../../../colors/colors"
import { useSignUp } from "../../../hooks/useSignUp"

export const ModalSignUpView = ({handleClosePress}:any) => {
    const {
        getAge,
        getId,
        getName,
        getPw,
        setAge,
        setId,
        setName,
        setPw,} = useSignUp() //update는 훅으로 진행하고 나중에 서버에 데이터 요청시 수정 필요
    const InputBox = ({
        value,
        setValue,
        title
    }:any) => {
        const inputRef = useRef<TextInput>(null);
        return(
            <View style={{marginBottom:4}}>
            <Text style={{marginBottom:4}}>{title}</Text>
            <TextInput 
                ref = {inputRef}
                style={styles.textInput}
                value={value}
                onChangeText={(value)=>{setValue(value)}}
                placeholder="이름을 입력해주세요"
                autoFocus={false}
            />
            </View>
        )
    }
    const onPressClearButton = () => {
        
        const data = {
            name:getName(),
            id:getId(),
            pw:getPw(),
            age:getAge()
        }
        handleClosePress()
        console.log(data)

    }
    return(
        <View style={styles.container}>
            <View style={{flex:0.3,paddingVertical:20,}}>
                <Text style={{fontSize:22,fontWeight:"bold",}}>간단한 가입을 통해{'\n'}룸메이트를 구해보세요!</Text>
                {/* <Text>노나방에서 원하는 룸메이트를 찾을 수 있는 </Text> */}
            </View>
            <View  style={{alignItems:"center",flex:0.7}}>
                <View style={{width:"100%",marginBottom:20,}}>
                <Text style={{color:COLOR.TEXT_LIGHTGRAY,paddingHorizontal:30}}>회원정보 입력</Text>
                </View>
                <InputBox value={getName} setValue ={setName} title="이름"/>
                <InputBox value={getId} setValue ={setId} title="아이디"/>
                <InputBox value={getPw} setValue ={setPw} title="비밀번호"/>
                <InputBox value={getAge} setValue ={setAge} title="나이"/>
                
                <Pressable 
                    style={{
                        borderWidth:1,
                        backgroundColor:COLOR.BUTTON_BLACK,
                        width:"60%",
                        height:50,
                        alignItems:"center",
                        justifyContent:"center",
                        borderRadius:25,
                        marginTop:20
                    }}
                onPress={onPressClearButton}>
                    <Text style={{color:"white"}}>확인</Text>
                    </Pressable>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20
    },
    textInput:{
        width:250,
        borderWidth:1,
        borderColor:COLOR.BORDERSHADOW_BLACK,
        marginBottom:8,
        height:40,
        borderRadius:15,
        paddingHorizontal:4
    }
})