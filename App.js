import Prova from "./Terceira/Prova";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Questao1 from "./Terceira/Questao1"
import Questao2 from "./Terceira/Questao2"
import Questao3 from "./Terceira/Questao3"

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Prova 4"
          component={Prova}
          options={{title:"Prova 4 - Casseb"}}
        />
        <Stack.Screen
          name="Questao1"
          component={Questao1}
        />
        <Stack.Screen
          name="Questao2"
          component={Questao2}
        />
        <Stack.Screen
          name="Questao3"
          component={Questao3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )

}