import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LandScreen } from "../screens/landing/LandScreen"
import { SignInScreen } from "../screens/landing/SignInScreen"
import { MainScreen } from "../screens/main/MainScreen"

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
            <Stack.Screen name="Main" component={MainScreen}/>
        </Stack.Navigator>
    )
}