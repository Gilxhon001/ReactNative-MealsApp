import {Text, StyleSheet} from "react-native";

function Subtitle({children}) {
    return <Text style={styles.subtitle}>{children}</Text>
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: '#efc6ac',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        borderBottomColor: '#efc6ac',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
    }
})