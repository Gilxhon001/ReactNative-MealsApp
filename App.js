import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/favorites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return <Drawer.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#360b0b'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#571c1c'},
        drawerContentStyle: {backgroundColor: '#360b0b'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#360b0b',
        drawerActiveBackgroundColor: '#bda4a4',
    }}>
        <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
            title: 'All Categories',
            drawerIcon: ({color, size}) => <Ionicons name='list' color={color} size={size} />,
        }}/>
        <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
            drawerIcon: ({color, size}) => <Ionicons name='star' color={color} size={size} />,
        }}/>
    </Drawer.Navigator>;
}
export default function App() {
  return (
      <>
        <StatusBar style='light' />
        {/*<FavoritesContextProvider>*/}
        <Provider store={store}>

          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerStyle: {backgroundColor: '#360b0b'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#571c1c'}
              }}>
                  <Stack.Screen
                      name="Drawer"
                      component={DrawerNavigator}
                      options={{
                          headerShown: false,
                      }}
                  />
                  <Stack.Screen
                      name="MealsOverview"
                      component={MealsOverviewScreen}
                  />

                  <Stack.Screen
                      name="MealDetail"
                      component={MealDetailsScreen}
                      options={{
                          title: 'About the Meal',
                      }}
                  />
              </Stack.Navigator>
          </NavigationContainer>

          </Provider>
          {/*</FavoritesContextProvider>*/}
      </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
