import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ResisterScreen } from "../screens/register/RegistScreen"
import { ResisterAddreessScreen } from "../screens/register/RegisterAddressScreent"

const Stack = createNativeStackNavigator()
export const RegisterStackNavigation = () => {
    return(
        <Stack.Navigator
        initialRouteName="RegisterMain"
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name="RegisterMain" component={ResisterScreen}/>
        <Stack.Screen name="RegisterAddress" component={ResisterAddreessScreen} />
    </Stack.Navigator>
    )
}