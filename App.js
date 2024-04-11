import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Sinopse from './screens/Sinopse';
import Home from './screens/Home';
import Gorduras from './screens/Gorduras';

const Stack = createStackNavigator();

function MyStack() {
  const headerOptions = {
    title: '',
    headerStyle: {
      height: '10vh',
      zIndex: '0',
    },
    headerShown: true,
  };
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={Home}
        options={headerOptions} />
      <Stack.Screen name="Sinopse" component={Sinopse} options={[headerOptions, {headerTransparent: true, title: 'Super\n Size Me'}]} />
      <Stack.Screen name="Gorduras" component={Gorduras} options={headerOptions} />
    </Stack.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>

  );
}

