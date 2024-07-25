import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SearchMateScreen } from "../screens/searchmate/SerachMateScreen"
import { MainScreen } from "../screens/main/MainScreen"

const Stack = createNativeStackNavigator()
export const MainStackNavigation = () => {
    return(
        <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
            headerShown:false
        }}>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="SearchMate" component={SearchMateScreen}/>
        
    </Stack.Navigator>
    )
}