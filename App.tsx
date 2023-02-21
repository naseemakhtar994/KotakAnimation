// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Main from './src/Main';
import Details from './src/Details';

const Stack = createSharedElementStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
         options={{ headerShown:false}}
        name="List" component={Main} />
        <Stack.Screen
          name="Detail"
          options={{ headerShown:false}}
          component={Details}
          sharedElements={(route, otherRoute, showing) => {
            const { item } = route.params;
            return [`main`];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;