import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LandScreen } from "../screens/landing/LandScreen"
import { SignInScreen } from "../screens/landing/SignInScreen"
import { MainScreen } from "../screens/main/MainScreen"
import { MainStackNavigation } from "./MainStackNavigation"

const Stack = createNativeStackNavigator()
export default function RootStackNavigation (){
    return(
        <Stack.Navigator
            initialRouteName="Land"
            screenOptions={{
                headerShown:false
            }}>
            <Stack.Screen name="Land" component={LandScreen}/>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="MainStack" component={MainStackNavigation}/>
        </Stack.Navigator>
    )
}