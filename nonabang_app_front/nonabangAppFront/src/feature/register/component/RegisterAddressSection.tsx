import { StyleSheet, Text, TextInput, View } from "react-native"
import { SubTitle } from "../../../components/SubTitle"
import { Line } from "../../../components/Line"
import { useRegister } from "../../../hooks/useRegister"
import { COLOR } from "../../../colors/colors"
import { useState } from "react"

export const ResgisterAddressSection = () => {
    const { getAddress } = useRegister()
    const [onFocusInput,setOnFocusInpt] = useState(false)
    const [text,setText] = useState("")
    const onFocusAddressInput = () =>{
        setOnFocusInpt(true)
    }
    const styles = StyleSheet.create({
        addressBox: {
            borderWidth: 0.8,
            padding:5,
            borderColor:COLOR.BORDERSHADOW_BLACK,
            marginTop: 10,
            height:40,
            justifyContent:"center"
        },
        inputAddress: {
            borderWidth:onFocusInput? 3:0.8,
            borderRadius:onFocusInput?10:0,
            padding:5,
            borderColor:onFocusInput?COLOR.MAIN_ORANGE:COLOR.BORDERSHADOW_BLACK,
            marginTop: 10,
            height:40,
            justifyContent:"center",
            color:COLOR.BUTTON_BLACK
        },
        container:{
            height:110,
            
    
        },
        getAddressText :{
            color:COLOR.BUTTON_BLACK,
            fontSize:16
        }
    })
    return (
        <View style={{ padding: 15 }}>
            <SubTitle title="상세 주소" />
            <Line />
            <View style={styles.container}>
                <View style={styles.addressBox}>
                    <Text style={styles.getAddressText}>{getAddress()}</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.inputAddress}
                        placeholder="상세 주소를 입력해주세요"
                        onFocus={onFocusAddressInput}
                        onEndEditing={()=>{setOnFocusInpt(false)}}
                        
                        value={text}
                        onChangeText={(v)=>{setText(v)}}
                    />
                </View>
            </View>

        </View>
    )
    
}

