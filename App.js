import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import Sinopse from './screens/Sinopse';
import Dieta from './screens/Dieta';
import Gorduras from './screens/Gorduras';
import TiposGordura from './screens/TiposGordura';
import Calorias from './screens/Calorias';
import Personagens from './screens/Personagens';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  function header(name){
    return(
      {
        headerStyle: {
          height: '10vh',
          position: 'absolute',
          title: name
        }
      }
    );
  };
  return (
    <Stack.Navigator initialRouteName='Home' >
      <Stack.Screen name="Home" component={Home} options={header('Home')} />
      <Stack.Screen name="Sinopse" component={Sinopse} options={headerOptions} />
      <Stack.Screen name="Dieta" component={Dieta} options={headerOptions} />
      <Stack.Screen name="Gorduras" component={Gorduras} options={headerOptions} />
      <Stack.Screen name="TiposGordura" component={TiposGordura} options= {{
          headerStyle: {
            height: '10vh',
            position: 'absolute'
          },
          title: 'Dieta do Spurlock'
        }} />
      <Stack.Screen name="Calorias" component={Calorias} options={headerOptions} />
      <Stack.Screen name="Personagens" component={Personagens} options={headerOptions} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack  />
    </NavigationContainer>

  );
}

