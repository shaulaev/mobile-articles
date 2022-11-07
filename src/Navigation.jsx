import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./HomeScreen";
import { OneArticle } from "./OneArticle";

const Stack = createNativeStackNavigator()

export const Navigate = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ HomeScreen } options={{title: "Новости"}} />
                <Stack.Screen name="Article" component={ OneArticle } options={{title: "Статья"}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}