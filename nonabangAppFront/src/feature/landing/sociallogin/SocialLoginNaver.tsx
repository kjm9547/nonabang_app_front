import { Text, TouchableOpacity, View } from "react-native"
import { COLOR } from "../../../colors/colors"
import { useGoogle } from "../../../hooks/useGoogle"
import { useEffect } from "react"
import { useNaver } from "../../../hooks/useNaver"
const {
  naverInitialize,
  naverLogin,
} = useNaver()
export const SocialLoginNaver = () => {
  useEffect(() => {
    naverInitialize()
  }, [])
  return (
    <>
      <TouchableOpacity style={{
        width: "70%",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 0.8,
        borderRadius: 20,
        marginBottom: 6,
        borderColor: COLOR.BORDERSHADOW_BLACK,
        backgroundColor: COLOR.NAVER_GREEN,
        flexDirection: 'row'
      }}
        onPress={() => { naverLogin() }}>
        <View style={{ flex: 0.25, alignItems: "center", }}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "white", marginLeft: -20 }}>N</Text>
        </View>
        <View style={{ flex: 0.65, }}>
          <Text style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold"
          }}>네이버로 계속하기</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}