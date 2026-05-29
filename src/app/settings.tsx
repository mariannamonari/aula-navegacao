import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Settings() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Página de Configurações
            </Text>

            <Link href="/">
                <Text style={styles.link}>
                    Navegar até a Home
                </Text>
            </Link>

            <Link href="/ajuda">
                <Text style={styles.link}>
                    Navegar até a Ajuda
                </Text>
            </Link>
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
        marginBottom: 20,
        fontWeight: "bold",
    },

    link: {
        marginTop: 10,
    },
});