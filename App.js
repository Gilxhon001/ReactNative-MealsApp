import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <StatusBar style='light' />
          <NavigationContainer>
              <Stack.Navigator screenOptions={{
                  headerStyle: {backgroundColor: '#360b0b'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#571c1c'}
              }}>
                  <Stack.Screen
                      name="MealsCategories"
                      component={CategoriesScreen}
                      options={{
                          title: 'All Categories',
                      }}
                  />
                  <Stack.Screen
                      name="MealsOverview"
                      component={MealsOverviewScreen}
                  />

                  <Stack.Screen
                      name="MealDetail"
                      component={MealDetailsScreen}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
