import {View, FlatList, StyleSheet, Text, Image, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";

export default function MealDetailsScreen ({route, navigation})  {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler () {
        console.log('Pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" onPress={headerButtonPressHandler} color="white"/>
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return <ScrollView style={styles.rootContainer}>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>

                <MealDetails
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    duration={selectedMeal.duration}
                    textStyle={styles.detailText}
                />

                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients} />

                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps} />
                    </View>
                </View>



           </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },

    image: {
        width: '100%',
        height: 350,
    },

    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },

    detailText: {
        color: 'white',
    },

    listOuterContainer: {
        alignItems: "center",
    },

    listContainer: {
        width: "80%",
    }

});