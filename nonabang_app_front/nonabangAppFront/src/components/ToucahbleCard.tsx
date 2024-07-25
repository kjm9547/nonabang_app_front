import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type props ={
    title:any,
    width:any,
    height:any,
    onPressCard:(props:any)=>void,
    marginRight:any,
    borderRadius:any
}
export const TouchableCard = ({
    title,
    width,
    height,
    onPressCard,
    marginRight,
    borderRadius
}: props) => {
    return (
        <TouchableOpacity style={{
            borderWidth:1,
            width:width,
            height:height,
            marginRight:marginRight,
            borderRadius:borderRadius
        }}
        onPress={()=>{onPressCard(title)}}
        >
            <Text>{title}</Text>
        </TouchableOpacity>

    )
}

