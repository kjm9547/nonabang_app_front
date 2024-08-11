import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { ResisterScreen } from "../screens/register/RegistScreen"
import { ResisterAddreessScreen } from "../screens/register/RegisterAddressScreent"
import { RegisterDetailView } from "../feature/register/RegisterDetailView"

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
        <Stack.Screen name="RegisterDetail" component={RegisterDetailView} />
    </Stack.Navigator>
    )
}