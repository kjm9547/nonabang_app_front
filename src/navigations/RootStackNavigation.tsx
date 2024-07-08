import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LandScreen } from "../screens/landing/LandScreen"

const Stack = createNativeStackNavigator()
export default function RootStackNavigation (){
    return(
        <Stack.Navigator
            initialRouteName="Land"
            screenOptions={{
                headerShown:false
            }}
            >
            <Stack.Screen name="Land" component={LandScreen}/>
        </Stack.Navigator>
    )
}