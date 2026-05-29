import { View, Text, StyleSheet } from "react-native";

export default function Bluetooth() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Configurações do Bluetooth
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    titulo: {
        fontSize: 22,
        fontWeight: "bold",
    },
});