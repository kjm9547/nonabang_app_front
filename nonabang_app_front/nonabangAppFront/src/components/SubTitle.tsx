import { Text, View } from "react-native"

type props = {
    title:string
}
export const SubTitle = ({title}:props) => {
    return (
        <Text style={{
            fontSize: 16,
        fontWeight: "800"
        }}>{title}</Text>
    )
} 