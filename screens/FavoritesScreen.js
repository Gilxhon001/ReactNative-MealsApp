import MealsList  from "../components/MealsList/MealsList";
import {useContext} from "react";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";

function FavoritesScreen() {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

    if (favoriteMeals.length === 0) {
        return <View style={styles.container}>
                    <Text style={styles.text}>You haven't added any favorites yet</Text>
               </View>

    }

    return <MealsList items={favoriteMeals}  />
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 22,
        textAlign: "center",
        color: "rgba(255,255,255,0.21)",
    }
});