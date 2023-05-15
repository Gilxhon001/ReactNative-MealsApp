import MealsList  from "../components/MealsList/MealsList";
import {FavoritesContext} from "../store/context/favorites-context";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, Text, View} from "react-native";
import {useSelector} from "react-redux";
// import {useContext} from "react";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));


    if (favoriteMealIds.length === 0) {
        return <View style={styles.container}>
                    <Text style={styles.text}>YOU DONT HAVE ANY FAVORITES</Text>
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